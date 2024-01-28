// ==============================|| DASHBOARD - TOTAL GROWTH BAR CHART ||============================== //

const revenueChartData = {
    height: 320,
    type: 'area',
    options: {
        chart: {
            id: 'graph-chart',
            stacked: true,
            toolbar: {
                show: false
            },
            zoom: {
                enabled: true
            }
        },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    legend: {
                        position: 'bottom',
                        offsetX: -10,
                        offsetY: 0
                    }
                }
            }
        ],
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '50%'
            }
        },
        xaxis: {
            type: 'category',
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        legend: {
            show: true,
            fontFamily: `'Roboto', sans-serif`,
            position: 'bottom',
            offsetX: 20,
            labels: {
                useSeriesColors: false
            },
            markers: {
                width: 16,
                height: 16,
                radius: 5
            },
            itemMargin: {
                horizontal: 15,
                vertical: 8
            }
        },
        colors: ['#873678'],
        // fill: {
        //     type: 'gradient',
        //     gradient: {
        //         shadeIntensity: 1,
        //         opacityFrom: 0.9,
        //         opacityTo: 0.5,
        //         stops: [0, 80, 100]
        //     }
        // },
        fill: {
            type: 'solid'
        },
        dataLabels: {
            enabled: false
        },
        grid: {
            show: true
        }
    },
    series: [
        {
            name: 'Revenue $',
            data: [220, 150, 153, 356, 651, 231, 335, 608, 120, 230, 150, 240]
        }
    ]
};
export default revenueChartData;
