import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About, Posts, Search } from './pages';
import Menu from './components/Menu';

class App extends Component {
    render() {
        return (
            <div>
                <Menu/>
                <Route exact path="/" component={Home}/>
                {/* <Switch>
                    <Route path="/about/:name" component={About}/>
                    <Route path="/about" component={About}/>
                </Switch>
                <Route path="/users" component={Users}/> */}
                <Route path="/search" component={Search}/>
            </div>
        );
    }
}

export default App;