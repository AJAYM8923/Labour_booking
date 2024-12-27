const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Worker = require("../models/Worker");
const Booking = require("../models/Booking");
const Contact = require("../models/Contact");

/* GET home page. */
router.get("/", async (req, res, next) => {
  try {
    const workers = await Worker.find();
    res.render("index", { title: "Labour Booking", workers });
  } catch (err) {
    next(err);
  }
});

/* GET admin page. */
router.get("/admin", (req, res) => {
  res.render("admin", { title: "Admin Page" });
});

/* POST admin page to handle form submission */
router.post("/admin", async (req, res) => {
  const { name, number, rent } = req.body;

  try {
    const worker = new Worker({ name, number, rent });
    await worker.save();
    res.redirect("/");
  } catch (err) {
    res.status(500).send("Error saving worker");
  }
});
/* GET booking page */
router.get("/booking", (req, res) => {
  res.render("booking", { title: "Booking Page" });
});

/* GET contact page */
router.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact Us" });
});

/* POST booking form to handle form submission */
router.post("/booking", async (req, res) => {
  const { name, number, address, place, date, requiredWork } = req.body;

  try {
    const booking = new Booking({
      name,
      number,
      address,
      place,
      date,
      requiredWork,
    });
    await booking.save();
    res.redirect("/?success=true");
  } catch (err) {
    res.status(500).send("Error saving booking");
  }
});
// POST contact form to handle form submission
router.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const contact = new Contact({ name, email, message });
    await contact.save();
    res.redirect("/");
  } catch (err) {
    res.status(500).send("Error saving contact form data");
  }
});



module.exports = router;
