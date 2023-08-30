import React, { useContext } from "react";
import { motion } from "framer-motion";

import styles from "./Skills.module.css";
import shared from "../Shared/shared.module.css";

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
					<div>
						<p>Web Development:</p>
						<p>HTML, CSS, Javascript, Typescript, NodeJS, ReactJS</p>
					</div>
					<div></div>
					<div>
						<p>Programming:</p>
						<p>C, C++, Python, Bash</p>
					</div>
					<div></div>
					<div>
						<p>DevOps and Databases:</p>
						<p>Git, Github Actions, Linux, Docker, Ansible, SQL, MongoDB</p>
					</div>
					<div></div>
				</div>
			</motion.div>
		</div>
	);
};

export default Skills;
