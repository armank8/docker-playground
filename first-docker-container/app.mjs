import connectToDatabase from "./helpers.mjs";
import express from"express";
const app = express();

const port = 5000;

app.get("/", (req, res) => {
  res.send("<h2>Welcome to Docker learning</h2>");
});

await connectToDatabase();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
