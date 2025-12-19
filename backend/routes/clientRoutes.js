const express = require("express");
const router = express.Router();
const Client = require("../models/Client");

// GET all clients
router.get("/", async (req, res) => {
  const clients = await Client.find();
  res.json(clients);
});

// ADD client
router.post("/", async (req, res) => {
  try {
    const client = new Client({
      name: req.body.name,
      designation: req.body.designation,
      description: req.body.description,
      image: req.body.image,
    });

    await client.save();
    res.json(client);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Client not added" });
  }
});

module.exports = router;


