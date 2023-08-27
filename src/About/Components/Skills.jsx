import React from "react";
import { motion } from "framer-motion";

import styles from "./Skills.module.css";
import shared from "../Shared/shared.module.css";

const Skills = () => {
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
				duration: 1,
				delay: 0.6,
			},
		},
	};

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
		<div className={shared["section-shared-about"]}>
			<div>
				<motion.h3
					variants={headingVariants}
					initial='initial'
					animate='animate'>
					Programming Skills
				</motion.h3>
			</div>
			<motion.div variants={childVariants} initial='initial' animate='animate'>
				<div className={styles.skills}>
					<div>
						<p>Web Development:</p>
						<p>HTML, CSS, Javascript, Typescript, NodeJS, ReactJS</p>
					</div>
					<div></div>
					<div>
						<p>Programming:</p>
						<p>C, C++, Python, Bash</p>
					</div>
					<div></div>
					<div>
						<p>DevOps and Databases:</p>
						<p>Git, Github Actions, Linux, Docker, Ansible, SQL, MongoDB</p>
					</div>
					<div></div>
				</div>
			</motion.div>
		</div>
	);
};

export default Skills;
