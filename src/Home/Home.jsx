import React from "react";

import ComputerCanvas from "./Components/DesktopModel";

import styles from "./Home.module.css";

const Home = () => {
	return (
		<div className={styles.parent}>
			<div>
				<h1>Hi</h1>
			</div>
			<div>
				<ComputerCanvas />
			</div>
		</div>
	);
};

export default Home;
