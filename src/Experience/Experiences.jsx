import React, { useContext } from "react";
import { motion } from "framer-motion";

import Experience from "./Components/Experience";

import styles from "./Experiences.module.css";
import shared from "../Shared/CSS/shared.module.css";

import iotiot from "/Experience/iotiot.png";
import ucr from "/Experience/ucriverside.png";
import sfit from "/Experience/sfit.png";
import BeBlackBook from "./Files/BE-BLACK-BOOK.pdf";

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
					Research & Work Experience
				</motion.h1>
				<div></div>
				<div className={`${shared["children-shared"]} ${styles.children}`}>
					<Experience
						flip={true}
						imageSrc={ucr}
						jobTitle='Directed Research'
						advisor='Advisor: Professor Zhaowei Tan'
						advisor_href='https://cs.ucr.edu/~ztan/#group'
						company='GeNeLa - Networking Lab'
						company_href='https://cs.ucr.edu/~ztan/group.html'
						jobDescription1='• Developing a micro embedded tracking device with LoRaWAN support and GNSS capabilities, optimized for low power consumption and energy efficiency'
						jobDescription2='• Designed and created a PCB using EasyEDA to transmit GNSS coordinates to a custom Raspberry Pi-based LoRaWAN gateway'
						timeline='March 2024 - Present'
					/>
					<Experience
						flip={false}
						imageSrc={sfit}
						jobTitle='Capstone Research Project'
						advisor='Advisor: Dr. Gautam Shah'
						advisor_href='https://www.sfit.ac.in/faculty-profile.php?id=26'
						company='St. Francis Institute of Technology'
						company_href='https://www.sfit.ac.in/'
						jobDescription1='• Developed an automated self-issue and return system for libraries by creating a QR code-based authentication algorithm and Raspberry Pi,
reducing manual checkout time and improving system accuracy'
						jobDescription2='• Implemented automatic ISBN scanning when a user places a book on the system hardware using PiCam and an IR sensor to automatically
retrieve book information from the Google Books API to enable real-time inventory updates in MongoDB and eliminate manual data entry'
						jobDescription3='• Implemented an anti-theft system using RFID stickers to keep track of books and prevent unauthorized removals'
						timeline='June 2022 - June 2023'
						read_more={BeBlackBook}
					/>
					<Experience
						flip={true}
						imageSrc={iotiot}
						jobTitle='Systems Software Developer Intern'
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
