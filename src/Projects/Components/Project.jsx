import React, { useState, useEffect, useContext } from "react";

import { motion, AnimatePresence } from "framer-motion";

import styles from "./Project.module.css";

import arrowRight from "/Icons/arrow-right.png";

import VarientStore from "../../Store/VarientStore";

const Project = (props) => {
	const [hover, setHover] = useState(false);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
				type: "tween",
				duration: 0.6,
				delay: 0.8,
			},
		},
	};

	const imageVariants = {
		initial: {
			opacity: 0,
			scale: 0.95,
		},
		animate: {
			opacity: 1,
			scale: 1,
            transition:{
				type: "tween",
				duration: 0.8,
            }
		},
		exit: {
			opacity: 0,
			scale: 0.9,
            transition:{
				type: "tween",
				duration: 0.65,
            }
		},
	};

	useEffect(() => {
		if (props.src && Array.isArray(props.src) && props.src.length > 1) {
			let timeout;

			const changeImageAtRandomTime = () => {
				setCurrentImageIndex((prevIndex) => (prevIndex + 1) % props.src.length);

				const randomDelay =
					Math.floor(Math.random() * (5000 - 1000 + 1)) + 3500;
				timeout = setTimeout(changeImageAtRandomTime, randomDelay);
			};

			changeImageAtRandomTime();

			return () => clearTimeout(timeout);
		}
	}, [props.src]);

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
				<AnimatePresence mode='wait'>
					<motion.img
						key={currentImageIndex} // Use key to trigger exit and re-render
						src={
							Array.isArray(props.src)
								? props.src[currentImageIndex]
								: props.src
						}
						alt={props.alt}
						variants={imageVariants}
						initial='initial'
						animate='animate'
						exit='exit'
					/>
				</AnimatePresence>
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
