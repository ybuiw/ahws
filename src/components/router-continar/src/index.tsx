import { Provider } from 'react-redux'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';
import {createBrowserHistory} from 'history'

export interface RouterFace {
  store?: any;
  routes?: any[];
}

const LoadableComponent = (component: () => Promise<any>) => {
  return Loadable({
    loader: component,
    loading() {
      return <div>正在加载</div>
    }
  });
}


const RouterContinar = (props: RouterFace) => {
  const {
    store,
    routes
  } = props;

  const Child = () => (
    <Switch>
      {
        routes?.map((item, index) => {
          console.log(item.component)
          if (!item.component) {
            return null;
          }
          const Com = LoadableComponent(item.component);
          return (
            <Route path={item.path} key={index} render={(childProps) => {
              // console.log(childProps)
              return <Com  />
            }} />
          );
        })
      }
    </Switch>
  );

  return (
    <HashRouter>
      <Child />
    </HashRouter>
  )
}

export default RouterContinar;