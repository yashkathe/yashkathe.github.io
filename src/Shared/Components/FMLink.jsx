import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import styles from "./FMLink.module.css";

const FMLink = (props) => {
	const liVariants = {
		hover: {
			scale: 1.3,
		},
	};

	return (
		<motion.li className={styles.list} variants={liVariants} whileHover='hover'>
			<Link to={props.to}>{props.children}</Link>
		</motion.li>
	);
};

export default FMLink;
