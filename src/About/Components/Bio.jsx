import React from "react";
import { motion } from "framer-motion";

import styles from "./Bio.module.css";

const Bio = () => {
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
		<div className={styles.parent}>
			<div className={styles.bio}>
				<div>
					<motion.h3
						variants={headingVariants}
						initial='initial'
						animate='animate'>
						About Myself
					</motion.h3>
				</div>
				<motion.div
					variants={childVariants}
					initial='initial'
					animate='animate'>
					<p>
						My journey began with a degree in Electronics and Telecommunication
						from the University of Mumbai. Experiencing virtual classes during
						the COVID era highlighted that theoretical knowledge alone wasn't
						sufficient, especially in hands-on fields like Electronics.
						Recognizing this gap, I made a pivot towards software development,
						delving into the world of full-stack technology. This unique blend
						of Electronics and software knowledge became my strength. Now,
						pursuing a Master's in Computer Engineering at the University of
						California, Riverside, I'm excited to enhance my computer science
						expertise and contribute to the forefront of innovation.
					</p>
				</motion.div>
			</div>
		</div>
	);
};

export default Bio;
