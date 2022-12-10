import React, {FC} from 'react';
import styles from './index.module.scss'

import axios from "axios";
import {API} from "api";
import useSWR from 'swr'

import {DataGrid} from "components/home/dataGrid/dataGrid";
import   {TabsWrapper} from "components/tabs/tabs";

const fetcher = (url:string) => axios.get(url).then(res => res.data)

export const Index:FC = () => {

    const { data, error } = useSWR(API.get, fetcher , {errorRetryInterval:60*60*60});
    const { data:dataCourses, error:errorCourses } = useSWR(API.courses.get, fetcher , {errorRetryInterval:60*60*60});

    return (
      <div className={styles.home}>
       <h1>
         Smart library
       </h1>
        <div style={{padding:"0 40px"}}>
          <TabsWrapper Tab1={ <DataGrid error={error} data={data}/>}  Tab2={<DataGrid error={errorCourses} data={dataCourses}/>}/>
        </div>
      </div>
    );
}
