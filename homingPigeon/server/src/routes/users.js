const express = require("express")
const app = express()

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

app.get("/users/:id", validateToken, async(req,res,next) =>{
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