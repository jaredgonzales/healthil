import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import * as ROUTES from './pages/routes';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ApplicationForm from './pages/applicationForm';
import ApplicationList from './pages/applicationList';
import InternalAssessment from './pages/internalAssessment';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path={ROUTES.LANDING} element={<App />} />
      <Route path={ROUTES.APPLICATIONFORM} element={<ApplicationForm />} />
      <Route path={ROUTES.APPLICATIONLIST} element={<ApplicationList />} />
      <Route path={ROUTES.INTERNALASSESSMENT} element={<InternalAssessment />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
