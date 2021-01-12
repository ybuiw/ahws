import React from 'react';
import { Login } from './components'
import './App.css';
import bg from './bg.jpg'
import log from './log.png'

const App = () => {
  const formhandle = e => {
    console.log(e)
  }

  const getCode = (callback) => {
    console.log(callback)
    setTimeout(() => {
      callback(true, '789')
    }, 1000);
  }

  return (
    // <Login title="上海爱护健康管理系统" source="username|password|code"
    // onLogin={formhandle} />
    <Login
      style={{backgroundImage: `url(${bg})`}}
      title={ <img src={log} alt="" /> }
      source="mobile"
      count={3}
      onCode={getCode}
      onLogin={formhandle}
    />
  );
}

export default App;
