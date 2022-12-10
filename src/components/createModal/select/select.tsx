import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import styles from "./select.module.scss"
import {FC} from "react";
import {TApiType} from "api";

type TState={
	state : string,
	setState : (a:TApiType)=>void
}

export const SelectType:FC<TState>=({state,setState})=> {

	const handleChange = (event: SelectChangeEvent) => {
		setState(event.target.value as TApiType);
	};

	return (
		<div className={styles.select} >
			<FormControl fullWidth>
				<InputLabel  >Type</InputLabel>
				<Select
					value={state}
					label="Type"
					onChange={handleChange}
				>
					<MenuItem value={"code"}>Code</MenuItem>
					<MenuItem value={"courses"}>Courses</MenuItem>
				</Select>
			</FormControl>
		</div>
	);
}