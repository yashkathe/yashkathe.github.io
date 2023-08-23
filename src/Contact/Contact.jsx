import React from "react";
import { motion } from "framer-motion";

import MailBox from "./Components/MailBox";
import ContactForm from "./Components/ContactForm";

import styles from "./Contact.module.css";

const Contact = () => {
	const headingVariants = {
		initial: {
			x: "-2vw",
			opacity: 0,
		},
		animate: {
			x: 0,
			opacity: 1,
			transition: {
				type: " tween",
				duration: 0.8,
			},
		},
	};
	return (
		<div className={styles.parent}>
			<div className={styles.header}>
				<motion.h1
					variants={headingVariants}
					initial='initial'
					animate='animate'>
					Let's Talk
				</motion.h1>
				<div></div>
				<div className={styles.children}>
					<div>
						<ContactForm />
					</div>
					<div>
						<MailBox />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
