import './App.css';
import { Route, Switch } from 'react-router-dom';
import About from './components/About'
import Contact from './components/Contact';
import Weather from './components/Weather';
import Navbar from './components/NavBar';

function App() {
  return (
    <main>
      <Navbar />
      <Switch>
        <Route path="/" component={About} exact />
        <Route path="/contact" component={Contact} />
        <Route path="/weather" component={Weather} />
      </Switch>
    </main>
  );
}

export default App;
