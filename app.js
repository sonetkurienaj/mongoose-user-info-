const express = require("express");
const mongoose = require("mongoose");

const userRouter = require("./routers/user.router");
const tripRouter = require("./routers/trips.router");
const expensesRouter = require("./routers/expenses.router");
const app = express();

app.use(express.json());
app.use("/users", userRouter);
app.use("/trips", tripRouter);
app.use("/expenses", expensesRouter);

mongoose
  .connect(
    "mongodb://mongo:OcSlLwSWEgkRNL81Xsbj@containers-us-west-69.railway.app:7669",
    { useNewUrlParser: true }
  )
  .then(() => {
    app.listen(3000, () => {
      console.log("Server has started!");
    });
  });
