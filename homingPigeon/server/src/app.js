const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express()

try {
	mongoose.connect(process.env.DB_URL);
	mongoose.connection.on('connected', () => console.log('Kinnectd'));
	mongoose.connection.on('open', () => console.log('open'));
	mongoose.connection.on('disconnected', () => console.log('disKinnectd'));
	mongoose.connection.on('reconnected', () => console.log('reconnected'));
	mongoose.connection.on('disconnecting', () => console.log('disconnecting'));
	mongoose.connection.on('close', () => console.log('close'));
} catch (error) {
	console.error(error)
}

//Body parsing middleware: Define que queremos acessar as reqs como JSON.
app.use(express.json())
 
app.get("/", (req, res) => {
	//REQ requisição nossa - RES a resposta "/" significa a rota principal
  res.send("Hello GeekHunter! 🤓")
})

const PORT = 3333

app.listen(PORT, ()=> {
	console.log(`Server listening on ${PORT} port.`)
})

//NOT FOUND MIDDLEWARE: Se a URL não for encontrada, exibe a msg, corrige status da req e passa adiante.
app.use((req, res, next)=> {
const error = new Error (`Not found - ${req.originalUrl}`)
	res.status(404)
	next(error)
})
//ERROR HANDLING MIDDLEWARE: Se a req chegar com status 200 (success) significa que não foi tratada, então coloca status de erro e retorna tudo.
app.use((error,req,res,next)=>{
	const statusCode = res.statusCode===200 ? 500 : res.statusCode
	res.statusCode = statusCode
	res.json({
		message: error.message,
		stack: process.env.NODE_ENV==="production" ? "Not allowed infos, sorry...":error.stack
	})
})
//=======================================CREATE USER AND MORE=======================
app.post("/register", async(req, res, next) =>{
	try{
		const {username, password} =req.body
		const userExists =  await User.findOne({username})
		if(userExists) return res.status(400).send({ERROR: "Username not available!"})

		const user = await User.create({username, password})
		res.status(201).send({id: user.id, username: user.username})
	} catch (error){
		res.status(400)
		next(error)
	}
})