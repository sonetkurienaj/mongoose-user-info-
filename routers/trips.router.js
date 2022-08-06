const express = require("express");
var ObjectId = require("mongodb").ObjectId;
const { trips } = require("../models/trips");

const router = express.Router();

router.post("/", async (req, res) => {
  console.log(trips);
  const result = await trips.create({
    name: req.body.name,
    desc: req.body.desc,
    date: req.body.date,
    user: req.body.user_id,
  });
  res.status(200).json({ trips: result });
});
//get all users
router.get("/", async (req, res) => {
  const data = await trips.find();
  res.status(200).json({ data });
});

//get by id
router.get("/:id", async (req, res) => {
  const result = await trips
    .find({
      _id: ObjectId(req.params.id),
    })
    .populate("user");

  res.status(200).json({ trips: result });
});

//update user
router.put("/:id", async (req, res) => {
  const result = await trips.updateOne(
    {
      _id: ObjectId(req.params.id),
    },
    {
      $set: {
        name: req.body.name,
        desc: req.body.desc,
        date: req.body.date,
      },
    }
  );
  res.status(200).json({ trips: result });
});

//delete
router.delete("/:id", async (req, res) => {
  const result = await trips.deleteOne({
    _id: ObjectId(req.params.id),
  });
  res.status(200).json({ trips: result });
});

module.exports = router;
