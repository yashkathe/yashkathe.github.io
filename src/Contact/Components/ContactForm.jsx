import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

import styles from "./ContactForm.module.css";

const ContactForm = () => {
	const templateID = import.meta.env.VITE_API_EMAILJS_TEMPLATE;
	const serviceID = import.meta.env.VITE_API_EMAILJS_SERVICE;
	const publicKey = import.meta.env.VITE_API_EMAILJS_KEY;

	const form = useRef();

	const handleSubmit = (event) => {
		event.preventDefault();

		emailjs.sendForm(serviceID, templateID, form.current, publicKey).then(
			(result) => {
				console.log(result.text);
			},
			(error) => {
				console.log(error.text);
			}
		);
	};

	const childVariants = {
		initial: {
			x: "-2vw",
			opacity: 0,
		},
		animate: {
			x: 0,
			opacity: 1,
			transition: {
				type: " tween",
				duration: 0.6,
				delay: 0.6,
			},
		},
	};

	return (
		<motion.div
			variants={childVariants}
			ref={form}
			initial='initial'
			animate='animate'>
			<form className={styles.form} onSubmit={handleSubmit}>
				<div>
					<input
						type='text'
						name='user_name'
						placeholder='Name'
						minLength='4'
					/>
					<input type='email' name='user_email' placeholder='Email' />
				</div>
				<div>
					<textarea
						name='message'
						placeholder='Message'
						rows='10'
						minLength='10'
						column='100%'></textarea>
				</div>
				<div>
					<button type='submit'>Submit</button>
				</div>
			</form>
		</motion.div>
	);
};

export default ContactForm;
