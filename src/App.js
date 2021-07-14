import './App.scss';
import Home from "./pages/Home/index"
import About from "./pages/About/index"
import ProjectSection from "./pages/Projects/index"
import Achievement from "./pages/Achievement/index"
import Tools from "./pages/Tools/index"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/index"

const App = () => {
  return(
    <div className="page">
      <Router>
      <Header />
        <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/tool' component={Tools} />
        <Route exact path='/about' component={About} />
        <Route exact path='/project' component={ProjectSection} />
        <Route exact path='/achievement' component={Achievement} />
      </Switch>
    </Router>
    </div>
  )
}

export default App;
