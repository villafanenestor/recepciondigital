import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "../login/login";
import Admin from "../Webs/admin";
import Inicio from "../Webs/Page";

export default function AppRouter() {

    return (
        <Router>
            <Routes>
                <Route exact path="/login" element ={<Login />}/>
                <Route exact path="/admin" element ={<Admin />}/>
                <Route exact path="/index" element ={<Inicio />}/>


                <Route path="/*" element ={(
                    <h1 style={{}}>404<br/>Pagina no encontrada</h1>
                )}/>


            </Routes>
        </Router>
    );
}


