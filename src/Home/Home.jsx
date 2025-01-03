import React, { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// import ComputerCanvas from "./Components/DesktopModel";
// import UnderDevelopmentMessage from "../Extra/UnderDev";
import Intro from "./Components/Intro";

import styles from "./Home.module.css";

import pfp from "/pfp-irvine.jpg";

import VarientStore from "../Store/VarientStore";

const Home = () => {
	const variantsCtx = useContext(VarientStore);

	return (
		<div className={styles.parent}>
			<div>
				<Intro />
			</div>
			<div>
				<motion.div
					className={styles.profile}
					variants={
						window.innerWidth < 896
							? variantsCtx.mobilePop
							: variantsCtx.rightSlideIn
					}
					initial='initial'
					animate='animate'>
					<img src={pfp} alt='pfp' />
				</motion.div>
			</div>
		</div>
	);
};

export default Home;
