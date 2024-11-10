import React, { useContext } from "react";
import { motion } from "framer-motion";

import VarientStore from "../../Store/VarientStore";

import styles from "./Intro.module.css";

const Intro = () => {
	const variantsCtx = useContext(VarientStore);


	return (
		<motion.div
			className={styles.parent}
			variants={
				window.innerWidth < 896
					? variantsCtx.mobilePop
					: variantsCtx.leftSlideIn
			}
			initial='initial'
			animate='animate'>
			<h1>Hello, I'm Yash Kathe</h1>
			<p>
				I am Master's Student @ UC Riverside, majoring in Computer Engineering. <br/>
                My research interests include the Internet of Things, Cyber Physical Systems, Machine Learning and Artificial Intelligence.
			</p>
		</motion.div>
	);
};

export default Intro;
