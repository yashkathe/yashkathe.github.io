import React, { useState } from "react";

import FMLink from "./Components/FMLink";
import HamBurgerIcon from "./Hamburger-Icon/HamBurgerIcon";
import MobileLinks from "./Hamburger-Icon/MobileLinks";

import styles from "./Header.module.css";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
	const [mobileNavClick, setMobileNavClick] = useState(false);

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

	const mobileNavHandler = () => {
		setMobileNavClick((prev) => !prev);
	};

	return (
		<div className={styles.parent}>
			<motion.div variants={variants} initial='initial' animate='animate'>
				<h1>Yash</h1>
			</motion.div>
			<ul>
				<FMLink to='/'>Home</FMLink>
				<FMLink to='/projects'> Projects </FMLink>
				<FMLink to='/blog'> Blog </FMLink>
				<FMLink to='/experience'> Experience </FMLink>
				<FMLink to='/about'> About </FMLink>
				<FMLink to='/contact'> Contact </FMLink>
			</ul>
			<div className={styles.hamBurgerIcon}>
				<HamBurgerIcon onClick={mobileNavHandler} clicked={mobileNavClick} />
			</div>
			<AnimatePresence>
				{mobileNavClick && <MobileLinks onClick={mobileNavHandler} />}
			</AnimatePresence>
		</div>
	);
};

export default Header;
