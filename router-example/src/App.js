import logo from './logo.svg';
import './App.css';
import  { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import EducationDetails from './components/EducationDetails/EducationDetails';
import QueryStrings from './components/QueryStrings/QueryStrings';

function App() {

  const loggedInUser = null;
  // const loggedInUser = { username: "Guille"};


  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/experience" render={() => <Experience />} />
        <Route exact path="/education" render={() => <Education />} />
        <Route path="/education/:schoolName" render={(props) => <EducationDetails {...props} />} />
        <Route path="/resultados-busqueda" render={(props) => <QueryStrings {...props}/>} />
        <Route path="/profile" render={() => loggedInUser ? <Home /> : <Redirect to="/login" />} />
      </Switch>

      {/* Footer */}
    </div>
  );
}

export default App;
