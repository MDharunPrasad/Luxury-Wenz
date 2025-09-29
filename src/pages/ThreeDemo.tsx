import { Sneak } from "@/components/ui/sneak";

export default function ThreeDemo() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          3D Text Interaction Demo
        </h1>
        <div className="rounded-xl overflow-hidden shadow-2xl bg-white dark:bg-gray-800 p-8">
          <Sneak />
        </div>
        <div className="mt-8 text-center text-gray-600 dark:text-gray-300">
          <p>Hover over the text to see the 3D effect</p>
          <p className="mt-2 text-sm">This demo uses Three.js for 3D rendering</p>
        </div>
      </div>
    </div>
  );
}
