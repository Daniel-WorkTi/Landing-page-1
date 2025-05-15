// Revenue Chart
const revenueChart = echarts.init(document.getElementById('revenue-chart'));
revenueChart.setOption({
    animation: false,
    color: ['rgba(87, 181, 231, 1)'],
    tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        textStyle: { color: '#1f2937' }
    },
    grid: { top: 0, right: 0, bottom: 0, left: 0 },
    xAxis: {
        type: 'category',
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: { show: false }
    },
    yAxis: {
        type: 'value',
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: { show: false },
        splitLine: { show: false }
    },
    series: [{
        data: [3, 7, 12, 18, 25, 31],
        type: 'line',
        smooth: true,
        symbol: 'none',
        areaStyle: {
            color: {
                type: 'linear',
                x: 0, y: 0, x2: 0, y2: 1,
                colorStops: [
                    { offset: 0, color: 'rgba(87, 181, 231, 0.2)' },
                    { offset: 1, color: 'rgba(87, 181, 231, 0.05)' }
                ]
            }
        }
    }]
});

// Expense Chart
const expenseChart = echarts.init(document.getElementById('expense-chart'));
expenseChart.setOption({
    animation: false,
    color: [
        'rgba(141, 211, 199, 1)',
        'rgba(251, 191, 114, 1)',
        'rgba(252, 141, 98, 1)',
        'rgba(87, 181, 231, 1)'
    ],
    tooltip: {
        trigger: 'item',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        textStyle: { color: '#1f2937' }
    },
    series: [{
        name: 'Activities',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: { borderRadius: 8 },
        label: { show: false },
        emphasis: { label: { show: false } },
        labelLine: { show: false },
        data: [
            { value: 35, name: 'Meditation' },
            { value: 25, name: 'Exercise' },
            { value: 20, name: 'Reading' },
            { value: 20, name: 'Gratitude' }
        ]
    }]
});

// Data Visualization Chart
const dataChart = echarts.init(document.getElementById('data-visualization-chart'));
dataChart.setOption({
    animation: false,
    color: [
        'rgba(87, 181, 231, 1)',
        'rgba(141, 211, 199, 1)',
        'rgba(251, 191, 114, 1)'
    ],
    tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        textStyle: { color: '#1f2937' }
    },
    legend: {
        data: ['Consistency', 'Well-being', 'Productivity'],
        textStyle: { color: '#fff' },
        right: 0,
        top: 0
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top: '15%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        axisLine: { lineStyle: { color: 'rgba(255, 255, 255, 0.2)' } },
        axisLabel: { color: 'rgba(255, 255, 255, 0.7)' }
    },
    yAxis: {
        type: 'value',
        axisLine: { show: false },
        axisLabel: { color: 'rgba(255, 255, 255, 0.7)' },
        splitLine: { lineStyle: { color: 'rgba(255, 255, 255, 0.1)' } }
    },
    series: [
        {
            name: 'Consistency',
            type: 'line',
            smooth: true,
            symbol: 'none',
            data: [40, 52, 61, 74, 80, 83, 91, 95],
            areaStyle: {
                color: {
                    type: 'linear',
                    x: 0, y: 0, x2: 0, y2: 1,
                    colorStops: [
                        { offset: 0, color: 'rgba(87, 181, 231, 0.2)' },
                        { offset: 1, color: 'rgba(87, 181, 231, 0.05)' }
                    ]
                }
            }
        },
        {
            name: 'Well-being',
            type: 'line',
            smooth: true,
            symbol: 'none',
            data: [30, 42, 51, 64, 70, 78, 85, 90],
            areaStyle: {
                color: {
                    type: 'linear',
                    x: 0, y: 0, x2: 0, y2: 1,
                    colorStops: [
                        { offset: 0, color: 'rgba(141, 211, 199, 0.2)' },
                        { offset: 1, color: 'rgba(141, 211, 199, 0.05)' }
                    ]
                }
            }
        },
        {
            name: 'Productivity',
            type: 'line',
            smooth: true,
            symbol: 'none',
            data: [20, 32, 41, 54, 65, 75, 82, 88],
            areaStyle: {
                color: {
                    type: 'linear',
                    x: 0, y: 0, x2: 0, y2: 1,
                    colorStops: [
                        { offset: 0, color: 'rgba(251, 191, 114, 0.2)' },
                        { offset: 1, color: 'rgba(251, 191, 114, 0.05)' }
                    ]
                }
            }
        }
    ]
});

// Resize handler
window.addEventListener('resize', function() {
    revenueChart.resize();
    expenseChart.resize();
    dataChart.resize();
}); 