import React, { useRef, useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";

import Spinner from "../../Shared/Spinner/Spinner";

import styles from "./ContactForm.module.css";

import VarientStore from "../../Store/VarientStore";

const templateID = import.meta.env.VITE_API_EMAILJS_TEMPLATE;
const serviceID = import.meta.env.VITE_API_EMAILJS_SERVICE;
const publicKey = import.meta.env.VITE_API_EMAILJS_KEY;

const ContactForm = () => {
	const variantsCtx = useContext(VarientStore);

	const [message, setMessage] = useState();
	const [isLoading, setIsLoading] = useState(false);

	const textRef = useRef();
	const emailRef = useRef();
	const messageRef = useRef();

	const formElement = useRef();

	const toastConfig = {
		position: "bottom-right",
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: "light",
		style: { fontSize: "1rem", color: "#121212", background: "#e8e6e3" },
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		setIsLoading(true);

		if (
			textRef.current.value.trim().length === 0 ||
			emailRef.current.value.trim().length === 0 ||
			messageRef.current.value.trim().length === 0
		) {
			toast.error('Values Cannot Be Empty', toastConfig);
		}

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
			toast.success(message, toastConfig);
			formElement.current.reset();
		} catch (error) {
			setIsLoading(false);
			setMessage(error);
			toast.error(message, toastConfig);
		}
	};

	return (
		<>
			<motion.div
				variants={
					window.innerWidth < 896
						? variantsCtx.mobilePop
						: variantsCtx.leftSlideIn
				}
				initial='initial'
				animate='animate'>
				<form className={styles.form} onSubmit={handleSubmit} ref={formElement}>
					<div>
						<input
							type='text'
							name='name'
							placeholder='Name'
							minLength='4'
							ref={textRef}
						/>
						<input
							type='email'
							name='email'
							placeholder='Email'
							ref={emailRef}
						/>
					</div>
					<div>
						<textarea
							ref={messageRef}
							name='message'
							placeholder='Message'
							rows='12'
							minLength='10'
							column='100%'></textarea>
					</div>
					<div>
						<button type='submit'>Submit</button>
					</div>
				</form>
			</motion.div>
			<ToastContainer />
			{isLoading && <Spinner />}
		</>
	);
};

export default ContactForm;
