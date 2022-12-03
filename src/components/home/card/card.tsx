import React from 'react';

import styles from './card.module.scss'

export const Card = () => {

	return <div className={styles.card}>
		<a target={"_blank"} href="https://fullcalendar.io/ ">


     <h2 className={styles.title}>
					react calendar
		 </h2>
		<p className={styles.desc}> аналог гугл календаря </p>


		<p >
			link : <span className={styles.link}>https://fullcalendar.io/ </span>
		</p>

		</a>
	</div>
};
 