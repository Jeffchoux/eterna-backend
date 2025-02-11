const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config');  // Correction import DB
const userRoutes = require('./routes/userRoutes');

dotenv.config();
const app = express();

// Middleware
app.use(express.json());  // Permet de parser les JSON envoyés dans les requêtes

// Connexion à MongoDB
connectDB();

// Routes
app.use('/api', userRoutes); // Correction ici

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Serveur lancé sur le port ${PORT}`));
