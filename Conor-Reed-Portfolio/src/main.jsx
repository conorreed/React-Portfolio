// index.jsx or main.jsx
import React from 'react';
import ReactDOM from "react-dom/client";
import App from './App';
import './index.css'; // Import your global styles if you have any

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
