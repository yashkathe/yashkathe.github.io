import React, { useState } from "react";

import { motion } from "framer-motion";

import extLink from "/Icons/external-link.svg";

import styles from "./FMSocials.module.css";

const FMSocials = (props) => {
	const [hoverLink, setHoverLink] = useState(false);

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

	const linkVariant = {
		initial: {
			rotate: 45,
			opacity: 0,
			x: 10,
		},
		animate: {
			x: 0,
			rotate: 0,
			opacity: 1,
			transition: {
				type: " tween",
				duration: 0.5,
			},
		},
	};

	return (
		<motion.div
			className={styles.parent}
			variants={variants}
			initial='initial'
			animate='animate'
			whileHover='hover'>
			<div
				onMouseEnter={() => {
					setHoverLink(true);
				}}
				onMouseLeave={() => {
					setHoverLink(false);
				}}>
				{hoverLink && (
					<motion.div
						className={styles.link}
						variants={linkVariant}
						initial='initial'
						animate='animate'>
						<img src={extLink} />
					</motion.div>
				)}
				<a target='_blank' href={props.href}>
					<img alt={props.alt} src={props.src} />
				</a>
			</div>
		</motion.div>
	);
};

export default FMSocials;
