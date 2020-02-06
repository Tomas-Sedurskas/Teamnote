import React, { Component } from 'react'
import Dashboard from '../Dashboard/Dashboard';
import Projects from '../Projects/Projects';
import Profile from '../Profile/Profile';
import Team from '../Team/Team';
import Notifications from '../Notifications/Notifications';
import Settings from '../Settings/Settings';

import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';

export default class Navbar_Side extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route path="/Dashboard" component={ Dashboard }></Route>
                        <Route path="/Projects" component={ Projects }></Route>
                        <Route path="/Profile" component={ Profile }></Route>
                        <Route path="/Team" component={ Team }></Route>
                        <Route path="/Notifications" component={ Notifications }></Route>
                        <Route path="/Settings" component={ Settings }></Route>
                    </Switch>

                    <div>
                        <Link to="/Dashboard">Dashboard</Link>
                        <Link to="/Projects">Projects</Link>
                        <Link to="/Profile">Profile</Link>
                        <Link to="/Team">Team</Link>
                        <Link to="/Notifications">Notifications</Link>
                        <Link to="/Settings">Settings</Link>
                    </div>
                    
                </Router>
            </div>
        )
    }
}
