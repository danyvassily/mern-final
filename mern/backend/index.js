import express from 'express';


const app = express();


app.listen(3000, () => {
  console.log('Le serveur est en marche sur le port 3000');
});