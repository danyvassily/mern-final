import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";
import authRoute from "./routes/auth.route.js";

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

// configuration du port
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Le serveur est en marche sur le port ${PORT}`);
});

// configuration des routes
app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
