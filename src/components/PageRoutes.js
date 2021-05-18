import Subscribers from '../pages/Users/Subscribers'
// import Recent from '../pages/Clothing/Recent'
import Orders from '../pages/Clothing/Orders'
import Clothes from '../pages/Clothing/Clothes'
import Winners from '../pages/Quiz/Winners'
import Highscores from '../pages/Quiz/Highscores'
import Settings from '../pages/Settings/Settings'
import Overview from '../pages/Overview/Overview'
import { Route, Switch } from 'react-router-dom'
import History from '../pages/History/History'

const PageRoutes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Overview} />
      <Route exact path='/users/subscribers' component={Subscribers} />
      <Route path='/clothing/orders' component={Orders} />
      <Route path='/clothing/clothes' component={Clothes} />
      {/* <Route path='/clothing/recent' component={Recent} /> */}
      <Route path='/quiz/winners' component={Winners} />
      <Route path='/quiz/highscores' component={Highscores} />
      <Route path='/history' component={History} />
      <Route path='/settings' component={Settings} />
    </Switch>
  )
}

export default PageRoutes
