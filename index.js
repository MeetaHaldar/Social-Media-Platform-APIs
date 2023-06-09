require("dotenv").config();
const express = require("express");
const { default: mongoose } = require("mongoose");
const PORT = process.env.PORT || 4000;
const Auth = require("./Routes/user");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("hello there");
});
app.use("/api", Auth);
mongoose
  .connect(process.env.MONGOSTRING, { useNewUrlParser: true })
  .then(() => {
    console.log("connected to mongodb");
    app.listen(PORT, () => {
      console.log(`server is running on port ${PORT}`);
    });
  });
