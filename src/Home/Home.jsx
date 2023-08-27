import React from "react";

import ComputerCanvas from "./Components/DesktopModel";
import UnderDevelopmentMessage from "../Extra/UnderDev";

import styles from "./Home.module.css";

const Home = () => {
	return (
		<div className={styles.parent}>
			<div>
				<UnderDevelopmentMessage />
			</div>
		</div>
	);
};

export default Home;
