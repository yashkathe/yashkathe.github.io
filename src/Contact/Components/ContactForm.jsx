import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

import styles from "./ContactForm.module.css";

const ContactForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleSubmit = (event) => {
		event.preventDefault();

		// emailjs
		// 	.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData, "YOUR_USER_ID")
		// 	.then(
		// 		(result) => {
		// 			console.log(result.text);
		// 		},
		// 		(error) => {
		// 			console.log(error.text);
		// 		}
		// 	);
	};

	const handleChange = (e) => {
		// const { name, value } = e.target;
		// setFormData((prevData) => ({
		// 	...prevData,
		// 	[name]: value,
		// }));
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
				duration: 1,
				delay: 0.6,
			},
		},
	};

	return (
		<motion.div variants={childVariants} initial='initial' animate='animate'>
			<form onSubmit={handleSubmit} className={styles.form}>
				<div>
					<input
						type='text'
						name='name'
						placeholder='Name'
						minLength='4'
						onChange={handleChange}
					/>
					<input
						type='email'
						name='email'
						placeholder='Email'
						onChange={handleChange}
					/>
				</div>
				<div>
					<textarea
						name='message'
						placeholder='Message'
						onChange={handleChange}
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
