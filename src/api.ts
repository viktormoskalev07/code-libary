
import {IData} from "components/types";
import axios from "axios";
import {toast} from "react-toastify";

const API = {
	get:"http://code-libary-backend/get.php",
	create :"http://code-libary-backend/create.php"
}



const config={
	headers: {"Access-Control-Allow-Origin": "*"}
}

export const create = async (data:IData)=>{
 axios.post(API.create,data , config).then((d)=>{
		toast(d.status)
	}).catch((e)=>{
		toast.error(e.message)
		console.log(e)
	})

}