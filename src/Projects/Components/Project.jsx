import React, { useState, useContext } from "react";

import { motion } from "framer-motion";

import styles from "./Project.module.css";

import arrowRight from "/Icons/arrow-right.png";

import VarientStore from "../../Store/VarientStore";

const Project = (props) => {
	const [hover, setHover] = useState();

	const variantsCtx = useContext(VarientStore);

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
			variants={mobileVariants}
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
						variants={variantsCtx.slideUp}
						initial='initial'
						animate='animate'>
						<p>{props.description}</p>
						<div className={styles.icon}>
							<motion.img
								src={arrowRight}
								variants={variantsCtx.rotateBy45}
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
