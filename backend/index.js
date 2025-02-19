require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const contactRoutes = require("./routes/ContactRoutes");
const morgan = require("morgan");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(morgan("combined"))

// Routes
app.use("/api/contacts", contactRoutes);

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Serveur en marche sur le port ${PORT}`));