import './App.scss';
import Home from "./pages/Home/index"
import About from "./pages/About/index"
import ProjectSection from "./pages/Projects/index"
import Experience from "./pages/Experience/index"
import Achievement from "./pages/Achievement/index"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/index"

const App = () => {
  return(
    <div className="page">
      <Router>
      <Header />
        <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/About' component={About} />
        <Route exact path='/Project' component={ProjectSection} />
        <Route exact path='/Achievments' component={Achievement} />
      </Switch>
    </Router>
    </div>
  )
}

export default App;
