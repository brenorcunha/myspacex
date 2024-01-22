const validateToken = require("../auth")

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
//CONT FROM PAGE 25 - Atualizar tweet específico.