const express = require("express");
const path = require("path");

const app = express();

// allow JSON (for future ESP32 POST)
app.use(express.json());

// serve your mapa.html
app.use(express.static(__dirname));

// test API
app.get("/api/telemetry", (req, res) => {
  res.json({
    lat: -42.77,
    lon: -65.04
  });
});

// (optional) receive data later
app.post("/api/telemetry", (req, res) => {
  console.log(req.body);
  res.sendStatus(200);
});

// IMPORTANT for deployment
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Running on port", PORT);
});
