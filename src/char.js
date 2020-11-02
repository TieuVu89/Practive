import {
    Line,
    mixins
} from 'vue-chartjs'
export default {
    extends: Line,
    mixins: [mixins.reactiveProp],
    props: ['chartData', 'options'],
    data() {
        return {
            options: { //Chart.js options
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            steps: 3,
                            stepValue: 300,
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
        }
    },
    mounted() {
        this.renderChart({
            labels: this.chartLabels,
            datasets: [
              {
                label: 'downloads',
                borderColor: '#249EBF',
                pointBackgroundColor: 'white',
                borderWidth: 1,
                pointBorderColor: '#249EBF',
                backgroundColor: 'transparent',
                data: this.chartData
              }
            ]
          }, this.options)
    }
}