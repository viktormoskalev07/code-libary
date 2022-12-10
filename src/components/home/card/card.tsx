import React, {FC} from 'react';

import styles from './card.module.scss'
import {IData} from "../../types";


interface ICard extends IData{
	search?:string
}

export const Card:FC<ICard> = ({title,description,link }) => {

	return <div className={styles.card}>
     <h2 className={styles.title}>
		<span  dangerouslySetInnerHTML={{__html:title}}/>
		 </h2>
		  <div className={styles.description}  dangerouslySetInnerHTML={{__html:description}}/>
		<br/>
		<a target={"_blank"}   rel="noreferrer"  href={link}>
			link : <span className={styles.link}> {link }  </span>
		</a>
	</div>
};
 