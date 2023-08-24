import React from "react";

import styles from "./About.module.css";
import shared from "../Shared/CSS/shared.module.css";

import { motion } from "framer-motion";

import Bio from "./Components/Bio";
import Education from "./Components/Education";
import Skills from "./Components/Skills";

const About = () => {
	const headingVariants = {
		initial: {
			x: "-2vw",
			opacity: 0,
		},
		animate: {
			x: 0,
			opacity: 1,
			transition: {
				type: " tween",
				duration: 0.8,
			},
		},
	};

	return (
		<div className={shared.parent}>
			<div className={shared.header}>
				<motion.h1
					variants={headingVariants}
					initial='initial'
					animate='animate'>
					About Me
				</motion.h1>
				<div></div>
			</div>
			<Bio />
			<Education />
			<Skills />
		</div>
	);
};

export default About;
