import React, { useContext, useState } from "react";
import { motion } from "framer-motion";

import styles from "./Skills.module.css";
import shared from "../Shared/shared.module.css";

import Skill from "./Skill";

import VarientStore from "../../Store/VarientStore";

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
					<Skill
						title='Web Development'
						skillSet='• HTML • CSS • Javascript • Typescript • NodeJS • ReactJS'
						expand={expand1}
						click={webClick}
					/>
					<div></div>
					<Skill
						title='Programming'
						skillSet='• C • C++ • Python • Bash'
						expand={expand2}
						click={skillsClick}
					/>
					<div></div>
					<Skill
						title='Devops and Databases'
						skillSet='• Git • Github Actions • Linux • Docker • Ansible • AWS • SQL • MongoDB'
						expand={expand3}
						click={dbClick}
					/>
					<div></div>
				</div>
			</motion.div>
		</div>
	);
};

export default Skills;
