import React from "react";

import { motion } from "framer-motion";

import styles from "./Project.module.css";

const Project = (props) => {
	const parentVariants = {
		initial: {
			scale: 0.7,
			y: 20,
			opacity: 0,
		},
		animate: {
			scale: 1,
			y: 0,
			opacity: 1,
			transition: {
				type: " tween",
				duration: 1,
				delay: props.delay,
			},
		},
	};

	return (
		<motion.div
			className={styles.parent}
			variants={parentVariants}
			initial='initial'
			animate='animate'>
			<div className={props.mobile ? styles.mobileImg : styles.pcImg}>
				<motion.img src={props.src} alt={props.alt} />
			</div>
			<div className={styles.projectTitle}>
				<h1>{props.projectTitle}</h1>
			</div>
		</motion.div>
	);
};

export default Project;
