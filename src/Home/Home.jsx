import React from "react";

import ComputerCanvas from "./Components/DesktopModel";
import UnderDevelopmentMessage from "../Extra/UnderDev";
import Intro from "./Components/Intro";

import styles from "./Home.module.css";

const Home = () => {
	return (
		<div className={styles.parent}>
			<div>
				<Intro />
			</div>
			<div>{/* <ComputerCanvas /> */}</div>
		</div>
	);
};

export default Home;
