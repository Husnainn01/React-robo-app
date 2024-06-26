import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'
import 'tachyons' 
import { robots }  from './robots';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<React.StrictMode> <App/> </React.StrictMode>
);

reportWebVitals();