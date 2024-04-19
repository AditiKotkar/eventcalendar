import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import 'react-calendar/dist/Calendar.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
            <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>
);
reportWebVitals();

