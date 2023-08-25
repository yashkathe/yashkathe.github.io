import React from "react";

import { motion } from "framer-motion";

import styles from "./Projects.module.css";
import shared from "../Shared/CSS/shared.module.css";

import Project from "./Components/Project";

import f1 from "/Projects/f1-api.png";
import comics from "/Projects/comics-api.png";
import archScripts from "/Projects/arch-linux-scripts.png";
import libPortal from "/Projects/las.png";

const Projects = () => {
	const headingVariants = {
		initial: {
			x: "-2vw",
			opacity: 0.5,
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
					My Projects
				</motion.h1>
				<div></div>
				<div className={styles.children}>
					<div>
						<Project
							delay={Math.random() * 0.2}
							src={f1}
							alt='f1'
							projectTitle='Formula 1 API library'
							mobile={false}
						/>
					</div>
					<div>
						<Project
							delay={Math.random() * 0.2}
							src='https://raw.githubusercontent.com/yashkathe/Weather-app-with-reactJs/master/src/Assets/Screenshots/Search.gif'
							alt='react weather'
							projectTitle='Weather web App'
							mobile={false}
						/>
					</div>
					<div>
						<Project
							delay={Math.random() * 0.2}
							src='https://raw.githubusercontent.com/yashkathe/Get-Anime-Sauce/master/src/assets/readmegifs/1url.gif'
							alt='animeSE'
							projectTitle='Anime Search Engine'
							mobile={false}
						/>
					</div>
					<div>
						<Project
							delay={Math.random() * 0.2}
							src={comics}
							alt='comics'
							projectTitle='Download Comic books api'
							mobile={false}
						/>
					</div>
					<div>
						<Project
							delay={Math.random() * 0.2}
							src={libPortal}
							alt='Library Automation System'
							projectTitle='Library Automation System'
							mobile={true}
						/>
					</div>
					<div>
						<Project
							delay={Math.random() * 0.2}
							src='https://raw.githubusercontent.com/yashkathe/Monitoring-system-with-arduino/master/assets/dht22.jpeg'
							alt='monitoring system with arduino'
							projectTitle='Home monitoring system'
							mobile={false}
						/>
					</div>
					<div>
						<Project
							delay={Math.random() * 0.2}
							src={archScripts}
							alt='arch linux scripts'
							projectTitle='Arch Linux Scripts'
							mobile={false}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
