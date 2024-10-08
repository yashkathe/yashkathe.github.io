import React, { useContext } from "react";
import { motion } from "framer-motion";

import MailBox from "./Components/MailBox";
import ContactForm from "./Components/ContactForm";

import styles from "./Contact.module.css";
import shared from "../Shared/CSS/shared.module.css";

import VarientStore from "../Store/VarientStore";

const Contact = () => {
	const variantsCtx = useContext(VarientStore);

	return (
		<div className={shared["parent-shared"]}>
			<div className={shared["header-shared"]}>
				<motion.h1
					variants={variantsCtx.pageTitleVariant}
					initial='initial'
					animate='animate'>
					Let's Connect
				</motion.h1>
				<div></div>
				<div className={`${styles.children}`}>
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
