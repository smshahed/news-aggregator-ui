import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import NewsAggregator from '@/components/NewsAggregator'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/news-aggregator',
      name: 'News Aggregator',
      component: NewsAggregator
    }
  ]
})
