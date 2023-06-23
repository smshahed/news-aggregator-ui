<template>
  <div>
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'

export default {
  props: ['chartData', 'chartOptions'],
  mounted () {
    this.renderChart()
  },
  watch: {
    chartData: {
      handler () {
        this.renderChart()
      },
      deep: true
    }
  },
  methods: {
    renderChart () {
      const ctx = this.$refs.chartCanvas.getContext('2d')

      if (this.chart) {
        this.chart.destroy()
      }

      this.chart = new Chart(ctx, {
        type: 'bar',
        data: this.chartData,
        options: this.chartOptions
      })
    }
  }
}
</script>
