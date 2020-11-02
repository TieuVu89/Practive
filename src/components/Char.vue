<template>
  <div>
              <chart :styles="{ position: 'relative', height: '180px', width: '100%'}" :options="options" :chart-data="datacollection"></chart>
  </div>
</template>
    <script>
    import Chart from "./../char.js";
    export default {
      components: {
        Chart
      },
      data() {
        return {
          datacollection: null,
           options: { //Chart.js options
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            stepSize: 500,
                            min: 0,
                            max: 1500                       
                        },
                        gridLines: {
                            display: true
                        }
                    }],
                    xAxes: [{
                        gridLines: {
                            display: false
                        }
                    }]
                },
                legend: {
                    display: false
                },
                responsive: true,
                maintainAspectRatio: false
            }
      
        };
      },
      mounted() {
        this.fillData();
      },
      methods: {
        fillData() {
          this.datacollection = {
            labels: [
              "4:00",
              "6:00",
              "8:00",
              "10:00",
              "12:00",
              "14:00",
              "16:00",
              "18:00",
              "20:00",
              "22:00",
              "00:00",
              "02:00"
            ],
            datasets: [
              {
                label: "Milliseconds",
                backgroundColor: "#94c8ff",
                data: [1000, 1100, 1200, 1000, 1100, 1500, 1200, 1300, 1200, 1400, 1500, 1300]
              }
            ]
          };
        },
      }
    };
    </script>
    <style>
    </style>