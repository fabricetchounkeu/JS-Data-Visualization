document.addEventListener('DOMContentLoaded', () => {

    // Sélectionner le tableau 1
    let table = document.getElementById('table1');
    // Sélectionner les lignes du tableau tableau
    let rows = table.querySelectorAll('tbody tr');
    // Extraire les données du tableau
    let labels = [];
    let data = [];

      rows.forEach(row => {
        let cells = row.querySelectorAll('td');

        cells.forEach((element, index) => {
            if (index == 0) {
                labels.push(element.innerText); // Première cellule pour les étiquettes
            }
            if (index == 1) {
                data.push(parseFloat(element.innerText)); // Deuxième cellule pour les données
            }
            
        });
    });

    // Sélectionner le tableau 2
    let table2 = document.getElementById('table2');
    // Sélectionner les lignes du tableau tableau
    let rows2 = table2.querySelectorAll('tbody tr');
    // Extraire les données du tableau
    let labels2 = [];
    let data2 = [];

      rows2.forEach(row => {
        let cells2 = row.querySelectorAll('td');

        cells2.forEach((element, index) => {
            if (index == 0) {
                labels2.push(element.innerText); // Première cellule pour les étiquettes
            }
            if (index == 1) {
                data2.push(parseFloat(element.innerText)); // Deuxième cellule pour les données
            }
            
        });
    });

      // Préparer les données pour 1er graphique
      let dataForChart = {
        labels: labels,
        datasets: [{
            label: 'Crimes',
            data: data,
            fill: false,
            borderColor: 'blue',
            tension: 0.1
        }]
      };

        // Créer le 1er graphique avec Chart.js
        let ctx = document.getElementById('myChart').getContext('2d');
        new Chart(ctx, {
            type: 'line', 
            data: dataForChart,
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

      // Préparer les données pour 2eme graphique
      let dataForChart2 = {
        labels: labels2,
        datasets: [{
            label: 'Homicides',
            data: data2,
            fill: false,
            borderColor: 'blue',
            tension: 0.1
        }]
      };

        // Créer le 2eme graphique avec Chart.js
        let ctx2 = document.getElementById('myChart2').getContext('2d');
        new Chart(ctx2, {
            type: 'bar', 
            data: dataForChart2,
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    });