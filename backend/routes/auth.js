const express = require('express')
const User = require('../mongoose_models/user')
const router = express.Router()
const { body, validationResult } = require('express-validator');


router.get('/',
[
    body('name','Enter a valid name').isLength({ min: 3 }),
    body('email','Enter a valid email').isEmail(),
    body('password','your assword is very weak').isLength({ min: 5 }),

],
(req,res) => {
        // console.log(req.body)
        // const user =User(req.body)
        // user.save()
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        // res.send(req.body)
    

    User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    }).then(user => res.json(user))
    .catch(err => {
         res.json({error:'Please enter a valid unique email',message:err.message})
        })
       
    
    })

module.exports = router