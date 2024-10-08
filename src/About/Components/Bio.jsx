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
                I hold a degree in Electronics and Telecommunication from the University of Mumbai, where I built a strong foundation in hardware, software, and mathematics. Currently I'm a Master's student at the University of California, Riverside majoring in Computer Engineering and working as a Directed Researcher.
				</p>
			</motion.div>
		</div>
	);
};

export default Bio;
