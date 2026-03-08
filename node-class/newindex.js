import express from "express";

const app = express();

app.use(express.json());

app.get("/menu", (req, res) =>
  res.json({
    items: ["thali", "biryani"],
  }),
);

app.post("/oredr", myfun);

const myfun = (req, res) => {
  res.status(200).json({
    status: "received",
    order: req.body,
  });
};
