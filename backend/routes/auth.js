const express = require("express");
const User = require("../mongoose_models/user");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchUser = require("../Middleware/Fetchuserdata");

//json webtoken is signed from a secret(this  secret should be kept safe and not be accessed by others execpt my server)
const JWT_SECRET = "itsthebackendpart";

//Route 1 :create a user using post '/api/auth/createuser'(post not working ). no login required
router.post(
  "/createuser",
  [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "your password is very weak").isLength({ min: 5 }),
  ],
  async (req, res) => {
    // console.log(req.body)    //conatins info of wt is their in the body of request
    // const user =User(req.body)
    // user.save()         // .save() is a method used in mongoose to save a new or updated document
    // res.send(req.body)   // sending content of req.body as a response to the client

    //if their are any errors , return bad request and the error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    //check whether the user with this email exists already.
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "Sorry, a user with this email already exists" });
      }
      const salt = await bcrypt.genSalt(10);
      const secpass = await bcrypt.hash(req.body.password, salt);
      //create a new user in the database()
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secpass,
      });
      // res.json(user)
      const data = {
        id: user.id,
      };
      const authtoken = jwt.sign(data, JWT_SECRET);
      console.log(authtoken);
      res.json({ authToken: authtoken });
    } catch (error) {
      // console.error(error.message);
      res.status(500).send("internal server error occured");
    }
  }
);

//Route 2 :authenticate a user  using post '/api/auth/login'. no login required
router.post(
  "/login",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "password can not be blank"),
  ],
  async (req, res) => {
    //if their are any errors , return bad request and the error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body; //destructuring
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ error: "plese try to login with valid credentials" });
      }

      const passwordcompare = await bcrypt.compare(password, user.password);
      if (!passwordcompare) {
        return res
          .status(400)
          .json({ error: "please try to login with correct credentials" });
      }
      const data = {
        id: user.id,
      };
      const authtoken = jwt.sign(data, JWT_SECRET);
      console.log(authtoken);
      res.json({ authToken: authtoken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("internal server error occured");
    }
  }
);

//Route 3 :get loggin user details using :  '/api/auth/getuser'. login required
router.get("/getuser", fetchUser, async (req, res) => {
  try {
    const userid = req.user.id;
    console.log(userid)
    const user = await User.findById(userid).select("-password");
    res.send(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("internal server error occured");
  }
});

module.exports = router;

// .then(user => res.json(user))
// .catch(err => {
//     res.json({error:'Please enter a valid unique email',message:err.message})
// })
