import React, { Suspense } from "react";

import { OrbitControls, Point, Preload, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import CanvasLoader from "../../Shared/Loader";

const DesktopModel = () => {
	const computer = useGLTF("./desktop_pc/scene.gltf");

	return (
		<mesh>
			<hemisphereLight intensity={0.15} groundColor='black' />
			<pointLight intensity={1} />
			<spotLight
				position={[-20, 50, 5]}
				angle={0.12}
				penumbra={5}
				intensity={1}
				shadow-mapSize={1024}
			/>
			<primitive object={computer.scene} scale={1.7} position={[0, -5, 0]} />
		</mesh>
	);
};

const ComputerCanvas = () => {
	return (
		<Canvas
			style={{ width: "50vw" }}
			frameloop='demand'
			shadows
			camera={{ position: [65, 5, 0], fov: 25 }}
			gl={{ preserveDrawingBuffer: true }}>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls
					enableZoom={false}
					maxPolarAngle={Math.PI / 2.3}
					minPolarAngle={Math.PI / 2.3}
					rotateSpeed={0.1}
				/>
				<DesktopModel />
			</Suspense>

			<Preload all />
		</Canvas>
	);
};

export default ComputerCanvas;
