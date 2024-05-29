import React, { useContext } from "react";
import { motion } from "framer-motion";

import styles from "./Bio.module.css";
import shared from "../Shared/shared.module.css";

import VarientStore from "../../Store/VarientStore";

const Bio = () => {
	const variantsCtx = useContext(VarientStore);

	return (
		<div className={`${shared["section-shared-about"]} ${styles.section}`}>
			<div>
				<motion.h3
					variants={
						window.innerWidth < 896
							? variantsCtx.mobilePop
							: variantsCtx.leftSlideIn
					}
					initial='initial'
					animate='animate'>
					About Myself
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
				<p>
					My journey began with a degree in Electronics and Telecommunication
					from the University of Mumbai. Experiencing virtual classes during the
					COVID era highlighted that theoretical knowledge alone wasn't
					sufficient, especially in hands-on fields like Electronics.
					Recognizing this gap, I made a pivot towards software development,
					delving into the world of full-stack technology. This unique blend of
					Electronics and software knowledge became my strength. Now, pursuing a
					Master's in Computer Engineering at the University of California,
					Riverside, I'm excited to enhance my computer science expertise and
					contribute to the forefront of innovation.
				</p>
			</motion.div>
		</div>
	);
};

export default Bio;
