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
			animate='animate'></motion.div>
	);
};

export default Project;
