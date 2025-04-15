const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  category: String,
  name: String,
  price: Number,
  year: Number,
  mileage: Number,
  location: String,
  image: String,
  fuelType: String,
  transmission: String,
  condition: String,
  description: String,  // ✅ New field
  features: [String],   // ✅ New field (array of features)
  seller: {             // ✅ New field (object for seller info)
    name: String,
    phone: String,
    email: String
  },
});

const Car = mongoose.model("Car", carSchema);
module.exports = Car;
