// ==============================|| SUBSCRIPTION CHART DATA ||============================== //

const subscriptionChartData = {
    height: 300,
    type: 'pie',
    options: {
        chart: {
            id: 'subscription-chart-data'
        },
        labels: ['Package 1', 'Package 2', 'Package 3', 'Package 4'],
        legend: {
            show: true,
            position: 'bottom',
            fontFamily: 'inherit',
            labels: {
                colors: 'inherit'
            }
        },
        dataLabels: {
            enabled: true,
            dropShadow: {
                enabled: false
            }
        },
        theme: {
            monochrome: {
                enabled: true
            }
        }
    },
    series: [66, 50, 40, 30]
};

export default subscriptionChartData;
