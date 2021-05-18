const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || "3000";

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});

app.use(express.static("public"));
// app.use(express.json({ limit: "1mb" }));

// app.get("/", (req, res) => {
//   res.status(200).send("Hello");
// });
