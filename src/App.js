import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./screens/Home/Home";
import Categories from "./screens/Categories/Categories";
import Products from "./screens/Products/Products";
import ProductDetails from "./screens/ProductDetails/ProductDetails";
import Payment from "./screens/Payment/Payment";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/categories">
            <CategoriesScreen />
          </Route>
          <Route path="/products/:id">
            <ProductsScreen />
          </Route>
          <Route path="/product-details/:id">
            <ProductDetailsScreen/>
          </Route>
          <Route path="/payment">
            <PaymentScreen />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function CategoriesScreen() {
  return <Categories />;
}

function ProductsScreen() {
  return <Products />;
}

function ProductDetailsScreen() {
  return <ProductDetails />;
}

function PaymentScreen() {
  return <Payment />;
}
