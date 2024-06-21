import React, { useContext } from "react";
import { motion } from "framer-motion";

import styles from "./Projects.module.css";
import shared from "../Shared/CSS/shared.module.css";

import Project from "./Components/Project";

import commuteConnnect from "/Projects/commute-connect.gif";
import chatBot from "/Projects/chat-bot.gif";
import f1 from "/Projects/f1-api.png";
import comics from "/Projects/comics-api.png";
import archScripts from "/Projects/arch-linux-scripts.png";
import libPortal from "/Projects/las.png";
import gpuanalysis from "/Projects/gpu-numba-proj.png"

import VarientStore from "../Store/VarientStore";

const Projects = () => {
	const varientsCtx = useContext(VarientStore);

	return (
		<div className={shared["parent-shared"]}>
			<div className={shared["header-shared"]}>
				<motion.h1
					variants={varientsCtx.pageTitleVariant}
					initial='initial'
					animate='animate'>
					My Projects
				</motion.h1>
				<div></div>
				<div className={styles.children}>
					<div>
						<Project
							delay={Math.random() * 0.2}
							src={commuteConnnect}
							alt='Commute Connnect'
							projectTitle='Commute Connnect'
							mobile={false}
							href='https://github.com/yashkathe/Commute-Connect'
							description='Commute Connect is a MERN stack application that effortlessly links travelers with similar itineraries, 
                            allowing them to seamlessly find companions for shared journeys and make their travel experiences more cost-effective.'
						/>
					</div>
					<div>
						<Project
							delay={Math.random() * 0.2}
							src={chatBot}
							alt='Chat Bot'
							projectTitle='Chat Bot powered by GPT 3.5 Turbo'
							mobile={false}
							href='https://github.com/yashkathe/AI-Chat-Bot-MERN'
							description='Developed a secure and scalable chatbot application using the MERN stack with TypeScript, incorporating user authentication, 
                            JSON Web Tokens, and HTTP cookies for seamless and authenticated communication within the platform.'
						/>
					</div>
                    <div>
						<Project
							delay={Math.random() * 0.2}
							src={gpuanalysis}
							alt='CPU vs GPU analysis'
							projectTitle='Runtime Analysis for Image Denoising on CPU and GPU'
							mobile={false}
							href='https://github.com/yashkathe/Image-Noise-reduction-with-CUDA'
							description='Performed comprehensive analysis of image denoising technique - median blur, 
                            comparing GPU-accelerated (Numba) and CPU-based (OpenCV) processing speeds. Using diverse images, 
                            the project applies median filtering to assess efficiency providing insights into the practical impacts of hardware acceleration'
						/>
					</div>
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
                            cars, standings, race schedules and many more'
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
							description='Created a web app built using React, Redux, Framer Motion, and React Router, utilising 
                            OpenWeather API. Stay informed with accurate weather forecasts and a captivating UI, making every interaction a breeze'
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
							description='Anime Search Engine webapp which helps you trace back the exact scene and episode from where the anime screenshot is taken from.'
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
							description='Powerful Comic Book Scraper crafted with Node.js and Cheerio. Leveraging the capabilities of Node.js, 
                            this scraper efficiently collects and compiles all essential details, including cover art, titles, authors, and also providing convenient download links for each issue. '
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
							description='Engineered a monitoring system utilizing an array of sensors including DHT22 for temperature and humidity, IR for proximity sensing, MQ6 for gas detection,
                             all seamlessly integrated with an LCD display, all orchestrated through an Arduino Uno. '
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
