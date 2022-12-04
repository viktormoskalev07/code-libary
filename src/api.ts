
import {IData} from "components/types";
import axios from "axios";
import {toast} from "react-toastify";

export const API = {
	get:"http://code-libary-backend/code-libary/backend/get.php",
	create :"http://code-libary-backend/code-libary/backend/create.php",

}



const config={
	headers: {"Access-Control-Allow-Origin": "*"}
}

export const create = async (data:IData)=>{
	return  axios.post(API.create,data , config).then((d)=>{
 	toast.success(d.statusText , {autoClose: 500,})
		console.log(d)
	}).catch((e)=>{
		toast.error(e.message)
		console.log(e)
	})
}