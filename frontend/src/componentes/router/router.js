import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from "../login/login";
// import Admin from "../Webs/admin";
import Inicio from "../Webs/Inicio";
import PrivateRoute from "../auth/privaterouter";
import Page from "../Webs/Page";

export default function AppRouter() {

    return (
        <Router>
            <Switch>
                <Route exact path={["/", "/login"]} component={Login} />
                <Route exact path={["/Inicio"]} component={Inicio} />
                
                <PrivateRoute exact path="/Page" component={Page} />




                <Route path="/*" component={() => (
                    <h1>
                        404<br /> Pagina no encontrada
                    </h1>
                )} />


            </Switch>
        </Router>
    );
}

// function  Home(){
//     return <h2>Home</h2>
// }

