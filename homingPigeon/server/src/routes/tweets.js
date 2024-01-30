const express = require("express")
const app = express()
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

app.put("/tweets/:id", validateToken, async(req,res,next) =>{
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