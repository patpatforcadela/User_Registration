import logo from './logo.svg';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import { UserList } from './UserList'
import { EditUser } from './EditUser'
import { RegisterUser } from './RegisterUser'

function App() {
  return (
    <div>
      <nav className="navbar bg-light navbar-expand-lg navbar-light">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/" className="nav-link">Users</Link>
          </li>
          <li className="navbar-item">
            <Link to="/create" className="nav-link">Register User</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={UserList} />
        <Route exact path="/edit/:id" component={EditUser} />
        <Route exact path="/register" component={RegisterUser} />
      </Switch>
    </div>
  );
}

export default App;
