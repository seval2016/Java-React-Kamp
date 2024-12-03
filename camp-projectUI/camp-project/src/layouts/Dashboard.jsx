import React from "react";
import Categories from "./Categories";
import ProductList from "../pages/ProductList";
import { Routes, Route } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import ProductDetail from "../pages/ProductDetail";
import CartDetail from "../pages/CartDetail";
import { ToastContainer } from 'react-toastify';

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
              <Route exact path="/products/:name" element={<ProductDetail />} />
              {/* burada detail sayfasını ada göre getiriyor id'ye göre getirmesi dahat doğru olur */}
              <Route exact path="/cart" element={<CartDetail />} />
            </Routes>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
