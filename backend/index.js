const express = require("express");
const cors = require("cors");
require("dotenv").config();

const uploadRoute = require("./routes/upload");
const askRoute = require("./routes/ask");

const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use("/upload", uploadRoute);
app.use("/ask", askRoute);

app.get("/", (req, res) => {
  res.json({ message: "Backend running" });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});