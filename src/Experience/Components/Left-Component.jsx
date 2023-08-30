import React, { useContext } from "react";
import { motion } from "framer-motion";

import styles from "./Left-Component.module.css";

import VarientStore from "../../Store/VarientStore";

const LeftComponent = (props) => {
	const variantsCtx = useContext(VarientStore);

	return (
		<div className={styles.parent}>
			<motion.div
				className={styles.description}
				variants={
					window.innerWidth < 896
						? variantsCtx.mobilePop
						: variantsCtx.leftSlideIn
				}
				initial='initial'
				animate='animate'>
				<h2>{props.jobTitle}</h2>
				<a href='https://iotiot.in/' target='_blank'>
					<h3>{props.company}</h3>
				</a>
				<p className={styles.mobileTimeline}>({props.timeline})</p>
				<p>{props.jobDescription1}</p>
				<p>{props.jobDescription2}</p>
				<p>{props.jobDescription3}</p>
			</motion.div>
			<motion.div
				className={styles.companyLogo}
				variants={variantsCtx.imgPopExperience}
				initial='initial'
				animate='animate'>
				<a href='https://iotiot.in/' target='_blank'>
					<img src={props.imageSrc}></img>
				</a>
			</motion.div>
			<motion.div
				className={styles.timeline}
				variants={
					window.innerWidth < 896
						? variantsCtx.mobilePop
						: variantsCtx.rightSlideIn
				}
				initial='initial'
				animate='animate'>
				<p>{props.timeline}</p>
			</motion.div>
		</div>
	);
};

export default LeftComponent;
