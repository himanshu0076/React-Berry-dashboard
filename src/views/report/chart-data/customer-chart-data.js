// ==============================|| WIDGET - CUSTOMER CHART ||============================== //

const customersChartData = {
    height: 300,
    type: 'donut',
    options: {
        chart: {
            id: 'customers-chart'
        },
        dataLabels: {
            enabled: false
        },
        labels: ['Country 1', 'Country 2', 'Country 3', 'Country 4', 'Country 5'],
        legend: {
            show: true,
            position: 'bottom',
            fontFamily: 'inherit',
            labels: {
                colors: 'inherit'
            },
            itemMargin: {
                horizontal: 10,
                vertical: 10
            }
        }
    },
    series: [1258, 975, 500, 450, 750]
};
export default customersChartData;
