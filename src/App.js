import logo from './logo.svg';
import './App.css';

import CocktailsPage from './components/CocktailsPage';
import CocktailDetail from './components/CocktailDetail';

import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="container-fluid">
        <Route path='/' component={CocktailsPage} exact/>
        <Route path='/detail/:id' component={CocktailDetail} exact/>
    </div>
  );
}

export default App;
