import bcrypt from 'bcryptjs'
import register from './register.js'

app.post("/login", async(req, res, next) =>{
	try{
		const {username, password} =req.body
		const userExists =  await User.findOne({username})
		if(!userExists) return res.status(400).send({ERROR: "Username not found!"})

		const validPassword = await bcrypt.compare(password, hashedPassword,
			async function(error, isMatch){
			if(!isMatch) return res.status(400).send({ERROR: "Incorrect password!"})
			}
		)
		const token = jwt.sign({_id: user.id}, process.env.JWT_SECRET)
		res.header('auth-token', token).send(token)
        res.send({message: "User logged in."})
	} catch (error){
		res.status(400)
		send(error)
	}
})

export default login