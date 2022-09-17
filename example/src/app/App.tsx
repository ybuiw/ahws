import ProSearch, { ProSearchDataSoureProps } from '@ahws/pro-search';
import './App.css';

const items: ProSearchDataSoureProps[] = [
  {
    label: '姓名',
    type: 'input',
    key: 'name'
  },
  {
    label: '姓名2',
    type: 'input',
    key: 'name2'
  }
]

const App = () => (
  <div className="App">
    <ProSearch dataSource={items} />
  </div>
);

export default App;
