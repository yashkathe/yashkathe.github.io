import React from "react";
import { motion } from "framer-motion";

import styles from "./Left-Component.module.css";

const LeftComponent = (props) => {
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
				duration: 0.6,
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
				duration: 0.6,
				delay: 0.6,
			},
		},
	};

	const imgVariants = {
		initial: {
			scale: 0.9,
			y: 5,
			opacity: 0,
		},
		animate: {
			scale: 1,
			y: 0,
			opacity: 1,
			transition: {
				type: " tween",
				duration: 0.6,
				delay: 0.6,
			},
		},
	};

	return (
		<div className={styles.parent}>
			<motion.div
				className={styles.description}
				variants={headingVariants}
				initial='initial'
				animate='animate'>
				<h2>{props.jobTitle}</h2>
				<h3>{props.company}</h3>
				<p>{props.jobDescription1}</p>
				<p>{props.jobDescription2}</p>
				<p>{props.jobDescription3}</p>
			</motion.div>
			<motion.div
				className={styles.companyLogo}
				variants={imgVariants}
				initial='initial'
				animate='animate'>
				<a href='https://iotiot.in/' target='_blank'>
					<img src={props.imageSrc}></img>
				</a>
			</motion.div>
			<motion.div
				className={styles.timeline}
				variants={childVariants}
				initial='initial'
				animate='animate'>
				<p>{props.timeline}</p>
			</motion.div>
		</div>
	);
};

export default LeftComponent;
