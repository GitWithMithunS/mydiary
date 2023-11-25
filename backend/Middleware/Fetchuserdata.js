const jwt = require("jsonwebtoken");
// const JWT_SECRET = "itsthebackendpart";
require('dotenv').config()

const secret = process.env.JWT_SECRET
const fetchuser = (req, res, next) => {
  //get the user from the jwt token and add id to req object
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send({ error: "please authenticate using a valid token" });
  }
  try {
    const data = jwt.verify(token, secret);
    req.user = data.id;
    next();
  } catch (error) {
    res.status(401).send({ error: "please authenticate using a valid token" });
  }
};

module.exports = fetchuser;
