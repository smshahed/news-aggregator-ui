<template>
  <div class="container-lg mt-4">
    <div class="card border-primary mb-3">
      <div class="card-header border-primary mb-3 bg-transparent fw-bold">News Aggregation Report</div>
      <div class="card-body">
        <form class="row g-4">
          <div class="col-sm-4">
            <label for="text" class="form-label fw-bold">Text</label>
            <input id="text" type="text" class="form-control" v-model="text" />
          </div>
          <div class="col-sm-2">
            <label for="startDate" class="form-label fw-bold">Start Date</label>
            <input id="startDate" type="date" class="form-control" v-model="startDate" />
          </div>
          <div class="col-sm-2">
            <label for="endDate" class="form-label fw-bold">End Date</label>
            <input id="endDate" type="date" class="form-control" v-model="endDate" />
          </div>
          <div class="col-sm-2">
            <label for="interval" class="form-label fw-bold">Interval</label>
            <select id="interval" class="form-select" v-model="interval">
              <option value="1d">1 day</option>
              <option value="1w">1 week</option>
              <option value="1M">1 month</option>
              <option value="1q">1 quarter</option>
              <option value="1y">1 year</option>
            </select>
          </div>
          <div class="col-auto d-flex align-items-end">
            <button type="button" class="btn btn-primary" @click="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>

    <div v-if="chartData">
      <div class="card border-primary mb-3">
        <div class="card-header border-primary mb-3 bg-transparent fw-bold">Result</div>
        <div class="card-body">
          <stacked-bar-chart
            :chart-data="chartData"
            :chart-options="chartOptions"
          ></stacked-bar-chart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import StackedBarChart from './StackedBarChart.vue'

export default {
  components: {
    StackedBarChart
  },
  data () {
    return {
      text: 'Scott Morrison',
      startDate: new Date('2019-08-01').toISOString().substr(0, 10),
      endDate: new Date('2019-08-31').toISOString().substr(0, 10),
      interval: '1d',
      chartData: null,
      chartOptions: {
        scales: {
          x: {
            stacked: true
          },
          y: {
            stacked: true
          }
        }
      }
    }
  },
  methods: {
    submit () {
      // Validate start date and end date
      if (this.startDate > this.endDate) {
        alert('Start Date cannot be later than End Date')
        return
      }

      const after = new Date(this.startDate)
      const before = new Date(this.endDate)
      before.setUTCHours(23, 59, 59)
      after.setUTCHours(0, 0, 0)

      axios.get('http://localhost:3000/results', {
        params: {
          query: this.text,
          after: after.getTime(),
          before: before.getTime(),
          interval: this.interval
        }
      })
        .then(response => {
          console.log('Data sent successfully', response.data)
          this.generateChartData(response.data.response)
        })
        .catch(error => {
          console.error('Error sending data', error)
          // Handle the error as needed
        })
    },

    generateChartData (response) {
      const dates = []
      const mediums = ['Online', 'TV', 'Radio', 'Print', 'Social'] // Fixed set of mediums
      const colors = ['#54B399', '#D36086', '#6092C0', '#9170B8', '#d97dff'] // Colors for each medium

      response.forEach((element) => {
        dates.push(element.key_as_string.substr(0, 10))
      })

      const datasets = []

      mediums.forEach((medium, index) => {
        const data = []

        response.forEach((element) => {
          const buckets = element.second_agg.buckets || []
          const matchingBucket = buckets.find((bucket) => bucket.key === medium)
          data.push(matchingBucket ? matchingBucket.doc_count : 0)
        })

        const dataset = {
          label: medium,
          backgroundColor: colors[index % colors.length],
          data: data,
          stack: 'stack'
        }

        datasets.push(dataset)
      })

      this.chartData = {
        labels: dates,
        datasets: datasets
      }
    }
  }
}
</script>
