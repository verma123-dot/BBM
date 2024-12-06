const express = require("express");
const router = express.Router();
const Donor = require("../models/Donor");

// Get all donors
router.get("/", async (req, res) => {
  try {
    const donors = await Donor.find();
    res.json(donors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a new donor
router.post("/", async (req, res) => {
  try {
    const { name, bloodGroup, contact } = req.body;
    const newDonor = new Donor({ name, bloodGroup, contact });
    await newDonor.save();
    res.status(201).json(newDonor);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete a donor
router.delete("/:id", async (req, res) => {
  try {
    await Donor.findByIdAndDelete(req.params.id);
    res.json({ message: "Donor deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
