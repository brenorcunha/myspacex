const express = require("express");
const axios = require("axios");
const app = express()
validateToken = require("../auth.js")
register();
module.exports = register;

function register() {
	app.post("/register", async (req, res, next) => {
		try {
			const { username, password } = req.body;
			axios.post(`${process.env.REACT_SERVER_APP_URL}/register`,{
				username,
				password
			})
			const userExists = await User.findOne({ username });
			if (userExists) return res.status(400).send({ ERROR: "Username not available!" });

			const salt = await bcrypt.genSalt(10, function (err, Salt) {
				bcrypt.hash(password, Salt, function (error, hash) {
					if (error) return console.log("Encryption failed!");

					const hashedPassword = hash;
					console.log(hash);
				});
			});

			const user = await User.create({ username, password: hash });
			res.status(201).send({ id: user.id, username: user.username });
		} catch (error) {
			res.status(400);
			next(error);
		}
	});

	app.get("/private", validateToken, async(req,res, next)=>{}) //Put in every private function.
}

