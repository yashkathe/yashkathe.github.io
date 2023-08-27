import React, { useState, useEffect } from "react";

import styles from "./UnderDev.module.css";

const UnderDevelopmentMessage = () => {
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		// Simulate progress update
		const progressInterval = setInterval(() => {
			if (progress < 90) {
				setProgress(progress + 1);
			}
		}, 25);

		return () => clearInterval(progressInterval);
	}, [progress]);

	return (
		<div className={styles["under-development-container"]}>
			<h1>Site Under Development</h1>
			<p>You can visit other pages which are ready</p>
			<div className={styles["progress-bar"]}>
				<div
					className={styles.progress}
					style={{ width: `${progress}%`, transition: "10ms" }}>
					{progress}%
				</div>
			</div>
		</div>
	);
};

export default UnderDevelopmentMessage;
