import React, { useContext } from "react";
import { motion } from "framer-motion";

import Experience from "./Components/Experience";

import styles from "./Experiences.module.css";
import shared from "../Shared/CSS/shared.module.css";

import iotiot from "/Experience/iotiot.png";
import acmUcr from "/Experience/acm-ucr-logo.webp"

import VarientStore from "../Store/VarientStore";

const Experiences = () => {
	const variantsCtx = useContext(VarientStore);

	return (
		<div className={shared["parent-shared"]}>
			<div className={shared["header-shared"]}>
				<motion.h1
					variants={variantsCtx.pageTitleVariant}
					initial='initial'
					animate='animate'>
					My Work Experience
				</motion.h1>
				<div></div>
				<div className={`${shared["children-shared"]} ${styles.children}`}>
					<Experience
						flip={true}
						imageSrc={iotiot}
						jobTitle='Software Engineer Intern'
						company='IotIot.in'
                        company_href="https://iotiot.in/"
						jobDescription1='• Worked on the “Brainy PI” project which seeks to solve the worldwide raspberry Pi scarcity. Wrote bash scripts for installing packages and automated the process of testing the os.'
						jobDescription2='• Used Whiptail and tools such as sed, awk, cut and tr to add functionality to a command line interface tool to change screen resolution, adding camera support, enabling and disabling UART, One Wire Interface, and VNC.'
						jobDescription3='• Worked with Clustering Team to create docker swarms to deploy applications and wrote a script using ansible to backup and restore the whole docker swarm in case the whole cluster fails.'
						timeline='August 2022 - December 2022'
					/>
                    <Experience
						flip={false}
						imageSrc={acmUcr}
						jobTitle='Web Developer'
						company='Association for Computer Machinery - UC Riverside'
						company_href="https://acm.cs.ucr.edu/"
                        jobDescription1="• Working closely with the team to develop 'R-Jobs' website, UC Riverside's official platform connecting students with on-campus job opportunities posted by various departments within the university"
						jobDescription2='• Leading the team in translating Figma designs into a responsive web application using Tailwind CSS and Next.js, fostering collaboration through GitHub to ensure a smooth development process'
						timeline='January 2024 - Present'
					/>
				</div>
			</div>
		</div>
	);
};

export default Experiences;
