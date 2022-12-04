import React  from 'react';

import styles from './header.module.scss'
import {TextField, Box, Checkbox, FormControlLabel, Button   } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import {CreateModal} from "components/createModal/createModal";
import {useOpen} from "hooks/useOpen";

export const Header = () => {

		const searchHandler =(e:React.ChangeEvent<HTMLInputElement>)=>{
			console.log(e.target.value)
		}

const {isOpen , onClose , onOpen}=useOpen();
	return <div className={styles.header}>
		<Box sx={{ bgcolor: 'primary.main' , padding:1 ,display:"flex"  , gap:2}}>
		<CreateModal handleClose={onClose} open={isOpen}/>
			<TextField color={"warning"} sx={{flexGrow:1}}  onChange={searchHandler}  id="outlined-basic" label="Search" variant="outlined" />
			<FormControlLabel  control={<Checkbox defaultChecked />} label="Only title" />
			<Button  onClick={onOpen} size={"small"} variant="contained" >
				<AddIcon/>
			</Button >
		</Box>
	</div>
};
 