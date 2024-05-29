import React, { useContext } from "react";
import { motion } from "framer-motion";

import styles from "./About.module.css";
import shared from "../Shared/CSS/shared.module.css";

import Bio from "./Components/Bio";
import Education from "./Components/Education";
import Skills from "./Components/Skills";

import VarientStore from "../Store/VarientStore";

const About = () => {
	const variantsCtx = useContext(VarientStore);

	return (
		<div className={shared["parent-shared"]}>
			<div className={shared["header-shared"]}>
				<motion.h1
					variants={variantsCtx.pageTitleVariant}
					initial='initial'
					animate='animate'>
					About Me
				</motion.h1>
				<div></div>
			</div>
			<div className={styles["children"]}>
				<div>
					<Bio />
				</div>
				<div>
					<Education />
				</div>
				<div>
					<Skills />
				</div>
			</div>
		</div>
	);
};

export default About;
