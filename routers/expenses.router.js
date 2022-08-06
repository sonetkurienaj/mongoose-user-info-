const express = require("express");
var ObjectId = require("mongodb").ObjectId;
const { expenses } = require("../models/expenses");

const router = express.Router();

router.post("/", async (req, res) => {
  const result = await expenses.create({
    type: req.body.type,
    amount: req.body.amount,
    date: req.body.date,
    trip: req.body.trip,
  });
  res.status(200).json({ expenses: result });
});
//get all users
router.get("/", async (req, res) => {
  const data = await expenses.find();
  res.status(200).json({ data });
});

//get by id
router.get("/:id", async (req, res) => {
  const result = await expenses
    .findOne({
      _id: ObjectId(req.params.id),
    })
    .populate("trip")
    .populate("trip.user");

  res.status(200).json({ expenses: result });
});

//update user
router.put("/:id", async (req, res) => {
  const result = await expenses.updateOne(
    {
      _id: ObjectId(req.params.id),
    },
    {
      $set: {
        type: req.body.type,
        date: req.body.date,
        amount: req.body.amount,
      },
    }
  );
  res.status(200).json({ expenses: result });
});

//delete
router.delete("/:id", async (req, res) => {
  const result = await expenses.deleteOne({
    _id: ObjectId(req.params.id),
  });
  res.status(200).json({ expenses: result });
});

module.exports = router;
