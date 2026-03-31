const express = require("express");
const app = express();

// serve static files
app.use(express.static(__dirname));

// ROOT ROUTE (THIS FIXES YOUR ERROR)
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/mapa.html");
});

// API
app.get("/api/telemetry", (req, res) => {
  res.json({
    lat: -42.77,
    lon: -65.04
  });
});

// port (important for Render)
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Running on port", PORT);
});
