document.addEventListener("DOMContentLoaded", function() {
    // Fonctionnalité pour la page des véhicules disponibles
    if (document.getElementById("vehicles-list")) {
        fetch('/api/vehicles')
            .then(response => response.json())
            .then(data => {
                const vehiclesList = document.getElementById("vehicles-list");
                data.forEach(vehicle => {
                    const div = document.createElement("div");
                    div.textContent = `Véhicule : ${vehicle.model}, Charge : ${vehicle.charge}%, Autonomie : ${vehicle.autonomy} km`;
                    vehiclesList.appendChild(div);
                });
            });

        // Écoute du clic sur le bouton de réservation pour chaque véhicule
        const reserveButtons = document.querySelectorAll('.reserve-button');
        reserveButtons.forEach(button => {
            button.addEventListener('click', function() {
                window.location.href = 'reservation.html'; // Redirige vers reservation.html
            });
        });
    }

    // Fonctionnalité pour la page de réservation
    if (document.getElementById("reserve-button")) {
        document.getElementById("reserve-button").addEventListener('click', function() {
            window.location.href = 'confirmation.html'; // Redirige vers confirmation.html
        });
    }

    // Écoute des clics sur les boutons des créneaux horaires dans confirmation.html
    if (document.querySelector('.time-button')) {
        const timeButtons = document.querySelectorAll('.time-button');
        timeButtons.forEach(button => {
            button.addEventListener('click', function() {
                alert(`Réservation confirmée pour le créneau ${button.textContent}`);
                window.location.href = 'vehicles.html'; // Redirige vers vehicles.html
            });
        });
    }

    // Écoute du clic pour le bouton commencer un trajet dans stats.html
    const backButton = document.getElementById("back-button");
    if (backButton) {
        backButton.addEventListener('click', function() {
            window.location.href = 'vehicles.html'; // Retourne à la page des véhicules
        });
    }

    const profileButton = document.getElementById("profile-button");
    if (profileButton) {
        profileButton.addEventListener('click', function() {
            window.location.href = 'profil.html'; // Redirige vers profile.html
        });
    }

    // Écoute du clic pour le bouton Commencer l'expérience dans experience.html
    const startButton = document.getElementById("start-button");
    if (startButton) {
        startButton.addEventListener('click', function() {
            window.location.href = 'stats.html'; // Redirige vers stats.html
        });
    }

    // Écoute du clic pour le bouton retour dans vehicle.html
    const backtostats = document.getElementById("back-to-stats");
    if (backtostats) {
        backtostats.addEventListener('click', function() {
            window.location.href = 'stats.html'; // Redirige vers stats.html
        });
    }

    // Écoute du clic pour le bouton reserver dans vehicle.html
    const reservButton = document.getElementById("go-reservation");
    if (reservButton) {
        reservButton.addEventListener('click', function() {
            window.location.href = 'reservation.html'; // Redirige vers reservation.html
        });
    }
    // Écoute du clic pour le bouton Retour dans stats.html
    const retourButton = document.getElementById("bouton-retour");
    if (retourButton) {
        retourButton.addEventListener('click', function() {
            window.location.href = 'stats.html'; // Redirige vers stats.html
        });
    }

    // Écoute du clic pour le bouton reservation dans reservationTesla.html
    const confirmButton = document.getElementById("reserve-button-tes");
    if (confirmButton) {
        confirmButton.addEventListener('click', function() {
            window.location.href = 'confirmationTesla.html'; // Redirige vers confirmation Tesla.html
        });
    }

    // Écoute du clic pour le bouton confirmation dans vehicle.html
     const reservaButton = document.getElementById("go-reservation-tes");
     if (reservaButton) {
         reservaButton.addEventListener('click', function() {
             window.location.href = 'reservationTesla.html'; // Redirige vers confirmation Tesla.html
         });
     }

    // bouton retour dans confirm Tesla
     const retourButtonT = document.getElementById("back-button-tes");
     if (retourButtonT) {
         retourButtonT.addEventListener('click', function() {
             window.location.href = 'vehicles.html'; // Redirige vers confirmation vehicle.html
         });
     }

      // bouton retour dans confirm Twizy
      const retourButtonTw = document.getElementById("back-button-twi");
      if (retourButtonTw) {
          retourButtonTw.addEventListener('click', function() {
              window.location.href = 'vehicles.html'; // Redirige vers confirmation vehicle.html
          });
      }
});