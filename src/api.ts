
import {IData} from "components/types";
import axios from "axios";
import {toast} from "react-toastify";

export const API = {
	get:"https://tz.smart-ui.pro/backend-code-libary/get.php",
	create :"https://tz.smart-ui.pro/backend-code-libary/create.php",
	courses:{
		get:"https://tz.smart-ui.pro/backend-code-libary/courses/get.php",
		create :"https://tz.smart-ui.pro/backend-code-libary/courses/create.php",
	}
}



const config={
	headers: {"Access-Control-Allow-Origin": "*"}
}

export type TApiType="code"|"courses"

export const create = async (data:IData , type : TApiType)=>{
	let currentApi =API.create;
	if(type==="courses"){
		currentApi=API.courses.create;
	}
	return  axios.post(currentApi,data , config).then((d)=>{
 	toast.success(d.statusText , {autoClose: 500,})
		console.log(d)
	}).catch((e)=>{
		toast.error(e.message)
		console.log(e)
	})
}