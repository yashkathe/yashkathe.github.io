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
		<div className={shared["parent-shared"]}>
			<div className={shared["header-shared"]}>
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
							href='https://github.com/yashkathe/F1-API'
							description='F1-API is a TypeScript-based web scraping application designed to
                            extract comprehensive information about Formula 1 races, drivers,
                            cars, standings, and race schedules. This powerful web scraper
                            automates the process of gathering data and aggregating it into a
                            structured format for easy analysis and consumption'
						/>
					</div>
					<div>
						<Project
							delay={Math.random() * 0.2}
							src='https://raw.githubusercontent.com/yashkathe/Weather-app-with-reactJs/master/src/Assets/Screenshots/Search.gif'
							alt='react weather'
							projectTitle='Weather web App'
							mobile={false}
							href='https://github.com/yashkathe/Weather-webapp'
							description='Created a web app built using React, Redux, Framer Motion, and React Router, seamlessly integrated with the OpenWeather API. Explore real-time weather updates with dynamic animations, powered by Redux for state management, Framer Motion for fluid user interactions, and React Router for smooth navigation. Stay informed with accurate weather forecasts and a captivating UI, making every interaction a breeze'
						/>
					</div>
					<div>
						<Project
							delay={Math.random() * 0.2}
							src='https://raw.githubusercontent.com/yashkathe/Get-Anime-Sauce/master/src/assets/readmegifs/1url.gif'
							alt='animeSE'
							projectTitle='Anime Search Engine'
							mobile={false}
							href='https://github.com/yashkathe/Get-Anime-Sauce'
							description='This web app helps you trace back the exact scene and episode from where the anime screenshot is taken from.'
						/>
					</div>
					<div>
						<Project
							delay={Math.random() * 0.2}
							src={comics}
							alt='comics'
							projectTitle='Download Comic books API'
							mobile={false}
							href='https://github.com/yashkathe/Download-ComicBooks-API'
							description='Powerful Comic Book Scraper crafted with Node.js and Cheerio. This versatile tool empowers comic enthusiasts to effortlessly access comprehensive information and download links for their favorite comic books from across the internet. Leveraging the capabilities of Node.js, this scraper efficiently collects and compiles all essential details, including cover art, titles, authors, and summaries, while also providing convenient download links for each issue. '
						/>
					</div>
					<div>
						<Project
							delay={Math.random() * 0.2}
							src={libPortal}
							alt='Library Automation System'
							projectTitle='Library Automation System'
							mobile={true}
							href='https://github.com/yashkathe/Library-Automation-System'
							description='The Library Automation System is a project aimed at developing a computerized system to automate all the daily tasks of the library with minimal human intervention.'
						/>
					</div>
					<div>
						<Project
							delay={Math.random() * 0.2}
							src='https://raw.githubusercontent.com/yashkathe/Monitoring-system-with-arduino/master/assets/dht22.jpeg'
							alt='monitoring system with arduino'
							projectTitle='Home monitoring system'
							mobile={false}
							href='https://github.com/yashkathe/Monitoring-system-with-arduino'
							description='Engineered a comprehensive monitoring system utilizing an array of sensors including DHT22 for temperature and humidity, IR for proximity sensing, MQ6 for gas detection, all seamlessly integrated with an LCD display, all orchestrated through an Arduino Uno. This innovative system captures and displays real-time data, providing valuable insights into environmental conditions and ensuring safety through gas detection capabilities'
						/>
					</div>
					<div>
						<Project
							delay={Math.random() * 0.2}
							src={archScripts}
							alt='arch linux scripts'
							projectTitle='Arch Linux Scripts'
							mobile={false}
							href='https://github.com/yashkathe/ArchLinux-scripts'
							description='Script to automate Arch Linuxs package manager pacman. Along with other essential scripts for Arch Linux systems.'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
