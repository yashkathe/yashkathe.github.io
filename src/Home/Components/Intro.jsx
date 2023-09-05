import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

import styles from "./Intro.module.css";

const Intro = () => {
	const [text] = useTypewriter({
		words: [
			"I'm a MERN stack developer, passionate about crafting web applications",
			"I can build robust backends to power your web projects.",
			"I excel in building responsive frontend applications with React.",
			"I love optimizing workflows and server configurations with Shell scripting and Linux",
			"I develop exciting IoT projects too.",
			"I develop fast and efficient web scrapers to gather data swiftly.",
		],
		loop: true,
		typeSpeed: 40,
		deleteSpeed: 10,
	});

	return (
		<div className={styles.parent}>
			<h1>Hello, I'm Yash Kathe</h1>
			<p>
				{text}
				<Cursor cursorColor='#e4e3e3' />
			</p>
		</div>
	);
};

export default Intro;
