import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";
import './head.scss'

function Model(props) {
  const { scene } = useGLTF("/head.glb");

  useFrame(({ clock }) => {
    scene.rotation.y = clock.elapsedTime/15;
  });

  return <primitive object={scene} {...props} />;
}

function Head() {
  return (
    <div className="head-container">
      <Canvas dpr={[1, 2]} camera={{ near: 0.1, far: 1000, fov: 45 }} >
        <color attach="background" args={["#e8e8e8"]} /> {/* #cfcccc */}
        <ambientLight intensity={1} />
        <PresentationControls speed={1.5} global zoom={0.5} polar={[0, 0]} >
          <Stage environment={"apartment"} intensity={0} shadows={false}>
            <Model scale={0.007} />
          </Stage>
        </PresentationControls>
      </Canvas>
    </div>
  );
}

export default Head;