const express = require('express')
const User = require('../mongoose_models/user')
const router = express.Router()
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

const JWT_SECRET = 'itsthebackendpart'

//create a user using post '/api/auth/createuser'(post not working ). no login required
router.get('/createuser',
    [
        body('name','Enter a valid name').isLength({ min: 3 }),
        body('email','Enter a valid email').isEmail(),
        body('password','your assword is very weak').isLength({ min: 5 }),
    ],
    async(req,res) => {
            // console.log(req.body)
            // const user =User(req.body)
            // user.save()

            //if their are any errors , return bad request and the error
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            // res.send(req.body)
        
            //check whether the user with this email exists already.
            try{
                let user = await User.findOne({email: req.body.email})
                if(user) {
                    return res.status(400).json({error : 'Sorry, a user with this email already exists'})
                }
                const salt = await bcrypt.genSalt(10)
                const secpass = await bcrypt.hash(req.body.password,salt) 
                //create a new user
                user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: secpass,
                })
                const data = {
                    id:user.is
                }
                const authtoken=jwt.sign(data, JWT_SECRET)
                console.log(authtoken)
                // res.json(user)
                res.json({authToken:authtoken})

            }catch(error){
                console.error(error.message)
                res.status(500).send("some error occured")
            }
        })
        
        
module.exports = router
     
     
// .then(user => res.json(user))
// .catch(err => {
//     res.json({error:'Please enter a valid unique email',message:err.message})
// })