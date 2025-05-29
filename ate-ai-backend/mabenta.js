const express = require("express");
const router = express.Router();

// Sample trend mapping
const productTrends = {
  "UST Sampaloc, Manila": {
    Umuulan: [
      { product: "Instant Noodles", reason: "Masarap sa malamig" },
      { product: "Kape", reason: "Mainit at relaxing" },
    ],
    Maaraw: [
      { product: "Ice Candy", reason: "Mainit, pampalamig" },
      { product: "Tubig", reason: "Laging mabenta sa init" },
    ],
  },
  "Quezon City": {
    "tag-init": [
      { product: "Ice Candy", reason: "Mainit, pampalamig" },
      { product: "Tubig", reason: "Laging mabenta sa init" },
      { product: "Saging", reason: "Mura at mabilis ibenta" },
    ],
    "tag-ulan": [
      { product: "Instant Noodles", reason: "Masarap sa malamig" },
      { product: "Kape", reason: "Mainit at relaxing" },
    ],
  },
  Tondo: {
    "tag-init": [
      { product: "Juice", reason: "Maraming bata bumibili" },
      { product: "Ice Tubig", reason: "Mura at laging mabenta" },
      { product: "Banana cue", reason: "Pampalipas gutom" },
    ],
  },
};

// POST /recommend-trends
router.post("/recommend-trends", (req, res) => {
  console.log("Received /recommend-trends request with body:", req.body);

  const { location, weather, timeOfDay } = req.body;
  const season = weather;

  if (!location || !season) {
    console.log("Missing location or season:", { location, season });
    return res.status(400).json({ error: "Missing location or season" });
  }

  // Check if location exists in trends data
  if (!productTrends.hasOwnProperty(location)) {
    console.log("Location not found in trends data:", location);
    return res
      .status(404)
      .json({ message: "Location not found in trends data" });
  }

  const areaTrends = productTrends[location];
  const seasonalTrends = areaTrends[season];

  if (!seasonalTrends) {
    console.log("No trend data found for:", { location, season });
    return res
      .status(404)
      .json({ message: "No trend data available for that area/season." });
  }

  console.log("Returning recommendations:", seasonalTrends);
  res.json({
    recommendations: seasonalTrends.map(
      (item) => `${item.product} - ${item.reason}`
    ),
  });
});

module.exports = router;
