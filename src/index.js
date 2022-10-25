import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'tachyons';

import App from './Containers/App';
// import { robots } from './robots';


// ReactDOM.render(<card />, document.getElementById('root'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


