"use client";

import React, { useEffect, useRef, useCallback, Suspense } from 'react';
import * as THREE from 'three';

interface SneakProps {
  text?: string;
  className?: string;
}

class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Sneak component error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="bg-red-50 border border-red-200 text-red-800 p-4 rounded-lg">
          <p className="font-medium">Failed to load 3D text effect</p>
          <p className="text-sm opacity-80">Please refresh the page to try again.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

const textureCache: Record<string, THREE.Texture> = {};

function detectTheme(): boolean {
  if (typeof window === 'undefined') return false;
  return document.documentElement.classList.contains('dark');
}

async function createTextTexture(text: string): Promise<THREE.Texture> {
  const cacheKey = `${text}-${detectTheme() ? 'dark' : 'light'}`;
  if (textureCache[cacheKey]) {
    return textureCache[cacheKey];
  }

  return new Promise((resolve) => {
    try {
      const isDark = detectTheme();
      const textColor = isDark ? '#ffffff' : '#000000';
      const bgColor = isDark ? '#000000' : '#ffffff';
      
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        throw new Error('Could not create canvas context');
      }
      
      // Set canvas size
      canvas.width = 2048;
      canvas.height = 512;
      
      // Draw background
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw text
      ctx.fillStyle = textColor;
      ctx.font = 'bold 240px Arial, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(text, canvas.width / 2, canvas.height / 2);
      
      // Create texture
      const texture = new THREE.CanvasTexture(canvas);
      texture.generateMipmaps = false;
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;
      texture.wrapS = THREE.ClampToEdgeWrapping;
      texture.wrapT = THREE.ClampToEdgeWrapping;
      
      // Cache the texture
      textureCache[cacheKey] = texture;
      resolve(texture);
    } catch (error) {
      console.error('Error creating texture:', error);
      // Return a fallback texture
      const canvas = document.createElement('canvas');
      canvas.width = 2;
      canvas.height = 2;
      resolve(new THREE.CanvasTexture(canvas));
    }
  });
}

const SneakContent: React.FC<SneakProps> = ({ text = "WENZHOMES", className = "" }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameId = useRef<number | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.OrthographicCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const shaderMaterialRef = useRef<THREE.ShaderMaterial | null>(null);
  const planeRef = useRef<THREE.Mesh | null>(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const lastTime = useRef<number>(0);
  const isMounted = useRef(true);
  
  const handleResize = useCallback((): void => {
    const container = containerRef.current;
    const camera = cameraRef.current;
    const renderer = rendererRef.current;
    
    if (!container || !camera || !renderer) return;
    
    const width = container.clientWidth;
    const height = container.clientHeight;
    const aspect = width / height;
    const cameraDistance = 3.5;
    
    camera.left = -cameraDistance * aspect;
    camera.right = cameraDistance * aspect;
    camera.top = cameraDistance;
    camera.bottom = -cameraDistance;
    camera.updateProjectionMatrix();
    
    renderer.setSize(width, height);
  }, []);

  const handleMouseMove = useCallback((event: MouseEvent): void => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / container.clientWidth) * 2 - 1;
    const y = -((event.clientY - rect.top) / container.clientHeight) * 2 + 1;
    
    mousePosition.current = { x, y };
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;
    
    isMounted.current = true;
    const container = containerRef.current;
    
    // Initialize Three.js scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    
    // Set up camera
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
    
    // Set up renderer
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true,
      powerPreference: "high-performance"
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    rendererRef.current = renderer;
    
    // Clear any existing content
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    container.appendChild(renderer.domElement);
    
    // Set initial background color based on theme
    const isDark = detectTheme();
    scene.background = new THREE.Color(isDark ? 0x000000 : 0xffffff);
    
    // Create shader material
    const shaderMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        resolution: { value: new THREE.Vector2() },
        mouse: { value: new THREE.Vector2() },
        texture: { value: null }
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform vec2 resolution;
        uniform vec2 mouse;
        uniform sampler2D texture;
        varying vec2 vUv;
        
        void main() {
          vec2 uv = vUv;
          vec4 texColor = texture2D(texture, uv);
          gl_FragColor = texColor;
        }
      `
    });
    shaderMaterialRef.current = shaderMaterial;
    
    // Create plane with shader material
    const geometry = new THREE.PlaneGeometry(5, 1, 1, 1);
    const plane = new THREE.Mesh(geometry, shaderMaterial);
    plane.position.z = 0;
    scene.add(plane);
    planeRef.current = plane;
    
    // Load texture
    createTextTexture(text).then((texture) => {
      if (shaderMaterialRef.current) {
        shaderMaterialRef.current.uniforms.texture.value = texture;
        shaderMaterialRef.current.needsUpdate = true;
      }
    });
    
    // Animation loop
    const animate = () => {
      if (!isMounted.current) return;
      
      animationFrameId.current = requestAnimationFrame(animate);
      
      const time = performance.now() * 0.001; // Convert to seconds
      
      // Update shader uniforms
      if (shaderMaterialRef.current) {
        shaderMaterialRef.current.uniforms.time.value = time;
        shaderMaterialRef.current.uniforms.mouse.value.set(
          mousePosition.current.x,
          mousePosition.current.y
        );
        shaderMaterialRef.current.uniforms.resolution.value.set(
          container.clientWidth,
          container.clientHeight
        );
      }
      
      // Rotate plane
      if (planeRef.current) {
        planeRef.current.rotation.z = Math.sin(time * 0.5) * 0.1;
      }
      
      // Render scene
      renderer.render(scene, camera);
    };
    
    // Start animation
    animate();
    
    // Event listeners
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    
    // Cleanup function
    return () => {
      isMounted.current = false;
      
      // Cancel animation frame
      if (animationFrameId.current !== null) {
        cancelAnimationFrame(animationFrameId.current);
      }
      
      // Remove event listeners
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      
      // Clean up Three.js objects
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
      
      if (shaderMaterialRef.current) {
        shaderMaterialRef.current.dispose();
      }
      
      if (planeRef.current) {
        if (planeRef.current.geometry) {
          planeRef.current.geometry.dispose();
        }
        if (planeRef.current.material) {
          if (Array.isArray(planeRef.current.material)) {
            planeRef.current.material.forEach(material => material.dispose());
          } else {
            planeRef.current.material.dispose();
          }
        }
      }
      
      // Clear refs
      sceneRef.current = null;
      cameraRef.current = null;
      rendererRef.current = null;
      shaderMaterialRef.current = null;
      planeRef.current = null;
    };
  }, [text, handleResize, handleMouseMove]);
  
  return <div ref={containerRef} className={`w-full h-[600px] ${className}`} />;
};

const Sneak: React.FC<SneakProps> = (props) => (
  <ErrorBoundary>
    <Suspense 
      fallback={
        <div className="flex items-center justify-center w-full h-full">
          <div className="animate-pulse text-gray-400">Loading 3D effect...</div>
        </div>
      }
    >
      <SneakContent {...props} />
    </Suspense>
  </ErrorBoundary>
);

export { Sneak };
export default Sneak;
