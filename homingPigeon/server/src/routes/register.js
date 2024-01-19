import bcrypt from 'bcryptjs'
const hashedPassword = ''

app.post("/register", async(req, res, next) =>{
	try{
		const {username, password} =req.body
		const userExists =  await User.findOne({username})
		if(userExists) return res.status(400).send({ERROR: "Username not available!"})

		const salt = await bcrypt.genSalt(10, function(err, Salt){
			bcrypt.hash(password, Salt, function(error, hash){
				if(error) return console.log("Encryption failed!")
				
				hashedPassword = hash
				console.log(hash)
			})
		})

		const user = await User.create({username, password: hash})
		res.status(201).send({id: user.id, username: user.username})
	} catch (error){
		res.status(400)
		next(error)
	}
})

export default register