import React from "react";
import FMSocials from "./Components/FMSocials";

import styles from "./Socials.module.css";

import linkedin from "/Icons/linkedin.svg";
import github from "/Icons/github.svg";
import leetcode from "/Icons/leetcode-3.png";
import npm from "/Icons/npm-3.png"
import docker from "/Icons/docker-3.png"

const Socials = (props) => {
	return (
		<div className={styles.parent}>
			<FMSocials
				alt='linkedin'
				src={linkedin}
				href='https://www.linkedin.com/in/yashkathe/'
			/>
			<FMSocials
				alt='github'
				src={github}
				href='https://github.com/yashkathe'
			/>
			<FMSocials
				alt='leetcode'
				src={leetcode}
				href='https://leetcode.com/yashkathe/'
			/>
            <FMSocials
                alt='npm'
                src={npm}
                href='https://www.npmjs.com/~yashkathe'
            />
            <FMSocials
                alt='docker'
                src={docker}
                href='https://hub.docker.com/u/katheyash'
            />
		</div>
	);
};

export default Socials;
