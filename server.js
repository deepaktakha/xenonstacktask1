// Importing required modules
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

// Enable CORS and JSON parsing
app.use(cors());
app.use(express.json());

// Serve static files (like your frontend HTML, CSS, JS)
app.use(express.static("public"));  // Make sure your HTML, CSS, and JS files are in the "public" folder

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/urbanProperties")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

  // Schema and Model
const UserSchema = new mongoose.Schema({ email: String, password: String });
const PropertySchema = new mongoose.Schema({ title: String, price: String, location: String });
const User = mongoose.model("User", UserSchema);
const Property = mongoose.model("Property", PropertySchema);
// Root Route (homepage)
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html"); 
});

// Routes for login, properties, and recommendations
// Login route
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if (user) {
    res.json({ message: "Login successful" });  // Send a success message
  } else {
    res.status(401).json({ message: "Invalid credentials" });  // Send error message
  }
});


app.get("/properties", async (req, res) => {
  const properties = await Property.find();
  res.json(properties);
});
// Route to get property details by ID
app.get("/property/:id", async (req, res) => {
  const propertyId = req.params.id;
  try {
    const property = await Property.findById(propertyId);
    if (property) {
      res.json(property); // Send property details as JSON
    } else {
      res.status(404).json({ message: "Property not found" });
    }
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});


app.get("/recommendations", (req, res) => {
  res.json([
    { title: "Luxury Apartment", price: "$2000", location: "Downtown" },
    { title: "Affordable Studio", price: "$900", location: "Suburb" }
  ]);
});

// Start server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
