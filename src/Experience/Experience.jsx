import React from "react";
import { motion } from "framer-motion";

import LeftComponent from "./Components/Left-Component";

import styles from "./Experience.module.css";
import shared from "../Shared/CSS/shared.module.css";

import iotiot from "/Icons/iotiot.png";

const Experience = () => {
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
		<div className={shared["parent-shared"]}>
			<div className={shared["header-shared"]}>
				<motion.h1
					variants={headingVariants}
					initial='initial'
					animate='animate'>
					My Work Experience
				</motion.h1>
				<div></div>
				<div className={`${shared["children-shared"]} ${styles.children}`}>
					<div>
						<LeftComponent
							imageSrc={iotiot}
							jobTitle='Linux Software Engineer'
							company='IotIot.in'
							jobDescription1='• Worked on the “Brainy PI” project which seeks to solve the worldwide raspberry Pi scarcity. Wrote bash scripts for installing packages and automated the process of testing the os.'
							jobDescription2='• Used Whiptail and tools such as sed, awk, cut and tr to add functionality to a command line interface tool to change screen resolution, adding camera support, enabling and disabling UART, One Wire Interface, and VNC.'
							jobDescription3='• Worked with Clustering Team to create docker swarms to deploy applications and wrote a script using ansible to backup and restore the whole docker swarm in case the whole cluster fails.'
							timeline='August 2022 - December 2022'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Experience;
