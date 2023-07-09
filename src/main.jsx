import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Information from './components/Information.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
  },
  {
    path: '/info',
    element: <Information></Information>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
