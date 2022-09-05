import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App';
import HeaderAdmin from './components/Admin/HeaderAdmin';
import Admin from './components/Admin/MoviesDetail';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <HeaderAdmin />
    <Admin />
  </React.StrictMode>
);
