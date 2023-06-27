import Vue from 'vue'
import Router from 'vue-router'
import NewsAggregator from '@/components/NewsAggregator'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/news-aggregator',
      name: 'News Aggregator',
      component: NewsAggregator
    }
  ]
})
