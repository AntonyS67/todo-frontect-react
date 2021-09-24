
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Nav from './components/Nav';
import Create from "./components/Todo/Create";
import {Index as Todo} from './components/Todo/Index';
import TodoState from "./context/TodoState";
function App() {
  return (
    <div className="mr-20 ml-20 text-sm">
      <TodoState>
        <Router>
          <Nav/>
          <Switch>
            <Route path="/" exact component={Todo}/>
            <Route path="/create" exact component={Create}/>
          </Switch>
        </Router>
      </TodoState>
    </div>
  );
}

export default App;
