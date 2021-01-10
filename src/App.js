import './App.css';
import HomePage from './Home.js';
import {TicTacToe} from './tictactoe';
import {AllHooks} from './hooks';
import RectanglesGame from './rectangles';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/" exact>Home</NavLink>
                </li>
                <li class="nav-item">
                  <NavLink className="nav-link" to="/tictactoe" exact>Game: Tic Tac Toe</NavLink>
                </li>
                <li class="nav-item">
                  <NavLink className="nav-link" to="/rectangles" exact>Game: Rectangles</NavLink>
                </li>
                <li class="nav-item">
                  <NavLink className="nav-link" to="/hooks" exact>Components on hooks</NavLink>
                </li>
              </ul>
            </div>
          </nav>
          <header className="App-header">
              <div class="content">
                <Route exact path="/" component={HomePage} />
                <Route exact path="/tictactoe" component={TicTacToe} />
                <Route exact path="/rectangles" component={RectanglesGame} />
                <Route exact path="/hooks" component={AllHooks} />
              </div>
          </header>
      </Router>
    </div>
  );
}

export default App;
