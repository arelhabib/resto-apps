require("dotenv").config();
const express = require("express");
const connectDB = require("./models");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({ message: "helloworld" });
});

//cek koneksi ke db dulu baru gas
connectDB.sequelize
  .authenticate()
  .then(() => {
    console.log("\nConnected to the database succesfully");
    app.listen(port, () => {
      console.log(`App is running on port ${port}`);
    });
  })
  .catch((err) =>
    console.error("Connecting to database failed succesfully:\n", err.parent)
  );
