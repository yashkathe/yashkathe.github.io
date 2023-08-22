import React from "react";

import { motion } from "framer-motion";

import styles from "./FMSocials.module.css";

const FMSocials = (props) => {
	const variants = {
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
				delay: 1,
			},
		},
		hover: {
			scale: 1.2,
		},
	};

	return (
		<motion.div
			className={styles.parent}
			variants={variants}
			initial='initial'
			animate='animate'
			whileHover='hover'>
			<a target='_blank' href={props.href}>
				<img alt={props.alt} src={props.src} />
			</a>
		</motion.div>
	);
};

export default FMSocials;
