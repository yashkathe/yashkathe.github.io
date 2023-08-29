import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "emailjs-com";

import CustomNotification from "../../Shared/Notification/CustomNotification";
import Spinner from "../../Shared/Spinner/Spinner";

import styles from "./ContactForm.module.css";

const templateID = import.meta.env.VITE_API_EMAILJS_TEMPLATE;
const serviceID = import.meta.env.VITE_API_EMAILJS_SERVICE;
const publicKey = import.meta.env.VITE_API_EMAILJS_KEY;

const ContactForm = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [message, setMessage] = useState();
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setIsVisible(false);
		}, 3000);

		return () => clearTimeout(timeout);
	}, [isVisible]);

	const formElement = useRef();

	const handleSubmit = async (event) => {
		event.preventDefault();
		setIsLoading(true);
		try {
			const result = await emailjs.sendForm(
				serviceID,
				templateID,
				formElement.current,
				publicKey
			);
			console.log(result);
			result.status === 200
				? setMessage("Email Sent Successfully")
				: setMessage(result.text);
			setIsLoading(false);
			setIsVisible(true);
			formElement.current.reset();
		} catch (error) {
			setIsLoading(false);
			setIsVisible(true);
			setMessage("Something went wrong");
		}
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

	const childVariantsMobile = {
		initial: {
			scale: 0.95,
			opacity: 0,
		},
		animate: {
			scale: 1,
			opacity: 1,
			transition: {
				type: " tween",
				duration: 0.6,
				delay: 0.5,
			},
		},
	};

	return (
		<>
			<motion.div
				variants={window.innerWidth < 896 ? childVariantsMobile : childVariants}
				initial='initial'
				animate='animate'>
				<form className={styles.form} onSubmit={handleSubmit} ref={formElement}>
					<div>
						<input type='text' name='name' placeholder='Name' minLength='4' />
						<input type='email' name='email' placeholder='Email' />
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
			<AnimatePresence>
				{isVisible && <CustomNotification>{message}</CustomNotification>}
			</AnimatePresence>
			{isLoading && <Spinner />}
		</>
	);
};

export default ContactForm;
