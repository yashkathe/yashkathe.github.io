import React, { useContext, useState } from "react";
import { motion } from "framer-motion";

import styles from "./Skills.module.css";
import shared from "../Shared/shared.module.css";

import VarientStore from "../../Store/VarientStore";

import upArrow from "/Icons/arrow-up.png";

const Skills = () => {
	const variantsCtx = useContext(VarientStore);

	const [webClick, setWebClick] = useState(false);
	const [skillsClick, setSkillsClick] = useState(false);
	const [dbClick, setDbClick] = useState(false);

	const expand1 = () => {
		setWebClick((prev) => !prev);
	};

	const expand2 = () => {
		setSkillsClick((prev) => !prev);
	};

	const expand3 = () => {
		setDbClick((prev) => !prev);
	};

	return (
		<div className={shared["section-shared-about"]}>
			<div>
				<motion.h3
					variants={
						window.innerWidth < 896
							? variantsCtx.mobilePop
							: variantsCtx.leftSlideIn
					}
					initial='initial'
					animate='animate'>
					Programming Skills
				</motion.h3>
			</div>
			<motion.div
				variants={
					window.innerWidth < 896
						? variantsCtx.mobilePop
						: variantsCtx.rightSlideIn
				}
				initial='initial'
				animate='animate'>
				<div className={styles.skills}>
					<div>
						<div className={styles.skillsHeading} onClick={expand1}>
							<p>Web Development</p>
							<div
								className={`${styles.img} ${webClick ? styles.imgRotate : ""}`}>
								<img src={upArrow} alt='arrow' />
							</div>
						</div>
						<div className={`${webClick ? styles.show : styles.hide}`}>
							<p>HTML, CSS, Javascript, Typescript, NodeJS, ReactJS</p>
						</div>
					</div>
					<div></div>
					<div>
						<div className={styles.skillsHeading} onClick={expand2}>
							<p>Programming</p>
							<div
								className={`${styles.img} ${
									skillsClick ? styles.imgRotate : ""
								}`}>
								<img src={upArrow} alt='arrow' />
							</div>
						</div>
						<div className={`${skillsClick ? styles.show : styles.hide}`}>
							<p> C, C++, Python, Bash</p>
						</div>
					</div>
					<div></div>
					<div>
						<div className={styles.skillsHeading} onClick={expand3}>
							<p>DevOps and Database</p>
							<div
								className={`${styles.img} ${dbClick ? styles.imgRotate : ""}`}>
								<img src={upArrow} alt='arrow' />
							</div>
						</div>
						<div className={`${dbClick ? styles.show : styles.hide}`}>
							<p>
								Git, Github Actions, Linux, Docker, Ansible, AWS, SQL, MongoDB{" "}
							</p>
						</div>
					</div>
					<div></div>
				</div>
			</motion.div>
		</div>
	);
};

export default Skills;
