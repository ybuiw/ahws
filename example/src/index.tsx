import ReactClient from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import Controller from './routes/Controller'
import Header from './components/Header'
import './index.css';


ReactClient.createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <Header />
    <div style={{ paddingTop: 58 }}>
      <Controller />
    </div>
  </HashRouter>
);
