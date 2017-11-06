import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Test from '@/components/Test'
import Autocomplete from '@/components/AutoComplete'
import Sortable from '@/components/Sortable'
import NewTextBox from '@/components/NewTextBox'
import mainFile from '@/components/mainFile.vue'
import formv from '@/components/form.vue'
import sorthead from '@/components/sortTableHead.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/sorthead',
      name: 'sorthead',
      component: sorthead
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    },
    {
      path: '/autocomplete',
      name: 'autocomplete',
      component: Autocomplete
    },
    {
      path: '/sortable',
      name: 'sortable',
      component: Sortable
  },
  {
    path: '/newtextbox',
    name: 'newtextbox',
    component: NewTextBox
  },
  {
    path: '/mainfile',
    name: 'mainfile',
    component: mainFile
  },
  {
    path: '/formv',
    name: 'formv',
    component: formv
  },
  ]
})
