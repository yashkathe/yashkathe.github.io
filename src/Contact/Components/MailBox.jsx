import React, { useContext } from "react";
import { motion } from "framer-motion";

import styles from "./MailBox.module.css";

import mailBox from "/Icons/mailbox.svg";

import VarientStore from "../../Store/VarientStore";

const MailBox = () => {
	const variantsCtx = useContext(VarientStore);

	return (
		<motion.div
			className={styles.imgContainer}
			variants={variantsCtx.rightSlideIn}
			initial='initial'
			animate='animate'>
			<img src={mailBox} alt='mailbox' />
		</motion.div>
	);
};

export default MailBox;
