// Gráfico de progresso de hábitos usando ECharts
// Exemplo: Dias consecutivos de hábitos concluídos

document.addEventListener('DOMContentLoaded', function () {
  var chartDom = document.getElementById('habit-progress-chart');
  if (!chartDom) return;
  var myChart = echarts.init(chartDom);
  var option = {
    title: {
      text: 'Dias de Hábitos Concluídos',
      left: 'center',
      textStyle: { color: '#fff', fontWeight: 700, fontSize: 16 }
    },
    tooltip: { trigger: 'axis' },
    grid: { left: 30, right: 20, top: 40, bottom: 30 },
    xAxis: {
      type: 'category',
      data: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
      axisLine: { lineStyle: { color: 'rgba(255,255,255,0.2)' } },
      axisLabel: { color: '#fff' }
    },
    yAxis: {
      type: 'value',
      minInterval: 1,
      axisLine: { show: false },
      axisLabel: { color: '#fff' },
      splitLine: { lineStyle: { color: 'rgba(255,255,255,0.07)' } }
    },
    series: [{
      name: 'Dias concluídos',
      type: 'bar',
      data: [1, 2, 3, 2, 4, 6, 5],
      barWidth: 22,
      itemStyle: {
        color: {
          type: 'linear',
          x: 0, y: 0, x2: 0, y2: 1,
          colorStops: [
            { offset: 0, color: '#FF9800' },
            { offset: 1, color: '#FF5722' }
          ]
        },
        borderRadius: [8, 8, 0, 0],
        shadowColor: '#FF5722',
        shadowBlur: 12
      },
      label: {
        show: true,
        position: 'top',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 13
      }
    }]
  };
  myChart.setOption(option);
  window.addEventListener('resize', function () { myChart.resize(); });
});
