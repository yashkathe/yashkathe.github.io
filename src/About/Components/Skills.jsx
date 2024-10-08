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
						skillSet='• HTML • CSS • Javascript • Typescript • NodeJS • ExpressJS • ReactJS • Tailwind CSS • NextJS' 
					/>
					<Skill title='Programming' skillSet='• C++ • C# • Python • Bash Shell Scripting' />
					<Skill
						title='Devops and Databases'
						skillSet='• Git • Github Actions • SQL • MongoDB • Docker • Kubernetes • Ansible • AWS • Linux '
					/>
                    <Skill
						title='AI/ML'
						skillSet='• PyTorch • LangChain • Chroma DB (Vector Database)'
					/>
				</div>
			</motion.div>
		</div>
	);
};

export default Skills;
