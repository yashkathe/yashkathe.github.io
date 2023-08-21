import React from "react";

import FMLink from "./Components/FMLink";

import styles from "./Header.module.css";

const Header = () => {
	return (
		<div className={styles.parent}>
			<ul>
				<FMLink to='/'> Home </FMLink>
				<FMLink to='/projects'> Project </FMLink>
				<FMLink to='/experience'> Experience </FMLink>
				<FMLink to='/about'> About </FMLink>
				<FMLink to='/contact'> Contact </FMLink>
			</ul>
		</div>
	);
};

export default Header;
