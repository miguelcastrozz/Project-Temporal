import {Route, Routes} from "react-router-dom";
import React from "react";
import "./stylesheets/root/global.css";
import "./stylesheets/root/reset.css";
import Inicio from "./views/Inicio.jsx";
import Login from "./views/Login.jsx";
import Publicaciones from "./views/Publicaciones.jsx";
import Registro from "./views/Registro.jsx";
import {UsuarioProvider} from "./context/UsuariosContext.jsx";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Inicio />}></Route>
        <Route path="/login" element={<UsuarioProvider><Login /></UsuarioProvider>}></Route>
        <Route path="/register" element={<UsuarioProvider><Registro /></UsuarioProvider>}></Route>
        <Route path="/publications" element={<UsuarioProvider><Publicaciones /></UsuarioProvider>}></Route>
        <Route path="*" element={<h1>404 NOT FOUND</h1>}></Route>
      </Routes>
    </div>
  );
}
