const express = require('express');
const app = express();
const port = 3000;

// Middleware pour servir les fichiers statiques
app.use(express.static('public'));
app.use(express.json());

// Exemple de données de véhicules
app.get('/api/vehicles', (req, res) => {
    const vehicles = [
        { id: 1, model: "Voiture A", charge: 80, autonomy: 20 },
        { id: 2, model: "Voiture B", charge: 16, autonomy: 13 }
    ];
    res.json(vehicles);
});

// Route pour la page d'accueil (optionnelle)
app.get('/', (req, res) => {
    res.redirect('experience.html'); // Redirige vers stats.html
});

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});