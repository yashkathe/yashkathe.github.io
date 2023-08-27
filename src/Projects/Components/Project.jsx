import React, { useState } from "react";

import { motion } from "framer-motion";

import styles from "./Project.module.css";

import arrowRight from "/Icons/arrow-right.png";

const Project = (props) => {
	const [hover, setHover] = useState();

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

	const descVariants = {
		initial: {
			y: 50,
			opacity: 0,
		},
		animate: {
			y: 0,
			opacity: 1,
			transition: {
				type: " tween",
				duration: 0.5,
			},
		},
	};

	const iconVariants = {
		initial: {
			rotate: 0,
		},
		animate: {
			rotate: -45,
			transition: {
				type: " tween",
				duration: 0.38,
				delay: 0.2,
			},
		},
	};

	const mobileVariants = {
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
				delay: props.delay,
			},
		},
	};

	return (
		<motion.div
			className={styles.parent}
			variants={window.innerWidth < 896 ? mobileVariants : mobileVariants}
			initial='initial'
			animate='animate'
			onMouseEnter={() => {
				setHover(true);
			}}
			onMouseLeave={() => {
				setHover(false);
			}}>
			<a href={props.href} target='_blank'>
				<div className={props.mobile ? styles.mobileImg : styles.pcImg}>
					<motion.img
						src={props.src}
						alt={props.alt}
						animate={
							hover
								? { scale: 1.1, transition: { type: "tween", duration: 0.5 } }
								: {}
						}
					/>
				</div>
				{hover && (
					<motion.div
						className={styles.description}
						variants={descVariants}
						initial='initial'
						animate='animate'>
						<p>{props.description}</p>
						<div className={styles.icon}>
							<motion.img
								src={arrowRight}
								variants={iconVariants}
								initial='initial'
								animate='animate'
							/>
						</div>
					</motion.div>
				)}
			</a>
			<div className={styles.projectTitle}>
				<h1>{props.projectTitle}</h1>
			</div>
		</motion.div>
	);
};

export default Project;
