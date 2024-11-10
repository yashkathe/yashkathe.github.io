import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

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

	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setIsVisible(false);
		}, 3000);

		return () => clearTimeout(timeout);
	}, [isVisible]);

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.div
					className={styles.parent}
					variants={parentVariant}
					initial='initial'
					animate='animate'
					exit='initial'>
					<p>{props.children}</p>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default CustomNotification;
