import React from "react";
import Categories from "./Categories";
import ProductList from "../pages/ProductList";
import { Routes, Route } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import ProductDetail from "../pages/ProductDetail";
import CartDetail from "../pages/CartDetail";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Categories />
          </Grid.Column>
          <Grid.Column width={12}>
            {/* <Route> bileşeni <Routes> içinde kullanılmalı */}
            <Routes>
              <Route exact path="/" element={<ProductList />} />
              <Route exact path="/products" element={<ProductList />} />
              <Route exact path="/products/:id" element={<ProductDetail />} />
              <Route exact path="/cart" element={<CartDetail />} />
            </Routes>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
