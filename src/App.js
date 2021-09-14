import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Beer from "./Beer";
import BeerList from "./BeerList";
import Layout from "./Layout";

function App() {
  return (
    <Router>
      <Layout />
      <Switch>
        <Route exact path="/">
          <Redirect to="/beers" />
        </Route>
        <Route path="/beers" component={BeerList} />
        <Route path="/:id">
          <Beer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
