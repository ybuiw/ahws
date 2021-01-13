import React from 'react';
import { Login } from '../../components'
import bg from './bg.jpg'
import log from './log.png'

const App = () => {
  const formhandle = (value: any) => {
    console.log(value)
  }

  const getCode = (callback: any) => {
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
      values={{ mobile: 18888888888 }}
      source="mobile"
      count={60}
      onCode={getCode}
      onLogin={formhandle}
    />
  );
}

export default App;
