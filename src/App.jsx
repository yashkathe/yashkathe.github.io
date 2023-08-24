import React from "react";

import { HashRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./Shared/Header";
import Socials from "./Shared/Socials";
import Home from "./Home/Home";
import Projects from "./Projects/Projects";
import Experience from "./Experience/Experience";
import About from "./About/About";
import Contact from "./Contact/Contact";

import styles from "./App.module.css";

function App() {
	return (
		<Router>
			<Header />
			<Socials />
			<main className={styles.main}>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/projects' element={<Projects />} />
					<Route path='/experience' element={<Experience />} />
					<Route path='/about' element={<About />} />
					<Route path='/contact' element={<Contact />} />
				</Routes>
			</main>
		</Router>
	);
}

export default App;
