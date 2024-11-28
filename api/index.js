const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log({ req });
  console.log({ res });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:4000");
});
