import React from "react";

import { motion } from "framer-motion";

import styles from "./Projects.module.css";

const Projects = () => {
	const headingVariants = {
		initial: {
			x: "-2vw",
			opacity: 0,
		},
		animate: {
			x: 0,
			opacity: 1,
			transition: {
				type: " tween",
				duration: 0.8,
			},
		},
	};

	return (
		<div className={styles.parent}>
			<div className={styles.header}>
				<motion.h1
					variants={headingVariants}
					initial='initial'
					animate='animate'>
					My Projects
				</motion.h1>
				<div></div>
				<div className={styles.children}></div>
			</div>
		</div>
	);
};

export default Projects;
