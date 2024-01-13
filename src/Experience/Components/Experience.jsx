import React, { useContext } from "react";
import { motion } from "framer-motion";

import styles from "./Experience.module.css";

import VarientStore from "../../Store/VarientStore";

const Experience = (props) => {
	const variantsCtx = useContext(VarientStore);
	console.log(props.flip);

	return (
		<div className={`${props.flip ? styles.parent : styles.parentFlip}`}>
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
				<a href={props.company_href} target='_blank'>
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
				<a href={props.company_href} target='_blank'>
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

export default Experience;
