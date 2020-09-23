import React from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';

import Home from './Home'
import About from './About';
import Issues from './Issues';
import GetInvolved from './GetInvolved';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/Issues' component={Issues}/>
          <Route path='/get-involved' component={GetInvolved}/>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
