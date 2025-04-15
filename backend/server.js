require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const Car = require("./models/carmodel"); // Import Car model

const app = express();
const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI;

// ✅ Middleware
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads")); // Serve static images

// ✅ Check if MONGO_URI is defined
if (!MONGO_URI) {
  console.error("❌ ERROR: MONGO_URI is not defined. Check your .env file.");
  process.exit(1);
}

// ✅ Connect to MongoDB
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => {
    console.error("❌ MongoDB Connection Failed:", err.message);
    process.exit(1);
  });

// ✅ API: Get All Cars
app.get("/api/cars", async (req, res) => {
  try {
    const { search, price_gte, price_lte, year_gte, year_lte, category } = req.query;

    let query = {};

    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { category: { $regex: search, $options: "i" } },
        { location: { $regex: search, $options: "i" } }
      ];
    }

    if (category) {
      query.category = category;
    }

    if (price_gte || price_lte) {
      query.price = {};
      if (price_gte) query.price.$gte = parseInt(price_gte);
      if (price_lte) query.price.$lte = parseInt(price_lte);
    }

    if (year_gte || year_lte) {
      query.year = {};
      if (year_gte) query.year.$gte = parseInt(year_gte);
      if (year_lte) query.year.$lte = parseInt(year_lte);
    }

    console.log("📌 Filter Query:", query); // Debugging

    const cars = await Car.find(query);
    res.json(cars);
  } catch (error) {
    console.error("❌ Error fetching cars:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// ✅ API: Add a New Car
app.post("/api/cars", async (req, res) => {
  try {
    const newCar = new Car(req.body);
    await newCar.save();
    res.status(201).json(newCar);
  } catch (error) {
    console.error("❌ Error adding car:", error);
    res.status(500).json({ error: "Failed to add car" });
  }
});

// ✅ API: Delete a Car
app.delete("/api/cars/:id", async (req, res) => {
  try {
    await Car.findByIdAndDelete(req.params.id);
    res.json({ message: "Car deleted successfully" });
  } catch (error) {
    console.error("❌ Error deleting car:", error);
    res.status(500).json({ error: "Failed to delete car" });
  }
});

// ✅ Root Route
app.get("/", (req, res) => {
  res.send("🚗 Welcome to WheelMate API!");
  console.log("📌 GET request received on /");
});

// ✅ Start the Server
app.listen(PORT, () => {
  console.log(`🚀 Server Running on Port ${PORT}`);
});
