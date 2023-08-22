import React from "react";
import { motion } from "framer-motion";

import styles from "./Skills.module.css";

const Skills = () => {
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
				duration: 1,
				delay: 0.6,
			},
		},
	};

	const childVariants = {
		initial: {
			x: "2vw",
			opacity: 0,
		},
		animate: {
			x: 0,
			opacity: 1,
			transition: {
				type: " tween",
				duration: 1,
				delay: 0.6,
			},
		},
	};

	return (
		<div className={styles.section}>
			<div>
				<motion.h3
					variants={headingVariants}
					initial='initial'
					animate='animate'>
					Programming Skills
				</motion.h3>
			</div>
			<motion.div variants={childVariants} initial='initial' animate='animate'>
				<div></div>
			</motion.div>
		</div>
	);
};

export default Skills;
