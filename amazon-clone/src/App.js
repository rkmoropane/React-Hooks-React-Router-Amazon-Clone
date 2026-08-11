import { Route } from 'react-router-dom'

import './App.css';
import Home from './components/Home';
import Products from './components/Products';
import Header from './components/layout/Header';

const App = () => {
  return (
    <div>
      <Header />

      <main>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/products'>
          <Products />
        </Route>
      </main>
    </div>
  );
}

export default App;

// ourdomain.com/ => Home Screen or Home component
// ourdomain.com/product => Product List