import React from "react";
import { motion } from "framer-motion";

import styles from "./Education.module.css";
import shared from "../Shared/shared.module.css";

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

	const childVariantsMobile = {
		initial: {
			scale: 0.95,
			opacity: 0,
		},
		animate: {
			scale: 1,
			opacity: 1,
			transition: {
				type: " tween",
				duration: 0.6,
				delay: 0.5,
			},
		},
	};

	return (
		<div className={shared["section-shared-about"]}>
			<div>
				<motion.h3
					variants={
						window.innerWidth < 896 ? childVariantsMobile : headingVariants
					}
					initial='initial'
					animate='animate'>
					Education Timeline
				</motion.h3>
			</div>
			<motion.div
				className={styles.uni}
				variants={window.innerWidth < 896 ? childVariantsMobile : childVariants}
				initial='initial'
				animate='animate'>
				<div>
					<p>MS in Computer Engineering</p> <p>University of California</p>
					<p>2025</p>
				</div>
				<div></div>
				<div>
					<p>BE in Electronics & Telecommunication</p>{" "}
					<p>University of Mumbai</p>
					<p>2023</p>
				</div>
				<div></div>
			</motion.div>
		</div>
	);
};

export default Education;
