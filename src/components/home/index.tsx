import React, {FC, useEffect} from 'react';
import styles from './index.module.scss'

import {Card} from "components/home/card/card";
import {Typography, CircularProgress} from "@mui/material";

import axios from "axios";
import {API} from "api";
import useSWR from 'swr'
import {IData} from "components/types";
import {toast} from "react-toastify";

const fetcher = (url:string) => axios.get(url).then(res => res.data)

export const Index:FC = () => {

    const { data, error } = useSWR(API.get, fetcher , {errorRetryInterval:60*60*60});

    return (
      <div>
        <Typography margin={2} variant="h1" textAlign={"center"} component="h2">
            Code library
        </Typography>
            <DataGrid error={error} data={data}/>
      </div>

    );
}

  type TDataArr ={
    data?:IData[]
      error: {message:string}
}

const DataGrid:FC<TDataArr>=({data , error})=>{

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