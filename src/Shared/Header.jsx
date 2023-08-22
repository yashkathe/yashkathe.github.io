import React from "react";

import FMLink from "./Components/FMLink";

import styles from "./Header.module.css";
import { motion } from "framer-motion";

const Header = () => {
	const variants = {
		initial: {
			y: "-2vw",
			opacity: 0,
		},
		animate: {
			y: 0,
			opacity: 1,
			transition: {
				type: " tween",
				duration: 1,
				delay: 1,
			},
		},
	};

	return (
		<div className={styles.parent}>
			<motion.div variants={variants} initial='initial' animate='animate'>
				<h1>Yash</h1>
			</motion.div>
			<ul>
				<FMLink to='/'>Home</FMLink>
				<FMLink to='/projects'> Projects </FMLink>
				<FMLink to='/experience'> Experience </FMLink>
				<FMLink to='/about'> About </FMLink>
				<FMLink to='/contact'> Contact </FMLink>
			</ul>
		</div>
	);
};

export default Header;
