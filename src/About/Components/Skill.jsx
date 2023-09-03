import React from "react";

import styles from "./Skill.module.css";

import upArrow from "/Icons/arrow-up.png";

const Skill = (props) => {
	return (
		<div>
			<div className={styles.skillsHeading} onClick={props.expand}>
				<p>{props.title}</p>
				<div className={`${styles.img} ${props.click ? styles.imgRotate : ""}`}>
					<img src={upArrow} alt='arrow' />
				</div>
			</div>
			<div className={`${props.click ? styles.show : styles.hide}`}>
				<p>{props.skillSet}</p>
			</div>
		</div>
	);
};

export default Skill;
