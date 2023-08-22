import React from "react";
import { motion } from "framer-motion";

import styles from "./Education.module.css";

const Education = () => {
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
					Education Timeline
				</motion.h3>
			</div>
			<motion.div
				className={styles.uni}
				variants={childVariants}
				initial='initial'
				animate='animate'>
				<div>
					<p>MS in Computer Engineering</p> <p>University of California</p>
					<p>2024</p>
				</div>
				<div></div>
				<div>
					<p>BE in Electronics and Telecommunication</p>{" "}
					<p>University of Mumbai</p>
					<p>2023</p>
				</div>
				<div></div>
			</motion.div>
		</div>
	);
};

export default Education;
