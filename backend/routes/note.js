const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const fetchUser = require("../Middleware/Fetchuserdata");
const Note = require("../mongoose_models/Notes");
const fetchuser = require("../Middleware/Fetchuserdata");

//Route 1 :get all notes of user using : GET '/api/note'. login required
router.get("/fetchallnotes", fetchUser, async (req, res) => {
  try {
    const Notes = await Note.find({ user: req.user });
    res.json(Notes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("internal server error occured");
  }
});

//Route 2 :add a new note  using : GET '/api/note'. login required
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

      const note = new Note({
        title, description, tag, user: req.user,
      });
      const savednote = await note.save();

      res.json(savednote);

    } catch (error) {
      console.error(error.message);
      res.status(500).send("internal server error occured");
    }
  }
);

//Route 3 :update an existing note  using : PUT '/api/note'. login required
router.put('/updatenote/:id', fetchuser, async (req, res) => {
  const { title, description, tag } = req.body

  try {
    
    //create a newnote object
    const newNote = {}
    if (title) { newNote.title = title }
    if (description) { newNote.description = description }
    if (tag) { newNote.tag = tag }
  
    //find the note to be updated and update it
    let note = await Note.findById(req.params.id)
    console.log(note)
    if (!note) { return res.status(404).send("Note is not Found") }
    console.log(req.user)
    if (note.user.toString() !== req.user) {
      return res.status(401).send('You are not allowed')
    }
  
    note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })
    res.json({ note })

  } catch (error) {
    console.error(error.message);
      res.status(500).send("internal server error occured");
  }

})

//Route 4 :delete an existing note  using : DELETE '/api/note'. login required
router.delete('/deletnote/:id', fetchuser, async (req, res) => {
  const { title, description, tag } = req.body

  try {
    
    //find the note to be deleted and delete it
    let note = await Note.findById(req.params.id)
    if (!note) { return res.status(404).send("Note is not Found") }
    console.log(note)
    //allow deletion only if the user owns this note
    if (note.user.toString() !== req.user) {
      return res.status(401).send('You are not allowed')
    }
  
    note = await Note.findByIdAndDelete(req.params.id)
    res.json({'Success': "Note has been deleted successfully" , note : note })

  } catch (error) {
    console.error(error.message);
      res.status(500).send("internal server error occured");
  }

})

module.exports = router;
