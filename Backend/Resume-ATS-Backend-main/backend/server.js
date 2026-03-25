// require('dotenv').config();

// import express from "express";
// import dotenv from "dotenv";
// import mongoose from "mongoose";
// import cors from "cors";
// import authRoutes from "./routes/authRoutes.js";
// import resumeRoutes from "./routes/resumeRoutes.js";

// dotenv.config();

// const app = express();
// app.use(cors({ 
//     origin: 'http://localhost:5173', 
//     credentials: true 
// }));
// app.use(express.json());
// // app.use(cors());

// // MongoDB Connection
// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log("MongoDB connected"))
//   .catch(err => console.error("MongoDB error:", err.message));

// // Routes
// app.use("/auth", authRoutes);
// app.use("/resume", resumeRoutes);

// app.get("/", (req, res) => res.send("API Running"));

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import resumeRoutes from "./routes/resumeRoutes.js";

// 1. Load the environment variables FIRST
dotenv.config();

console.log("THE MONGO URI IS:", process.env.MONGO_URI)

const app = express();

// 2. Middleware
app.use(cors({ 
    origin: 'http://localhost:5173', 
    credentials: true 
}));
app.use(express.json());

// // 3. MongoDB Connection
// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log("MongoDB connected successfully!"))
//   .catch(err => console.error("MongoDB error:", err.message));

// Add the { family: 4 } option!
mongoose.connect(process.env.MONGO_URI, { family: 4 })
  .then(() => console.log("MongoDB connected successfully!"))
  .catch(err => console.error("MongoDB error:", err.message));

// 4. Routes
app.use("/auth", authRoutes);
app.use("/resume", resumeRoutes);

app.get("/", (req, res) => res.send("API Running"));

// 5. Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));