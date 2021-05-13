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
      {/* <div className="stars"></div>
      <div className="twinkling"></div> */}
      <Router>
      <Header />
        <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/Tools' component={Tools} />
        <Route exact path='/About' component={About} />
        <Route exact path='/Project' component={ProjectSection} />
        <Route exact path='/Achievements' component={Achievement} />
      </Switch>
    </Router>
    </div>
  )
}

export default App;
