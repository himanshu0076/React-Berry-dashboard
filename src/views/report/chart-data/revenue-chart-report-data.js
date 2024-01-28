// ==============================|| REVENUE CHART DATA ||============================== //

const revenueChartData = {
    height: 300,
    type: 'pie',
    options: {
        chart: {
            id: 'revenue-chart-data'
        },
        labels: ['Extremely Satisfied', 'Satisfied', 'Poor', 'Very Poor'],
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

export default revenueChartData;
