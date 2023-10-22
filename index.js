const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.get("/helloworld", (req, res, next) => {
  res.status(200).json({
    success: true,
    data: {
      message: "Hello from the people of earth🌍",
    },
  });
});

app.get("/greetings", (req, res, next) => {
  res.status(200).json({
    success: true,
    data: {
      message: "Hello from the other side 👾",
    },
  });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
