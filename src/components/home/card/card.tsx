import React, {FC} from 'react';

import styles from './card.module.scss'
import {IData} from "../../types";


interface ICard extends IData{
	search?:string
}

export const Card:FC<ICard> = ({title,description,link }) => {

	return <div className={styles.card}>
		<a target={"_blank"}   rel="noreferrer"  href={link}>
     <h2 className={styles.title}>
		<span  dangerouslySetInnerHTML={{__html:title}}/>
		 </h2>
		<p className={styles.desc}> </p>
		  <span  dangerouslySetInnerHTML={{__html:description}}/>
			<p >
			link : <span className={styles.link}> {link }  </span>
		</p>
		</a>
	</div>
};
 