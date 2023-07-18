const express = require("express");
const cors = require("cors");
require("dotenv").config();
const routes = require("./routes"); // Import your routes
const { sequelize } = require("./models");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

// Middlewares
app.use(express.json()); // for parsing application/json

sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected...");
    // Only start listening when database connection is established
    app.use("/", routes); // Set up your routes
    app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
  })
  .catch((err) => console.log("Error: " + err));
