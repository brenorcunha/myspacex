const express = require("express");
const mongoose = require("mongoose");
const axios = require("axios");
const validateToken = require("./auth")
const morgan = require("morgan")
const cors = require("cors")

require("dotenv").config()
const app = express()
const router = require("./routes")
app.use(morgan("common"))
app.use(express.json)
app.use(cors({ origin: process.env.CORS_ORIGIN}))

try {
	mongoose.connect('mongodb://127.0.0.1:27017/hp').catch(error => handleError(error));
	mongoose.connection.on('open', () => console.log('open'));
	mongoose.connection.on('connected', () => console.log('Kinnectd 2 da DB'))
	mongoose.connection.on('disconnected', () => console.log('Disconnected'))
	mongoose.connection.on('reconnected', () => console.log('Reconnected'))
	mongoose.connection.on('disconnecting', () => console.log('Disconnecting...'))
	mongoose.connection.on('close', () => console.log('close'))
} catch (error) {
	console.error(error)
}

app.use(router)
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

//==================== CREATING TWEETS =================================================
app.post("/tweets", validateToken, async(req,res,next)=>{
    const {content} = req.body //Requires the tweet content from the requisition.
    
    try {
        const tweet = await Tweet.create({owner: req.user, content})
        if(!tweet) res.status(400).send({error: "Unable to create tweet!"})
        res.status(201).send(tweet)
    } catch (error) {
        res.status(400)
        .send(error)
    }
    next()
})

app.delete("/tweets/:id", validateToken, async(req,res,next) =>{
    const {id} = req.params

    try {
        await Tweet.deleteOne(id)
        res.status(200).send({message: "Message deleted."})
    } catch (error) {
        res.status(400)
        .next(error)
    }
})

app.delete("/tweets/:id", validateToken, async(req,res,next) =>{
    const {id} = req.params

	try {
		const tweet = await Tweet.findById(id)
		if(!tweet) return res.status(400).send({error: "Message not found."})
		if (tweet.owner===req.user._id) {
			res.status(400).send({error: "Unable to update message."})
			const tweetAlreadyLiked = tweet.likes.some(like => like==req.user._id)
		} else {
			tweet.likes.push(req.user._id)
		}
		tweet.save()
		res.status(200).send(tweet)
	} catch (error) {
		res.status(400)
		next(error)
	}
})
//==================== SEARCHING USERS ==============================================
app.get("/users", validateToken, async(req,res, next) =>{
	try {
		const users = await User.find({})
		if(!users.length) return res.status(400).send({error: "Unable to get users."});
		res.status(200).send(users.map(user => ({
			_id: user.id,
			username: user.username
		})
		))
	} catch{}
})
//Seacrhing 4 all tweets
app.get("/tweets", validateToken, async(req,res,next) =>{
	try {
		const tweets = await Tweet.find({})
		res.status(200).send(tweets)
	} catch (error) {
		res.status(400)
		next(error)
	}
})

app.get("/tweets/:id", validateToken, async(req,res,next) =>{
    const {id} = req.params

    try {
        const tweet = await Tweet.findById(id)
        if (!tweet) {
			res.status(400).send({message: "Message not found."})
		}
		res.status(200).send(tweet)
    } catch (error) {
        res.status(400)
        .next(error)
    }
})