// const { db } = require("../mongoose_models/Googleuser");
const { Googleuser } = require("../mongoose_models/Googleuser");


const gfetchuser = async (req, res, next) => {
    //get the user from the jwt token and add id to req object
    const token = req.header("Authorization");
    if (!token) {
        res.status(401).send({ error: "please authenticate using a valid token" });
    }
    //   try {
    // const dbase = db.googleusers.find({google_credentia:token})
    console.log("Before trying to find user in the database");
    const dbase = await Googleuser?.find({ google_credential : "eyJhbGciOiJSUzI1NiIsImtpZCI6IjQ1NmI1MmM4MWUzNmZlYWQyNTkyMzFhNjk0N2UwNDBlMDNlYTEyNjIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI5MDU5NTgyNjY4MDQtcjhrMXZrc3Z2dGQybmg4MmVncmM0Ym5zOWc4ajE1MDUuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI5MDU5NTgyNjY4MDQtcjhrMXZrc3Z2dGQybmg4MmVncmM0Ym5zOWc4ajE1MDUuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMTcwNTA3MTAyOTk5ODU2ODQwNDEiLCJlbWFpbCI6ImNoYWtyYXZhcnRoaW1pdGh1bjYyQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJuYmYiOjE3MDQyMTM4ODMsIm5hbWUiOiJNaXRodW4gUyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NJUkRYckFVd1FMSU9WY1dMWlJaMGZEbF9iZ2lOUVFKSFBiVXRrOG1tckE2Zz1zOTYtYyIsImdpdmVuX25hbWUiOiJNaXRodW4iLCJmYW1pbHlfbmFtZSI6IlMiLCJsb2NhbGUiOiJlbi1HQiIsImlhdCI6MTcwNDIxNDE4MywiZXhwIjoxNzA0MjE3NzgzLCJqdGkiOiJlMGE2MjZjMzEwMDBjOTY1ZDMwZTE3OTBlYmVhMjg0YjMxMmFiZDg2In0.hB23IkXFllPAEu0SA7uvn5HkvS5eVdxrN4oZVvJ9d4enkjHT6u_HuAgfrqjkJ6ET0TmLnGA-BCICv7vwF8Zqcb9RRWzLwSpMrJ181WslWrJncnoui_Zf7wNY67esL7WPvyQl9aFmAuousUfqOeuGQKyU4AptqLPZshiZr7Y6_RkbULBOD1dsGewsGbSrIxLvLfO6ku-YxmL8gVNBkwDyLdEy0NO_LYsBNL4pXHhRkzZUjMq6wRjb1t5ZB8wkdhaMIDi9GnW_XrCSjpDb1vR0vRzwt0YCns0VuUbZBmPDEsY6rFxyZqtA5RyReOgAaXAq9svlIW5k1ejOlLLd9MeX9g" });
    console.log("After trying to find user in the database");
    console.log(dbase, 'from dbase')
    // const data =  console.log("this is data",token)
    const data = dbase?._id
    req.user = data;      //this data object is in auth.js inside route2 were ur creating an auth-token for the first time
    next();



    // const data =  console.log("this is data",token)
    // req.user = data;      //this data object is in auth.js inside route2 were ur creating an auth-token for the first time
    // next();


    //   } catch (error) {
    //     res.status(401).send({ error: "plz authenticate using a valid token" });
    //   }
};

module.exports = gfetchuser;