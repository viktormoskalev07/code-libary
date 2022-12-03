import React from 'react';
import styles from './index.module.scss'

import {Card} from "components/home/card/card";
import {Typography} from "@mui/material";
export const Index = () => {
    return (
      <div>
        <Typography margin={2} variant="h1" textAlign={"center"} component="h2">
            Code library
        </Typography>
        <div className={styles.grid}>
          <Card/>
        </div>

      </div>

    );
}

