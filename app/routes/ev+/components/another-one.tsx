import React, { useState, useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Function to generate Voronoi pattern
function generateVoronoiTexture(
  size: number,
  numPoints: number,
  colors: string[]
): THREE.Texture {
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const context = canvas.getContext("2d");

  if (!context) {
    throw new Error("Could not get canvas context");
  }

  const points = [];
  for (let i = 0; i < numPoints; i++) {
    points.push({
      x: Math.random() * size,
      y: Math.random() * size,
      // Use hex colors for the Voronoi cells
      color: colors[i % colors.length],
    });
  }

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      let closestPoint = points[0];
      let minDistance = Number.MAX_VALUE;

      for (const point of points) {
        const distance = (point.x - x) ** 2 + (point.y - y) ** 2;
        if (distance < minDistance) {
          minDistance = distance;
          closestPoint = point;
        }
      }

      context.fillStyle = closestPoint.color;
      context.fillRect(x, y, 1, 1);
    }
  }

  return new THREE.CanvasTexture(canvas);
}

// Usage example

interface RotatingCubeProps {
  rotationSpeed?: number;
}

export const RotatingCube: React.FC<RotatingCubeProps> = ({
  rotationSpeed = 0.002,
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [color, setColor] = useState("#4169e1"); // royalblue

  const voronoiTexture = useMemo(
    () =>
      generateVoronoiTexture(512, 50, [
        "#cc5881",
        "#92b1e0",
        "#692742",
        "#80002D",
      ]),
    []
  );

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += rotationSpeed;
      meshRef.current.rotation.x += rotationSpeed;
    }
  });

  const handleClick = () => {
    setColor((prevColor) => (prevColor === "#92b1e0" ? "#cc5881" : "#92b1e0"));
  };

  return (
    <mesh ref={meshRef} onClick={handleClick}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={color} map={voronoiTexture} />
    </mesh>
  );
};

function App() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <RotatingCube />
    </Canvas>
  );
}

export default App;
