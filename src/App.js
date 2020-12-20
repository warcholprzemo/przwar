import './App.css';
import HomePage from './Home.js';
import {TicTacToe} from './tictactoe';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                  <NavLink className="nav-link" to="/" exact>Home</NavLink>
                </li>
                <li class="nav-item">
                  <NavLink className="nav-link" to="/tictactoe" exact>Game: Tic Tac Toe</NavLink>
                </li>
              </ul>
            </div>
          </nav>
          <header className="App-header">
              <div class="content">
                <Route exact path="/" component={HomePage} />
                <Route exact path="/tictactoe" component={TicTacToe} />
              </div>
          </header>
      </Router>
    </div>
  );
}

export default App;
