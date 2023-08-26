import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import styles from "./FMLink.module.css";

const FMLink = (props) => {
	const liVariants = {
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
		hover: {
			scale: 1.2,
		},
	};

	return (
		<motion.li
			className={styles.list}
			variants={props.isMobile ? "" : liVariants}
			whileHover='hover'
			initial='initial'
			animate='animate'
			onClick={props.onClick}>
			<NavLink
				to={props.to}
				className={(navData) => (navData.isActive ? styles.active : "")}>
				{props.children}
			</NavLink>
		</motion.li>
	);
};

export default FMLink;
