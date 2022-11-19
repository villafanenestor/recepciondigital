import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from "../login/login";
// import Admin from "../Webs/admin";
import Inicio from "../Webs/Inicio";
import PrivateRoute from "../auth/privaterouter";
import Page from "../Webs/Page"
import AdminBuscar from "../admins/admins.buscar";

export default function AppRouter() {

    return (
        <Router>
            <Switch>
                <PrivateRoute exact path={["/Page"]} component={Page} />
                <Route exact path={["/", "/login"]} component={Login} />
                <Route exact path={["/Inicio"]} component={Inicio} />
                <PrivateRoute exact path={["/admins"]} component={AdminBuscar} />
                
                

                <Route path="/*" component={() => (
                    <h1>
                        404<br /> Pagina no encontrada
                    </h1>
                )} />


            </Switch>
        </Router>
    );
}


