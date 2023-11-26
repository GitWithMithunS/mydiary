const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const fetchUser = require("../Middleware/Fetchuserdata");
const notes = require("../mongoose_models/notes");

//Route 1 :get all notes of user using : GET '/api/note'. login required
router.get("/fetchallnotes", fetchUser, async (req, res) => {
  try {
    const Notes = await notes.find({ user: req.user.id });
    res.json(Notes);
  } catch (error) {
   console.error(error.message);
      res.status(500).send("internal server error occured");
  }
});

//Route 1 :add a new note  using : GET '/api/note'. login required
router.post(
  "/addnotes",
  fetchUser,
  [
    body("title", "Enter a title of atleast 3 characters").isLength({ min: 3 }),
    body("description", "description must be of atleast 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    try {
      
      const { title, description, tag } = req.body;
     
      //if their are any errors , return bad request and the error
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const note = new note({
        title,description,tag,user: req.user.id,
      });
      const savednote = await note.save();

      res.json(savednote);

    } catch (error) {
      console.error(error.message);
      res.status(500).send("internal server error occured");
    }
  }
);
module.exports = router;
