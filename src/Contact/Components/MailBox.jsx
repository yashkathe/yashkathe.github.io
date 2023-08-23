import React from "react";
import { motion } from "framer-motion";

import styles from "./MailBox.module.css";

import mailBox from "/Icons/mailbox.svg";

const MailBox = () => {
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
				duration: 1,
				delay: 0.6,
			},
		},
	};

	return (
		<motion.div
			className={styles.imgContainer}
			variants={childVariants}
			initial='initial'
			animate='animate'>
			<img src={mailBox} alt='mailbox' />
		</motion.div>
	);
};

export default MailBox;
