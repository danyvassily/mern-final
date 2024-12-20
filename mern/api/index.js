import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";
import authRoute from "./routes/auth.route.js";
import cookieParser from "cookie-parser";

// configuration de dotenv
dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connecté à MongoDB avec succès");
  })
  .catch((err) => {
    console.error("Erreur de connexion à MongoDB:", err);
    process.exit(1);
  });

// configuration de l'application express
const app = express();

// middleware pour les requettes entrante en json
app.use(express.json());
app.use(cookieParser());
// configuration du port
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Le serveur est en marche sur le port ${PORT}`);
});

// configuration des routes
app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);

// middleware pour les erreurs
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Erreur interne du serveur";
  res.status(statusCode).json({success: false, statusCode, message});
});