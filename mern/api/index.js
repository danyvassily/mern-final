import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from './routes/user.route.js';
dotenv.config();

mongoose 
.connect(process.env.MONGO)
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch((error) => console.log('Connexion à MongoDB échouée !', error));

const app = express();


app.use('/api/user', userRoute);


app.listen(3000, () => {
  console.log('Le serveur est en marche sur le port 3000');
});