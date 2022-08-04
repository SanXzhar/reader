import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Resigter from "./Resigter";
import Login from "./Login";
import Texts from "./Texts";
import {ProtectedRoutes} from "./Protected";
import {
  AuthStoreProvider
} from "./stores/auth";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const Layout = () => {
  return (
    <AuthStoreProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route element={<ProtectedRoutes />}>        
          <Route path="/notes" element={<Texts />} />
        </Route>
        <Route path="/registration" element={<Resigter />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </AuthStoreProvider>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Layout />
);
