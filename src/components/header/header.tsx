import React  from 'react';

import styles from './header.module.scss'
import {TextField, Box, Checkbox, FormControlLabel, Button, IconButton} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import axios from "axios";
export const Header = () => {

		const searchHandler =(e:React.ChangeEvent<HTMLInputElement>)=>{
			console.log(e.target.value)
		}

		const config={
			headers: {"Access-Control-Allow-Origin": "*"}
		}
		const data = { vas:"lol"}
		const createHandler = ()=>{
				axios.put("http://code-libary-backend/create.php",data , config).then((d)=>{
					console.log(d.data)
				})
		}
	return <div className={styles.header}>
		<Box sx={{ bgcolor: 'primary.light' , padding:1 ,display:"flex"  , gap:2}}>

			<TextField color={"warning"} sx={{flexGrow:1}}  onChange={searchHandler}  id="outlined-basic" label="Search" variant="outlined" />
			<FormControlLabel control={<Checkbox defaultChecked />} label="Only title" />
			<Button onClick={createHandler} size={"small"} variant="contained" >
				<AddIcon/>
			</Button >
		</Box>
	</div>
};
 