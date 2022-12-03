import axios from "axios/index";
import {IData} from "components/types";

const API = {
	get:"http://code-libary-backend/get.php",
	create :"http://code-libary-backend/create.php"
}



const config={
	headers: {"Access-Control-Allow-Origin": "*"}
}

export const create = async (data:IData)=>{
	axios.post("http://code-libary-backend/create.php",data , config).then((d)=>{
		console.log(d.data)
	})
}