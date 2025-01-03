import React from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";

import FMLink from "./Components/FMLink";
import FMSocials from "./Components/FMSocials";

import linkedin from "/Icons/linkedin.svg";
import github from "/Icons/github.svg";
import leetcode from "/Icons/leetcode-3.png";
import npm from "/Icons/npm-3.png";
import docker from "/Icons/docker-3.png";
import medium from "/Icons/medium.svg";

import styles from "./MobileLinks.module.css";

const MobileLinks = (props) => {
	const variants = {
		initial: {
			opacity: 0,
			y: 50,
			transition: {
				type: " tween",
				duration: 0.5,
			},
		},
		animate: {
			opacity: 1,
			y: 0,
			transition: {
				type: " tween",
				duration: 0.5,
			},
		},
	};

	const content = (
		<motion.div
			className={styles.parentML}
			variants={variants}
			initial='initial'
			animate='animate'
			exit='initial'>
			<div>
				<FMLink onClick={props.onClick} isMobile={true} to='/'>
					Home
				</FMLink>
				<FMLink onClick={props.onClick} isMobile={true} to='/projects'>
					Projects
				</FMLink>
				<FMLink onClick={props.onClick} isMobile={true} to='/experience'>
					Experience
				</FMLink>
				<FMLink onClick={props.onClick} isMobile={true} to='/about'>
					About
				</FMLink>
				<FMLink onClick={props.onClick} isMobile={true} to='/contact'>
					Contact
				</FMLink>
			</div>
			<div className={styles.socialLinks}>
				\
				<FMSocials
					isMobile={true}
					alt='github'
					src={github}
					href='https://github.com/yashkathe'
				/>
				<FMSocials
					isMobile={true}
					alt='linkedin'
					src={linkedin}
					href='https://www.linkedin.com/in/yashkathe/'
				/>
				<FMSocials
					isMobile={true}
					alt='leetcode'
					src={leetcode}
					href='https://leetcode.com/yashkathe/'
				/>
				<FMSocials
					isMobile={true}
					alt='npm'
					src={npm}
					href='https://www.npmjs.com/~yashkathe'
				/>
				<FMSocials
					isMobile={true}
					alt='medium'
					src={medium}
					href='https://medium.com/@ykath001'
				/>
				<FMSocials
					isMobile={true}
					alt='docker'
					src={docker}
					href='https://hub.docker.com/u/katheyash'
				/>
			</div>
		</motion.div>
	);

	return ReactDOM.createPortal(
		content,
		document.getElementById("mobile-header")
	);
};

export default MobileLinks;
