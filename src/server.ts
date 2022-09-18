import express from "express";

const app = express();

app.get("/", (request, response) => {
  return response.json({ messgae: "Hello World" });
});
app.listen(3333, () => {
  console.log("server is running");
});
