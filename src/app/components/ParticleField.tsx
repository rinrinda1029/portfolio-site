"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Particles({ count = 800, isDark }: { count?: number; isDark: boolean }) {
  const mesh = useRef<THREE.Points>(null);
  const mouse = useRef({ x: 0, y: 0 });

  const [positions, velocities] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
      vel[i * 3] = (Math.random() - 0.5) * 0.005;
      vel[i * 3 + 1] = (Math.random() - 0.5) * 0.005;
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.002;
    }
    return [pos, vel];
  }, [count]);

  const sizes = useMemo(() => {
    const s = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      s[i] = Math.random() * 2 + 0.5;
    }
    return s;
  }, [count]);

  useFrame(({ clock }) => {
    if (!mesh.current) return;
    const geo = mesh.current.geometry;
    const posAttr = geo.getAttribute("position") as THREE.BufferAttribute;
    const arr = posAttr.array as Float32Array;
    const t = clock.getElapsedTime();

    for (let i = 0; i < count; i++) {
      arr[i * 3] += velocities[i * 3] + Math.sin(t * 0.3 + i) * 0.001;
      arr[i * 3 + 1] += velocities[i * 3 + 1] + Math.cos(t * 0.2 + i) * 0.001;
      arr[i * 3 + 2] += velocities[i * 3 + 2];

      // Wrap around
      if (arr[i * 3] > 10) arr[i * 3] = -10;
      if (arr[i * 3] < -10) arr[i * 3] = 10;
      if (arr[i * 3 + 1] > 10) arr[i * 3 + 1] = -10;
      if (arr[i * 3 + 1] < -10) arr[i * 3 + 1] = 10;
    }

    posAttr.needsUpdate = true;
    mesh.current.rotation.y = t * 0.02;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-size"
          args={[sizes, 1]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={isDark ? 1.5 : 1.2}
        sizeAttenuation
        transparent
        opacity={isDark ? 0.3 : 0.12}
        color={isDark ? "#ff4d5a" : "#e63946"}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

function FloatingGrid({ isDark }: { isDark: boolean }) {
  const ref = useRef<THREE.Group>(null);

  const lines = useMemo(() => {
    const geometries: { start: [number, number, number]; end: [number, number, number] }[] = [];
    const gridSize = 20;
    const divisions = 20;
    const step = gridSize / divisions;

    for (let i = 0; i <= divisions; i++) {
      const pos = -gridSize / 2 + i * step;
      geometries.push(
        { start: [pos, -gridSize / 2, 0], end: [pos, gridSize / 2, 0] },
        { start: [-gridSize / 2, pos, 0], end: [gridSize / 2, pos, 0] }
      );
    }
    return geometries;
  }, []);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    ref.current.rotation.x = Math.PI * 0.35 + Math.sin(t * 0.1) * 0.05;
    ref.current.rotation.z = t * 0.02;
    ref.current.position.y = -3 + Math.sin(t * 0.15) * 0.5;
  });

  return (
    <group ref={ref}>
      {lines.map((line, i) => {
        const points = [
          new THREE.Vector3(...line.start),
          new THREE.Vector3(...line.end),
        ];
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        return (
          <lineSegments key={i} geometry={geometry}>
            <lineBasicMaterial
              color={isDark ? "#ffffff" : "#131313"}
              transparent
              opacity={isDark ? 0.03 : 0.02}
            />
          </lineSegments>
        );
      })}
    </group>
  );
}

function NeuralNetwork({ isDark }: { isDark: boolean }) {
  const groupRef = useRef<THREE.Group>(null);

  const { nodes, edges } = useMemo(() => {
    const nodeCount = 30;
    const n: THREE.Vector3[] = [];
    for (let i = 0; i < nodeCount; i++) {
      n.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 12,
          (Math.random() - 0.5) * 12,
          (Math.random() - 0.5) * 6
        )
      );
    }

    const e: [number, number][] = [];
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        if (n[i].distanceTo(n[j]) < 4) {
          e.push([i, j]);
        }
      }
    }
    return { nodes: n, edges: e };
  }, []);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const t = clock.getElapsedTime();
    groupRef.current.rotation.y = t * 0.03;
    groupRef.current.rotation.x = Math.sin(t * 0.05) * 0.1;
  });

  return (
    <group ref={groupRef}>
      {nodes.map((pos, i) => (
        <mesh key={`node-${i}`} position={pos}>
          <sphereGeometry args={[0.04, 8, 8]} />
          <meshBasicMaterial
            color={isDark ? "#ff4d5a" : "#e63946"}
            transparent
            opacity={0.4}
          />
        </mesh>
      ))}
      {edges.map(([a, b], i) => {
        const points = [nodes[a], nodes[b]];
        const geo = new THREE.BufferGeometry().setFromPoints(points);
        return (
          <lineSegments key={`edge-${i}`} geometry={geo}>
            <lineBasicMaterial
              color={isDark ? "#ff4d5a" : "#e63946"}
              transparent
              opacity={isDark ? 0.06 : 0.03}
            />
          </lineSegments>
        );
      })}
    </group>
  );
}

export default function ParticleField({ isDark }: { isDark: boolean }) {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Particles isDark={isDark} />
        <FloatingGrid isDark={isDark} />
        <NeuralNetwork isDark={isDark} />
      </Canvas>
    </div>
  );
}
