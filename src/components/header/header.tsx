import React  from 'react';

import styles from './header.module.scss'
import {TextField, Box, Checkbox, FormControlLabel, Button, IconButton} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import {CreateModal} from "components/createModal/createModal";
import {useOpen} from "hooks/useOpen";

export const Header = () => {

		const searchHandler =(e:React.ChangeEvent<HTMLInputElement>)=>{
			console.log(e.target.value)
		}


		const data = {
			title:"lol1",
			description:"lol2",
			link:"lol3"
		}
const {isOpen , onClose}=useOpen();
	return <div className={styles.header}>
		<Box sx={{ bgcolor: 'primary.light' , padding:1 ,display:"flex"  , gap:2}}>
			<CreateModal   />
			<TextField color={"warning"} sx={{flexGrow:1}}  onChange={searchHandler}  id="outlined-basic" label="Search" variant="outlined" />
			<FormControlLabel control={<Checkbox defaultChecked />} label="Only title" />
			<Button   size={"small"} variant="contained" >
				<AddIcon/>
			</Button >
		</Box>
	</div>
};
 