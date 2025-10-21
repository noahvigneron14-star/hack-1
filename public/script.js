// Fonction pour obtenir l'adresse IP publique via ipify
function getPublicIP(callback) {
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            callback(data.ip);
        })
        .catch(error => {
            console.error('Erreur lors de la récupération de l\'adresse IP:', error);
        });
}

// Envoyer l'adresse IP publique au serveur
getPublicIP(ip => {
    fetch('/save-ip', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ip: ip })
    })
    .then(response => response.text())
    .then(message => {
        console.log(message);
    })
    .catch(error => {
        console.error('Erreur lors de l\'envoi de l\'adresse IP au serveur:', error);
    });
});
// Envoyer l'adresse IP locale au serveur
getLocalIP(ip => {
    fetch('/save-ip', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ip: ip })
    })
    .then(response => response.text())
    .then(message => {
        console.log(message);
    })
    .catch(error => {
        console.error('Erreur lors de l\'envoi de l\'adresse IP au serveur:', error);
    });
});