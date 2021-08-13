import './App.css';
import { Route, Switch } from 'react-router-dom';
import About from './views/About'
import Contact from './views/Contact';
import Weather from './views/Weather';
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
