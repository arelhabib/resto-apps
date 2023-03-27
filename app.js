require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

const routes = require("./routes");
app.use(routes);

//cek koneksi ke db dulu baru gas
connectDB.sequelize
  .authenticate()
  .then(() => {
    app.listen(port, () => {
      console.log(`App is running on port ${port}`);
    });
  })
  .catch((err) =>
    console.error("Connecting to database failed succesfully:\n", err.parent)
  );
