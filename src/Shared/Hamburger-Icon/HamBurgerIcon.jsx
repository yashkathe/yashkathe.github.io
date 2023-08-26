import React from "react";
import { motion } from "framer-motion";

import styles from "./HamBurgerIcon.module.css";

const HamBurgerIcon = (props) => {
	const variants = {
		initial: {
			y: "-2vh",
			opacity: 0,
		},
		animate: {
			y: 0,
			opacity: 1,
			transition: {
				type: " tween",
				duration: 1,
				delay: 1,
			},
		},
	};

	return (
		<motion.div
			variants={variants}
			initial='initial'
			animate='animate'
			className={`${styles.hbParent} ${props.clicked ? styles.clicked : ""}`}
			onClick={props.onClick}>
			<div></div>
			<div></div>
			<div></div>
		</motion.div>
	);
};

export default HamBurgerIcon;
