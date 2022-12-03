import axios from "axios/index";

const API = {
	get:"http://code-libary-backend/get.php",
	create :"http://code-libary-backend/create.php"
}

interface IData {
	title:string,
	description:string,
	link:string
}


const config={
	headers: {"Access-Control-Allow-Origin": "*"}
}

export const create = async (data:IData)=>{
	axios.post("http://code-libary-backend/create.php",data , config).then((d)=>{
		console.log(d.data)
	})
}