const express = require("express");
const router = express.Router();
const Contact = require("../../model/Contact");

router.get("/contacts", async (req, res) => {
  try {
    await Contact.find({}, (err, contacts) => {
      res.send(contacts);
    });
  } catch (error) {
    console.log(error);
  } finally {
    console.log("finish the request");
  }
});

router.post("/save_contact", async (req, res) => {
  console.log(req.body);
  let contact = new Contact(req.body);
  try {
    await contact.save().then(() => {
      res.send("save the contact");
    });
  } catch (error) {
    console.log(error);
  } finally {
    console.log("finish the post req");
  }
});

module.exports = router;
