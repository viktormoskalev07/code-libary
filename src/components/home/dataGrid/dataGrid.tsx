import {IData} from "components/types";
import React, {FC} from "react";
import {toast} from "react-toastify";
import {API} from "api";
import {CircularProgress} from "@mui/material";
import styles from "components/home/index.module.scss";
import {Card} from "components/home/card/card";

type TDataArr ={
	data?:IData[]
	error: {message:string}
}

export const DataGrid:FC<TDataArr>=({data , error})=>{

	if(error){
		toast.error(error.message);
		toast.error(API.get);
		return <h2 style={{marginTop:80 , textAlign:"center"}}> {error.message}</h2>
	}
	if(!data){
		return <div style={{display: "flex" , height:200, width:"100%" , justifyContent:"center" , alignItems:"center"}}>
			<CircularProgress   />

		</div>
	}
	if(typeof data === "object"&&data.length>0){
		return <div className={styles.grid}>
			{data.map((item, i)=>{
				return  <Card key={i} {...item} />
			})}

		</div>
	}
	return <></>
}