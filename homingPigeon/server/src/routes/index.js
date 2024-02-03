const {Router} = require("express")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const validateToken = require("../auth.js")
const User = require("../model/User.js")
const Tweet = require("../model/Tweet.js")

const router = new Router()
router.get("/", (req, res) => {
	//REQ requisição nossa - RES a resposta
  	res.send("Hello GeekHunter! 🤓")
 	res.status(200)
})

router.post("/register", async (req,res,next) =>{
	try{
		const {username, password} = req.body
		const userExists = await User.findOne({username})
		
		if(userExists) return res.status(400).send({error: "Username already in use."})
		
		const user = await User.Create({
			username,
			password
		})
		res.status(201).send({
			id: user.id,
			username: user.username
		})
		
	} catch(error){
		res.status(400)
		return next(error)
	}
})
router.post("/login", validateToken, async(req,res,next) =>{
	try {
		const {username, password} = req.body

		const User = await User.findOne({username})

		if(!user) return res.status(400).send({error: "Username not found."})

		const validPassword = await bcrypt.compare(password, user.password)
		if(!validPassword) return res.status(400).send({error: "Invalid password."})

	} catch (error) {
		res.status(400)
		send(error)
	}
})
//======================USERS ROUTES
router.get("/users", validateToken, async(req,res, next) =>{
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

router.get("/users/:id", validateToken, async(req,res,next) =>{
    const {id} = req.params

    try {
        const users = await User.findById({id})
        if (!users) {
			res.status(400).send({message: "User not found."})
		}
		res.status(200).send(users.map(user => ({
			_id: user.id,
			username: user.username
		})
        ))
    } catch{}
})

router.delete("/users/:id", validateToken, async(req,res,next) =>{
    const {id} = req.params

    try {
        await User.deleteOne(id)
        res.status(200).send({message: "User deleted."})
    } catch (error) {
        res.status(400)
        .next(error)
    }
})
//=============TWEETS ROUTES
router.post("/tweets", validateToken, async(req,res,next)=>{
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

router.delete("/tweets/:id", validateToken, async(req,res,next) =>{
    const {id} = req.params

    try {
        await Tweet.deleteOne(id)
        res.status(200).send({message: "Message deleted."})
    } catch (error) {
        res.status(400)
        .next(error)
    }
})

router.put("/tweets/:id", validateToken, async(req,res,next) =>{
    const {id} = req.params

	try {
		const tweet = await Tweet.findById(id)
		if(!tweet) return res.status(400).send({error: "Message not found."})
		if (tweet.owner===req.user._id) {
			res.status(400).send({error: "Unable to update message."})
			const tweetAlreadyLiked = tweet.likes.some(like => like==req.user._id)

            if(tweetAlreadyLiked){
                tweet.likes = tweet.likes.filter(like => like!=req.user._id)
            }
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
//Seacrhing 4 all tweets
router.get("/tweets", validateToken, async(req,res,next) =>{
	try {
		const tweets = await Tweet.find({})
		res.status(200).send(tweets)
	} catch (error) {
		res.status(400)
		next(error)
	}
})

router.get("/tweets/:id", validateToken, async(req,res,next) =>{
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

router.post("/sessions", validateToken, async(req, res, next) =>{})

module.exports = router