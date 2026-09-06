import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

/**
 * Hero 3D layer.
 *
 * A single sculpted metallic knot inside a wireframe shell, wrapped in a slow
 * drifting dust field. Everything is procedural: no textures, no HDR fetches,
 * low polygon counts, one render loop. Pointer position gently steers the
 * camera so the object reads as a physical form sitting behind the type.
 */

const IVORY = new THREE.Color("#f0ece3");
const BRONZE = new THREE.Color("#b28a4e");

function damp(current: number, target: number, lambda: number, delta: number) {
  return THREE.MathUtils.damp(current, target, lambda, delta);
}

function Knot({ lowPower }: { lowPower: boolean }) {
  const group = useRef<THREE.Group>(null);
  const inner = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    const g = group.current;
    if (!g) return;
    const { x, y } = state.pointer;
    g.rotation.y = damp(g.rotation.y, x * 0.55 + state.clock.elapsedTime * 0.06, 2.2, delta);
    g.rotation.x = damp(g.rotation.x, -y * 0.32, 2.2, delta);
    g.position.y = damp(g.position.y, y * 0.18, 1.6, delta);
    if (inner.current) {
      inner.current.rotation.z += delta * 0.08;
    }
  });

  return (
    <group ref={group}>
      <mesh ref={inner} castShadow={false}>
        <torusKnotGeometry args={[1.05, 0.32, lowPower ? 120 : 220, lowPower ? 16 : 32]} />
        <meshStandardMaterial
          color={IVORY}
          metalness={0.96}
          roughness={0.22}
          envMapIntensity={0.9}
        />
      </mesh>

      {/* Wireframe shell — gives depth without extra lighting cost. */}
      <mesh scale={2.35}>
        <icosahedronGeometry args={[1, lowPower ? 1 : 2]} />
        <meshBasicMaterial color={BRONZE} wireframe transparent opacity={0.16} />
      </mesh>
    </group>
  );
}

function Dust({ count }: { count: number }) {
  const points = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      const r = 3.2 + Math.random() * 4.6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.cos(phi) * 0.6;
      arr[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);
    }
    return arr;
  }, [count]);

  useFrame((state, delta) => {
    if (!points.current) return;
    points.current.rotation.y += delta * 0.02;
    points.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.06) * 0.05;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color={IVORY}
        size={0.016}
        sizeAttenuation
        transparent
        opacity={0.5}
        depthWrite={false}
      />
    </points>
  );
}

function Rig() {
  const { camera } = useThree();
  useFrame((state, delta) => {
    const { x, y } = state.pointer;
    camera.position.x = damp(camera.position.x, x * 0.5, 1.4, delta);
    camera.position.y = damp(camera.position.y, y * 0.35, 1.4, delta);
    camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function HeroScene({ lowPower = false }: { lowPower?: boolean }) {
  return (
    <Canvas
      dpr={lowPower ? [1, 1.25] : [1, 1.75]}
      gl={{ antialias: !lowPower, alpha: true, powerPreference: "high-performance" }}
      camera={{ position: [0, 0, 5.4], fov: 42 }}
    >
      <ambientLight intensity={0.35} />
      {/* Soft key + rim lighting reads as volumetric without any post-processing. */}
      <directionalLight position={[4, 5, 3]} intensity={2.4} color={IVORY} />
      <directionalLight position={[-5, -2, -3]} intensity={1.5} color={BRONZE} />
      <pointLight position={[0, 0, 3]} intensity={6} distance={9} color={BRONZE} />

      <Knot lowPower={lowPower} />
      <Dust count={lowPower ? 260 : 900} />
      {!lowPower ? <Rig /> : null}
      <fog attach="fog" args={["#0e0d0b", 6, 13]} />
    </Canvas>
  );
}
