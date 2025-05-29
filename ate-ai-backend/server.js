const express = require("express");
const cors = require("cors");
const speechRoute = require("./speech");
const mabentaRoutes = require("./mabenta");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use("/", speechRoute);
app.use("/api", mabentaRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
