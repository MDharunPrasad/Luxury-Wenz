"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

interface SneakProps {
  text?: string;
  className?: string;
}

// Helper function to detect theme
function detectTheme(): boolean {
  if (typeof window === 'undefined') return false;
  return document.documentElement.classList.contains('dark');
}

// Helper function to create text texture
function createTextTexture(text: string): Promise<THREE.Texture> {
  return new Promise((resolve) => {
    const isDark = detectTheme();
    const textColor = isDark ? '#ffffff' : '#000000';
    const bgColor = isDark ? '#000000' : '#ffffff';
    
    const svg = `
      <svg width="2048" height="512" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="${bgColor}"/>
        <text x="50%" y="50%" 
              font-family="Arial, sans-serif" 
              font-size="240" 
              font-weight="bold" 
              text-anchor="middle" 
              dominant-baseline="middle" 
              fill="${textColor}">${text}</text>
      </svg>
    `;

    const img = new Image();
    
    try {
      const svgBlob = new Blob([svg], { type: 'image/svg+xml' });
      const url = URL.createObjectURL(svgBlob);
      
      img.onload = () => {
        try {
          const canvas = document.createElement('canvas');
          canvas.width = 2048;
          canvas.height = 512;
          const ctx = canvas.getContext('2d');
          
          if (!ctx) {
            throw new Error('Could not get 2D context');
          }
          
          ctx.imageSmoothingEnabled = true;
          (ctx as any).imageSmoothingQuality = 'high';
          ctx.drawImage(img, 0, 0);
          
          const texture = new THREE.CanvasTexture(canvas);
          texture.generateMipmaps = false;
          texture.minFilter = THREE.LinearFilter;
          texture.magFilter = THREE.LinearFilter;
          texture.wrapS = THREE.ClampToEdgeWrapping;
          texture.wrapT = THREE.ClampToEdgeWrapping;
          
          URL.revokeObjectURL(url);
          resolve(texture);
        } catch (error) {
          console.error('Error creating texture:', error);
          // Fallback to a blank texture
          const canvas = document.createElement('canvas');
          canvas.width = 2;
          canvas.height = 2;
          resolve(new THREE.CanvasTexture(canvas));
        }
      };
      
      img.onerror = () => {
        console.error('Failed to load image');
        const canvas = document.createElement('canvas');
        canvas.width = 2;
        canvas.height = 2;
        resolve(new THREE.CanvasTexture(canvas));
      };
      
      img.src = url;
    } catch (error) {
      console.error('Error creating SVG blob:', error);
      const canvas = document.createElement('canvas');
      canvas.width = 2;
      canvas.height = 2;
      resolve(new THREE.CanvasTexture(canvas));
    }
  });
}

