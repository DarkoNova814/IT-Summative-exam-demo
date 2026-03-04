// Dashboard: Chart.js demo for water usage
const ctx = document.getElementById('usageChart').getContext('2d');

const usageChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
        datasets: [{
            label: 'Water Usage (Liters)',
            data: [110, 130, 120, 125, 115, 140, 120],
            backgroundColor: 'rgba(0, 119, 182, 0.2)',
            borderColor: '#0077b6',
            borderWidth: 2,
            fill: true,
            tension: 0.3
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: false }
        }
    }
});