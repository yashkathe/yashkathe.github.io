import React, { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";

import styles from "./Projects.module.css";
import shared from "../Shared/CSS/shared.module.css";
import "react-toastify/dist/ReactToastify.css";

import Project from "./Components/Project";
import GithubStats from "./Components/GithubStats";

import commuteConnnect from "/Projects/commute-connect.gif";
import chatBot from "/Projects/chat-bot.gif";
import f1 from "/Projects/f1-api.png";
import comics from "/Projects/comics-api.png";
import archScripts from "/Projects/arch-linux-scripts.png";
import gpuanalysis from "/Projects/gpu-numba-proj.png";
import finalGradesEstimator from "/Projects/GradesEstimator.jpeg";
import heartFailureModel from "/Projects/HeartFailureModel.jpeg";
import dualencoder from "/Projects/dual-encoder.png";
import cirrhosis from "/Projects/liver-cirrhosis.png";
import ai_extension_browser from "/Projects/extension_leetcode.webp";
import masters_pcb from "/Projects/masters-project.png";
import image_classification from "/Projects/cs205-project.webp";

import VarientStore from "../Store/VarientStore";

const Projects = () => {
	const varientsCtx = useContext(VarientStore);

	useEffect(() => {
		toast(
			"Make sure to check my projects on Github! I am continuously working on new projects.",
			{
				position: "bottom-right",
				autoClose: 8000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
				style: { fontSize: "1rem", color: "#121212", background: "#e8e6e3" },
			}
		);
	}, []);

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
				<GithubStats />
				<div className={styles.children}>
					<div>
						<Project
							delay={Math.random() * 0.2}
							src={[
								"https://github.com/yashkathe/Library-Automation-System/raw/master/assets/project-photo.jpg",
                                "https://github.com/yashkathe/Library-Automation-System/raw/master/assets/client_new.png",
                                "https://github.com/yashkathe/Library-Automation-System/raw/master/assets/mix_new.png",
							]}
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
							src={[
                                dualencoder,
                                "https://yashkathe.github.io/CLIP-local-feature-enhancement/readme_content/base-clip-res.png",
                                "https://yashkathe.github.io/CLIP-local-feature-enhancement/readme_content/dual-encoder-conc-res.png",
                                "https://yashkathe.github.io/CLIP-local-feature-enhancement/readme_content/dual-encoder-attention-res.png"
                            ]}
							alt='CLIP enhanchment'
							projectTitle="Local Feature Enhancement for Open AI's CLIP Model"
							mobile={false}
							href='https://yashkathe.github.io/CLIP-local-feature-enhancement/'
							description='Implemented a Dual encoder architecture for CLIP model that combines CLIP’s global features and ViT’s local features, fused via concatenation or attention layer, to enhance VQA performance.'
						/>
					</div>
					<div>
						<Project
							delay={Math.random() * 0.2}
							src={[
								cirrhosis,
								"https://yashkathe.github.io/Cirrhosis-Prediction/readme_content/from_scratch_plot.png",
                                "https://yashkathe.github.io/Cirrhosis-Prediction/readme_content/accuracy_3.png"
							]}
							alt='Neural Network from Scratch for Cirrhosis Prediction (With Notes)'
							projectTitle='Neural Network from Scratch for Cirrhosis Prediction (With Notes)'
							mobile={false}
							href='https://yashkathe.github.io/Cirrhosis-Prediction/'
							description='Compared Performance of Neural network written from scratch using Numpy and other with pytorch to predict cirrhosis stages'
						/>
					</div>
					<div>
						<Project
							delay={Math.random() * 0.2}
							src={masters_pcb}
							alt='PCB photo'
							projectTitle="Micro Embedded Tracking Device (Master's Research Project)"
							mobile={false}
							href='https://cs.ucr.edu/~ztan/group.html'
							description="Master's Research Project on Micro-embedded tracking device for LoRaWAN network in collaboration with Boyd Deep Canyon Research Center"
						/>
					</div>
                    <div>
						<Project
							delay={Math.random() * 0.2}
							src={ai_extension_browser}
							alt='AI Browser Extension for Leetcode '
							projectTitle='AI Browser Extension for Leetcode '
							mobile={false}
							href='https://yashkathe.github.io/Leetcode-Mentor-AI/'
							description='Firefox extension that assists users in solving LeetCode problems by providing intelligent, real-time hints and insights powered by 
                            the user’s choice of Large Language Model (LLM), seamlessly integrating with LeetCode to offer personalized guidance'
						/>
					</div>
					<div>
						<Project
							delay={Math.random() * 0.2}
							src={[
								image_classification,
								"https://github.com/yashkathe/CS205-Image-Classification-for-Landscape-Recognition/raw/main/screenshots/predict-1.png",
								"https://github.com/yashkathe/CS205-Image-Classification-for-Landscape-Recognition/raw/main/screenshots/predict-2.png",
								"https://github.com/yashkathe/CS205-Image-Classification-for-Landscape-Recognition/raw/main/screenshots/predict-3.png",
								"https://github.com/yashkathe/CS205-Image-Classification-for-Landscape-Recognition/raw/main/screenshots/predict-4.png",
								"https://github.com/yashkathe/CS205-Image-Classification-for-Landscape-Recognition/raw/main/screenshots/predict-5.png",
								"https://github.com/yashkathe/CS205-Image-Classification-for-Landscape-Recognition/raw/main/screenshots/predict-6.png",
							]}
							alt='Image Classification for Landscape Recognition'
							projectTitle='Image Classification for Landscape Recognition'
							mobile={false}
							href='https://github.com/yashkathe/CS205-Image-Classification-for-Landscape-Recognition'
							description='Implementation of custom convolutional neural network (CNN) architectures, specifically focusing on a Residual CNN and 
                            an AlexNet model for image classification on a dataset containing buildings, forests, glaciers, mountains, seas, and streets.'
						/>
					</div>
					<div>
						<Project
							delay={Math.random() * 0.2}
							src={[
								"https://raw.githubusercontent.com/yashkathe/Security-system-with-raspberryPi/college-project/assets/Picture4.png",
                                "https://raw.githubusercontent.com/yashkathe/Security-system-with-raspberryPi/college-project/assets/Picture2.png",
                                "https://raw.githubusercontent.com/yashkathe/Security-system-with-raspberryPi/college-project/assets/Picture7.png",
                                "https://raw.githubusercontent.com/yashkathe/Security-system-with-raspberryPi/college-project/assets/Picture3.png"
                            ]}
							alt='Monitoring System'
							projectTitle='Home Monitoring System'
							mobile={false}
							href='https://github.com/yashkathe/Security-system-with-raspberryPi'
							description='Engineered a monitoring system utilizing an array of sensors including DHT22 for temperature and humidity, IR for proximity sensing, MQ6 for gas detection,
                             all seamlessly integrated with an LCD display, all orchestrated through an Arduino Uno. '
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
							src={heartFailureModel}
							alt='Binary Classification Model for Predicting Heart Failure'
							projectTitle='Binary Classification Model for Predicting Heart Failure'
							mobile={false}
							href='https://github.com/yashkathe/Predict-Heart-Failure-Binary-Classification'
							description='Predicted heart failure with 90% accuracy using PyTorch neural networks, leveraging Kaggle and UC Irvine clinical data. 
                            Conducted data preprocessing, including handling missing values, feature scaling, and exploratory analysis, and optimized binary classification 
                            models for performance'
						/>
					</div>
					<div>
						<Project
							delay={Math.random() * 0.2}
							src={commuteConnnect}
							alt='Commute Connect'
							projectTitle='Commute Connect'
							mobile={false}
							href='https://github.com/yashkathe/Commute-Connect'
							description='Commute Connect is a MERN stack application that effortlessly links travelers with similar itineraries, 
                            allowing them to seamlessly find companions for shared journeys and make their travel experiences more cost-effective.'
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
							src={finalGradesEstimator}
							alt='Regression Model'
							projectTitle='Regression Model for Estimating Exam Score'
							mobile={false}
							href='https://github.com/yashkathe/Final-Grades-Estimator-Regression'
							description=' Created a multi-layer neural network with PyTorch, utilizing the UCI dataset to predict final 
                            exam scores and achieved accuracy of 96% through hyperparameter optimization and rich feature extraction'
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
							src={archScripts}
							alt='arch linux scripts'
							projectTitle='Arch Linux Scripts'
							mobile={false}
							href='https://github.com/yashkathe/ArchLinux-scripts'
							description='Script to automate Arch Linuxs package manager pacman. Along with other essential scripts for Arch Linux systems.'
						/>
					</div>
				</div>
				<ToastContainer />
			</div>
			<p className={styles.credits}>
				<i>
					Some images for projects are sourced from the internet, credited to
					respective owners.
				</i>
			</p>
		</div>
	);
};

export default Projects;
