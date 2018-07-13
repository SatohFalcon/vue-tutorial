import Test from './../components/test'
import HelloWorld from './../components/HelloWorld'

const index = [
  { path: '/:id', component: Test },
  { path: '/hello', component: HelloWorld }
]
export default index