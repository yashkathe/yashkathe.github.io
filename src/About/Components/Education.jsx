import React, { useContext } from "react";
import { motion } from "framer-motion";

import styles from "./Education.module.css";
import shared from "../Shared/shared.module.css";

import VarientStore from "../../Store/VarientStore";

const Education = () => {
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
					Education Timeline
				</motion.h3>
			</div>
			<motion.div
				className={styles.uni}
				variants={
					window.innerWidth < 896
						? variantsCtx.mobilePop
						: variantsCtx.rightSlideIn
				}
				initial='initial'
				animate='animate'>
				<div>
					<p>MS in Computer Engineering</p> <p>University of California</p>
					<p>2025</p>
				</div>
				<div></div>
				<div>
					<p>BE in Electronics & Telecommunication</p>{" "}
					<p>University of Mumbai</p>
					<p>2023</p>
				</div>
				<div></div>
			</motion.div>
		</div>
	);
};

export default Education;
