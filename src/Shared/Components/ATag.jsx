import React from "react";
import { motion } from "framer-motion";

import styles from "./FMLink.module.css";

const ATag = (props) => {
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
			<a
				href={props.to}
                target="blank"
				className={(navData) => (navData.isActive ? styles.active : "")}>
				{props.children}
			</a>
		</motion.li>
	);
};

export default ATag;
