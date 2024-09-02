const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { logger } = require("./middlewares/logger");
dotenv.config();

const userRoutes = require("./routes/user-route");
const categoryRoutes = require("./routes/category-route");
const recordRoutes = require("./routes/record-route");

const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(cors());
app.use(logger());

app.use("");
app.use("/users", userRoutes);
app.use("/categories", categoryRoutes);
app.use("/records", recordRoutes);

app.listen(PORT, () => {
  console.log("Amjilttai aslaa", PORT);
});
