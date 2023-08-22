import React from "react";
import FMSocials from "./Components/FMSocials";

import styles from "./Socials.module.css";

import linkedin from "/Icons/linkedin.svg";
import github from "/Icons/github.svg";

const Socials = () => {
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
		</div>
	);
};

export default Socials;
