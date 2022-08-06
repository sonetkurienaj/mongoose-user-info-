const express = require("express");
var ObjectId = require("mongodb").ObjectId;
const { users } = require("../models/users");

const router = express.Router();

router.post("/", async (req, res) => {
  //const name = req.body.name;
  const result = await users.create({
    name: req.body.name,
    email: req.body.email,
    number: req.body.number,
    age: req.body.age,
  });
  console.log(result);
  res.status(200).json({ ok: true });
});

//get all users
router.get("/", async (req, res) => {
  const data = await users.find();
  res.status(200).json({ data });
});

//get by id
router.get("/:id", async (req, res) => {
  const result = await users.find({
    _id: ObjectId(req.params.id),
  });

  res.status(200).json({ user: result });
});

//update user
router.put("/:id", async (req, res) => {
  const result = await users.updateOne(
    {
      _id: ObjectId(req.params.id),
    },
    {
      $set: {
        name: req.body.name,
        email: req.body.email,
        number: req.body.number,
        age: req.body.age,
      },
    }
  );
  res.status(200).json({ user: result });
});
//delete
router.delete("/:id", async (req, res) => {
  const result = await users.deleteOne({
    _id: ObjectId(req.params.id),
  });
  res.status(200).json({ user: result });
});

module.exports = router;
