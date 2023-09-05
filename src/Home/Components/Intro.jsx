import React, { useContext } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";

import VarientStore from "../../Store/VarientStore";

import styles from "./Intro.module.css";

const Intro = () => {
	const variantsCtx = useContext(VarientStore);

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
		<motion.div
			className={styles.parent}
			variants={
				window.innerWidth < 896
					? variantsCtx.mobilePop
					: variantsCtx.leftSlideIn
			}
			initial='initial'
			animate='animate'>
			<h1>Hello, I'm Yash Kathe</h1>
			<p>
				{text}
				<Cursor cursorColor='#e4e3e3' />
			</p>
		</motion.div>
	);
};

export default Intro;
