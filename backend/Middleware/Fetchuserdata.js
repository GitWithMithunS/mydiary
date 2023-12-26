const jwt = require("jsonwebtoken");
require('dotenv').config()

// const secret = process.env.JWT_SECRET
const secret = "itsthebackendpart"
const fetchuser = (req, res, next) => {
  //get the user from the jwt token and add id to req object
  const token = req.header("Authorization");
  if (!token) {
    res.status(401).send({ error: "please authenticate using a valid token" });
  }
  try {
    const data = jwt.verify(token, secret);
    req.user = data.id;      //this data object is in auth.js inside route2 were ur creating a n auth-token for the first time
    next();
  } catch (error) {
    res.status(401).send({ error: "please authenticate using a valid token" });
  }
};

module.exports = fetchuser;
