import React, { useContext } from "react";
import { motion } from "framer-motion";

import styles from "./Skills.module.css";
import shared from "../Shared/shared.module.css";

import Skill from "./Skill";

import VarientStore from "../../Store/VarientStore";

const Skills = () => {
	const variantsCtx = useContext(VarientStore);

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
					/>
					<Skill title='Programming' skillSet='• C • C++ • Python • Bash' />
					<Skill
						title='Devops and Databases'
						skillSet='• Git • Github Actions • Linux • Docker • Ansible • AWS • SQL • MongoDB'
					/>
				</div>
			</motion.div>
		</div>
	);
};

export default Skills;
