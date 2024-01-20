const express = require("express");
const mongoose = require("mongoose");

const router = require("express");
const login = require("./routes/login");
const register = require("./routes/register");

require("dotenv").config()
const app = express()

try {
	mongoose.connect('mongodb://localhost:27017/hp')
	mongoose.connection.on('connected', () => console.log('Kinnectd'))
	mongoose.connection.on('open', () => console.log('Open'))
	mongoose.connection.on('disconnected', () => console.log('Disconnected'))
	mongoose.connection.on('reconnected', () => console.log('Reconnected'))
	mongoose.connection.on('disconnecting', () => console.log('Disconnecting...'))
	mongoose.connection.on('close', () => console.log('close'))
} catch (error) {
	console.error(error)
}

//Body parsing middleware: Define que queremos acessar as reqs como JSON.
app.use(express.json())
 
app.get("/", (req, res) => {
	//REQ requisição nossa - RES a resposta "/" significa a rota principal
  	//res.send("Hello GeekHunter! 🤓")
 	res.status(200)
})
app.get("/register", (req, res) =>{
	//res.send(router)
	res.status(200).send("OK")
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
