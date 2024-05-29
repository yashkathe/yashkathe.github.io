import React, { useState } from "react";

import styles from "./Skill.module.css";

import upArrow from "/Icons/arrow-up.png";

const Skill = (props) => {
	const [clicked, setClicked] = useState(false);

	return (
		<div className={styles.parent}>
			<div
				className={styles.skillsHeading}
				onClick={() => {
					setClicked((prev) => !prev);
				}}>
				<p>{props.title}</p>
				<div className={`${styles.img} ${clicked ? styles.imgRotate : ""}`}>
					<img src={upArrow} alt='arrow' />
				</div>
			</div>
			<div className={`${clicked ? styles.show : styles.hide}`}>
				<p>{props.skillSet}</p>
			</div>
			<div className={styles.line}></div>
		</div>
	);
};

export default Skill;
