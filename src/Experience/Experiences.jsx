import React, { useContext } from "react";
import { motion } from "framer-motion";

import Experience from "./Components/Experience";

import styles from "./Experiences.module.css";
import shared from "../Shared/CSS/shared.module.css";

import iotiot from "/Experience/iotiot.png";
import ucr from "/Experience/ucriverside.png";

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
						imageSrc={ucr}
						jobTitle='Directed Researcher'
						advisor='Advisor: Professor Zhaowei Tan'
						advisor_href='https://cs.ucr.edu/~ztan/#group'
						company='GeNeLa - Networking Lab @ UC Riverside'
						company_href='https://cs.ucr.edu/~ztan/group.html'
						jobDescription1='• Developing a micro embedded tracking device with LoRaWAN support and GNSS capabilities, optimized for low power consumption and energy efficiency'
						jobDescription2='• Designed and created a PCB using EasyEDA to transmit GNSS coordinates to a custom Raspberry Pi-based LoRaWAN gateway'
						timeline='March 2024 - Present'
					/>
                    <Experience
						flip={false}
						imageSrc={iotiot}
						jobTitle='Dev Ops Engineer Intern'
						company='IotIot.in'
						company_href='https://iotiot.in/'
						jobDescription1="• Automated Linux environment testing, package installation, and boot script creation for 'Brainy Pi' using Bash scripts, improving testing efficiency and deployment time"
						jobDescription2='• Developed an interactive GUI for the Linux Terminal using Whiptail, enhancing user interaction and supporting screen resolution adjustments and hardware protocols like SPI, I2C, and UART'
						jobDescription3='• Created an Ansible script for backup and restoration of servers running Docker Swarm and Kubernetes, ensuring data integrity and minimizing downtime during maintenance'
						timeline='August 2022 - December 2022'
					/>

				</div>
			</div>
		</div>
	);
};

export default Experiences;
