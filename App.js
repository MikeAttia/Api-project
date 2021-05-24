import './App.css';

import Dine from './Dine'
import Kitchen from './Kitchen';
import WineChoice from './WineChoice'
import Nav from './Nav'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path='/' exact component={Dine} />
          <Route path='/Dine' component={Dine} />
          <Route path='/Kitchen' component={Kitchen} />
          <Route path='/WineChoice' component={WineChoice} />
         
        </Switch>
      </div>
    </Router>
  );
}

export default App;