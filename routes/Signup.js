const router = require('express').Router();
const SignUp = require('../models/Signup');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

// register
router.post("/signup", async (req,res) =>{
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedpass = await bcrypt.hash(req.body.password,salt);

        const newUser = new SignUp({
            fullname: req.body.fullname,
            username:req.body.username,
            email:req.body.email,
            password:hashedpass,
        })

        const user = await newUser.save();
        res.status(200).json(user);
    }catch (err) {
        res.status(500).json(err);
    }

});

// login
router.post("/login",async (req,res) =>{
    try {
        const user = await SignUp.findOne({username: req.body.username})
        !user && res.status(400).json("wrong Credentials!")

        const validated = await bcrypt.compare(req.body.password, user.password)
        !validated && res.status(400).json("wrong Credentials!")

        const {password, ...others} = user._doc;

        // generate response token
        const token = jwt.sign({ id:user.id, isAdmin:user.isAdmin }, "mysecretkey");
        res.json({
            username:user.username,
            isAdmin:user.isAdmin,
            token,
        })

    } catch (err) {
        res.status(500).json(err);
    }

})

const verify = (req,res) => {
    const authHeader = req.headers.authorization;

}



module.exports = router;