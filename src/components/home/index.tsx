import React, {FC} from 'react';
import styles from './index.module.scss'

import {Card} from "components/home/card/card";
import {Typography} from "@mui/material";
import {dataMock} from "./data";

export const Index:FC = () => {
    return (
      <div>
        <Typography margin={2} variant="h1" textAlign={"center"} component="h2">
            Code library
        </Typography>
        <div className={styles.grid}>
            {dataMock.map((item, i)=>{
              return  <Card key={i} {...item} />
            })}

        </div>

      </div>

    );
}

