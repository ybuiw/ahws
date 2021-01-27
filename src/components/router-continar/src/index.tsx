import { Router, Route, Switch } from 'react-router-dom';
import {createBrowserHistory} from 'history'

export interface RouterFace {
  routes?: any[]
}

const RouterContinar = (props: RouterFace) => {
  console.log(props)
  const Child = () => {
    return (
      <>999</>
    )
  }
  return (
    <Router history={createBrowserHistory()}>
      <Child />
    </Router>
  )
}
export default RouterContinar;