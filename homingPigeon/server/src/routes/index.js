const {Router} = require("express")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const validateToken = require("../auth.js")
const User = require("../model/User.js")
const Tweet = require("../model/Tweet.js")

const router = new Router()

router.use("/register", validateToken, async(req, res, next) =>{})
router.use("/login", validateToken, async(req, res, next) =>{})
router.use("/users", validateToken, async(req, res, next) =>{})
router.use("/tweets", validateToken, async(req, res, next) =>{})
router.use("/sessions", validateToken, async(req, res, next) =>{})

module.exports = router