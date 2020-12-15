import logo from './logo.svg';
import './App.css';
import {FirstComponent} from './firstComponent.js';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/firstcomponent">First component</a>
            </li>
          </ul>
        </div>
      </nav>
      <header className="App-header">
        <div>Welcome to my page</div>
        <Router>
          <div class="content">
            <Route exact path="/firstcomponent" component={FirstComponent} />
          </div>
        </Router>
      </header>
    </div>
  );
}

export default App;
