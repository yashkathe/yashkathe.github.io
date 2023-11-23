import React, { useState, useContext } from "react";

import { motion, AnimatePresence } from "framer-motion";

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
				delay: 0.8,
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
				if (window.innerWidth > 896) {
					setHover(true);
				}
			}}
			onMouseLeave={() => {
				if (window.innerWidth > 896) {
					setHover(false);
				}
			}}
			onClick={() => {
				if (window.innerWidth < 896) {
					setHover((prev) => !prev);
				}
			}}>
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
			<AnimatePresence>
				{hover && (
					<motion.div
						className={styles.description}
						variants={variantsCtx.slideUp}
						initial='initial'
						animate='animate'
						exit='exit'>
						<p>{props.description}</p>
						<div className={styles.icon}>
							<a href={props.href} target='_blank'>
								<motion.img
									src={arrowRight}
									variants={variantsCtx.rotateBy45}
									initial='initial'
									animate='animate'
								/>
							</a>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
			<div className={styles.projectTitle}>
				<h1>{props.projectTitle}</h1>
			</div>
		</motion.div>
	);
};

export default Project;
