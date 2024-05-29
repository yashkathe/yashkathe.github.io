import React from "react";
import { motion } from "framer-motion";

import styles from "./CustomNotification.module.css";

const CustomNotification = (props) => {
	const parentVariant = {
		initial: {
			opacity: 0,
			y: 15,
			transition: {
				type: " tween",
				duration: 0.5,
			},
		},
		animate: {
			opacity: 1,
			y: 0,
			transition: {
				type: " tween",
				duration: 0.5,
			},
		},
	};

	return (
		<motion.div
			className={styles.parent}
			variants={parentVariant}
			initial='initial'
			animate='animate'
			exit='initial'>
			<p>{props.children}</p>
		</motion.div>
	);
};

export default CustomNotification;