export const Sneak = ({ text = "WENZHOMES", className = "" }: SneakProps): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameId = useRef<number>();
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.OrthographicCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const shaderMaterialRef = useRef<THREE.ShaderMaterial | null>(null);
  const planeRef = useRef<THREE.Mesh | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Initialize scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    
    const container = containerRef.current;
    const aspect = container.clientWidth / container.clientHeight;
    const cameraDistance = 3.5;

    const camera = new THREE.OrthographicCamera(
      -cameraDistance * aspect,
      cameraDistance * aspect,
      cameraDistance,
      -cameraDistance,
      0.01,
      1000
    );
    camera.position.set(0, -10, 4);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    rendererRef.current = renderer;
    
    // Clear any existing canvas elements first
    while (container.firstChild) {
      const child = container.firstChild;
      if (child) {
        container.removeChild(child);
      }
    }
    
    container.appendChild(renderer.domElement);
    
    // Set initial background color
    const isDark = detectTheme();
    scene.background = new THREE.Color(isDark ? 0x000000 : 0xffffff);

    // Shader material
    const shaderMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uTexture: { value: null },
        uDisplacement: { value: new THREE.Vector3(1000, 1000, 1000) },
      },
      vertexShader: `
        varying vec2 vUv;
        uniform vec3 uDisplacement;

        float easeInOutCubic(float x) {
          return x < 0.5 ? 4. * x * x * x : 1. - pow(-2. * x + 2., 3.) / 2.;
        }

        float map(float value, float min1, float max1, float min2, float max2) {
          return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
        }

        void main() {
          vUv = uv;
          vec3 new_position = position;

          vec4 localPosition = vec4(position, 1.);
          vec4 worldPosition = modelMatrix * localPosition;

          float dist = length(uDisplacement - worldPosition.xyz);
          float min_distance = 3.;

          if (dist < min_distance) {
            float distance_mapped = map(dist, 0., min_distance, 1., 0.);
            float val = easeInOutCubic(distance_mapped) * 1.;
            new_position.z += val;
          }

          gl_Position = projectionMatrix * modelViewMatrix * vec4(new_position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec2 vUv;
        uniform sampler2D uTexture;
        void main() {
          vec4 color = texture2D(uTexture, vUv);
          if (color.a < 0.1) discard;
          gl_FragColor = vec4(color.rgb, 1.0);
        }
      `,
      transparent: true,
      depthWrite: false,
      side: THREE.FrontSide,
    });
    shaderMaterialRef.current = shaderMaterial;

    // Create text texture
    createTextTexture(text).then((texture) => {
      if (shaderMaterialRef.current) {
        shaderMaterialRef.current.uniforms.uTexture.value = texture;
      }
    });

    // Create plane geometry
    const geometry = new THREE.PlaneGeometry(15, 15, 100, 100);
    const plane = new THREE.Mesh(geometry, shaderMaterial);
    plane.rotation.z = Math.PI / 4;
    scene.add(plane);
    planeRef.current = plane;

    // Mouse interaction
    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();

    const onPointerMove = (event: PointerEvent) => {
      if (!containerRef.current || !cameraRef.current || !planeRef.current) return;
      
      const bounds = containerRef.current.getBoundingClientRect();
      pointer.x = ((event.clientX - bounds.left) / bounds.width) * 2 - 1;
      pointer.y = -((event.clientY - bounds.top) / bounds.height) * 2 + 1;

      raycaster.setFromCamera(pointer, cameraRef.current);
      const intersects = raycaster.intersectObject(planeRef.current);

      if (intersects.length > 0 && shaderMaterialRef.current) {
        shaderMaterialRef.current.uniforms.uDisplacement.value.copy(intersects[0].point);
      }
    };

    // Handle window resize
    const onWindowResize = () => {
      if (!containerRef.current || !cameraRef.current || !rendererRef.current) return;
      
      const container = containerRef.current;
      const aspect = container.clientWidth / container.clientHeight;
      const cameraDistance = 3.5;
      
      cameraRef.current.left = -cameraDistance * aspect;
      cameraRef.current.right = cameraDistance * aspect;
      cameraRef.current.top = cameraDistance;
      cameraRef.current.bottom = -cameraDistance;
      cameraRef.current.updateProjectionMatrix();
      
      rendererRef.current.setSize(container.clientWidth, container.clientHeight);
    };

    // Theme change handler
    const handleThemeChange = () => {
      if (sceneRef.current) {
        const newTheme = detectTheme();
        sceneRef.current.background = new THREE.Color(newTheme ? 0x000000 : 0xffffff);
      }
      
      if (shaderMaterialRef.current?.uniforms.uTexture.value) {
        createTextTexture(text).then((texture) => {
          if (shaderMaterialRef.current?.uniforms.uTexture.value) {
            shaderMaterialRef.current.uniforms.uTexture.value.dispose();
            shaderMaterialRef.current.uniforms.uTexture.value = texture;
          }
        }).catch(console.error);
      }
    };

    // Set up event listeners
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('resize', onWindowResize);
    
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', handleThemeChange);
    
    const observer = new MutationObserver(handleThemeChange);
    observer.observe(document.documentElement, { 
      attributes: true, 
      attributeFilter: ['class', 'data-theme'] 
    });

    // Animation loop
    const animate = () => {
      animationFrameId.current = requestAnimationFrame(animate);
      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };
    
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('resize', onWindowResize);
      mediaQuery.removeEventListener('change', handleThemeChange);
      observer.disconnect();
      
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      
      // Cleanup Three.js resources
      const container = containerRef.current;
      if (container && rendererRef.current?.domElement) {
        container.removeChild(rendererRef.current.domElement);
      }
      
      if (shaderMaterialRef.current?.uniforms.uTexture.value) {
        shaderMaterialRef.current.uniforms.uTexture.value.dispose();
      }
      
      if (planeRef.current?.geometry) {
        planeRef.current.geometry.dispose();
      }
      
      shaderMaterialRef.current?.dispose();
      rendererRef.current?.dispose();
      
      sceneRef.current = null;
      cameraRef.current = null;
      rendererRef.current = null;
      shaderMaterialRef.current = null;
      planeRef.current = null;
    };
  }, [text]);

  return <div ref={containerRef} className={`w-full h-[600px] ${className}`} />;
};

export default Sneak;
