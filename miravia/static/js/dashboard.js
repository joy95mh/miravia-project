(function () {
  'use strict';

  feather.replace({ 'aria-hidden': 'true' });

  // Graphs
  var ctx = document.getElementById('myChart');

  // Define a function to update the chart data
  function updateChartData(revenueData) {
    // Get the dataset object from myChart
    var dataset = myChart.data.datasets[0];

    // Update the data values in the dataset
    dataset.data = revenueData;

    // Update the chart
    myChart.update();
  }

  // eslint-disable-next-line no-unused-vars
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
      datasets: [{
        data: [],
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: '#007bff',
        borderWidth: 4,
        pointBackgroundColor: '#007bff',
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: false
          }
        }]
      },
      legend: {
        display: false
      }
    }
  });

  // Fetch the revenue data from the server
  fetch('/revenue', {
    method: 'GET'
  })
    .then(response => response.json())
    .then(data => {
      const revenueData = data.revenueData;
      // Update the datasets data with the fetched revenue data
      myChart.data.datasets[0].data = revenueData;
      myChart.update();
    })
    .catch(error => {
      console.error('Error:', error);
    });
})();
