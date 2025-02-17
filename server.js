const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database Connection
const connectDB = require("./config/db");
connectDB();

// Routes
const roomInquiryRoutes = require("./routes/roomInquiryRoutes");
const accommodation = require("./routes/accommodationRoutes");
const cleaning = require("./routes/cleaningRoutes");
const medical = require("./routes/medicalRoutes");
const clearance = require("./routes/clearanceRoutes");
const mentoring = require("./routes/mentoringRoutes");
const leave = require("./routes/leaveRoutes");
const user = require("./routes/userRoutes");

app.use("/api/inquiries", roomInquiryRoutes);
app.use("/api/accommodation", accommodation);
app.use("/api/cleaning", cleaning);
app.use("/api/medical", medical);
app.use("/api/clearance", clearance);
app.use("/api/mentoring", mentoring);
app.use("/api/leave", leave);
app.use("/api/user", user);

// Start the Server
const server = app.listen(port, () =>
    console.log(`Server running on port ${port} 🔥`)
);