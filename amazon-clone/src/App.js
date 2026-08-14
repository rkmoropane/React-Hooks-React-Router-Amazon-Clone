import { Route, Switch, Redirect } from "react-router-dom";

import "./App.css";
import Home from "./components/Home";
import Products from "./components/Products";
import Header from "./components/layout/Header";
import ProductDetails from "./components/ProductDetails";
import Login from "./components/Login";
import Order from "./components/Order";
import Prime from "./components/Prime";
import Shopping from "./components/Shopping";

const App = () => {
  return (
    <div>
      <Header />

      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          
          {/* Use the exact prop, to match the exact page - Products */}
          <Route path="/products" exact>
            <Products />
          </Route>

          <Route path="/products/:id">
            <ProductDetails />
          </Route>

          <Route path="/login">
            <Login />
          </Route>
          <Route path="/order">
            <Order />
          </Route>

          <Route path="/prime">
            <Prime />
          </Route>

          <Route path="/shopping">
            <Shopping />
          </Route>
        </Switch>
      </main>
    </div>
  );
};

export default App;

// ourdomain.com/ => Home Screen or Home component
// ourdomain.com/product => Product List
