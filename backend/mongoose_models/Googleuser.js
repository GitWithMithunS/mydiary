const mongoose = require("mongoose");
const { Schema } = mongoose;
const googleschema = new Schema({
  google_credential:{
    type:String,
    required:true
  }
});

const GoogleUser = mongoose.model("GoogleUser", googleschema);
// User.createIndexes()
module.exports = GoogleUser;
