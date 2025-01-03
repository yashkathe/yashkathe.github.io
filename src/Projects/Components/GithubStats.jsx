import React, { useEffect, useState } from "react";

import styles from "./GithubStats.module.css";

import Spinner from "../../Shared/Spinner/Spinner2";

import star from "/Icons/github-star.png";
import fork from "/Icons/github-fork.png";

const GithubStats = () => {
	const [stats, setStats] = useState({ stars: 0, forks: 0 });
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchStats = async () => {
			try {
				setLoading(true);
				const response = await fetch(
					"https://api.github-star-counter.workers.dev/user/yashkathe"
				);

				if (!response.ok) {
					throw new Error("Failed to fetch GitHub stats");
				}

				const data = await response.json();
				setStats({ stars: data.stars, forks: data.forks });
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		fetchStats();
	}, []);

	return (
		<div className={styles.parent}>
			{loading && <Spinner/>}
			{error && <p>Error: {error}</p>}
			{!loading && !error && (
				<>
					<div className={styles.statItem}>
						<img src={star} alt='star' className={styles.icon} />
						<span>{stats.stars} Stars</span>
					</div>
					<div className={styles.statItem}>
						<img src={fork} alt='fork' className={styles.icon} />
						<span>{stats.forks} Forks</span>
					</div>
				</>
			)}
		</div>
	);
};

export default GithubStats;
