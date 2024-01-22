const {Router} = require("express")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const validateToken = require("./auth.js")
const User = require("../src/model/User.js")
const Tweet = require("../src/model/Tweet.js")
const login = require("./routes/login");
const register = require("./routes/register");
const router = new Router()

router.post("/register", validateToken, async(req, res, next) =>{})
router.post("/login", validateToken, async(req, res, next) =>{})

module.exports = router