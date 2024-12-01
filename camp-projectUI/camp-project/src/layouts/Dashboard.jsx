import React from "react";
import Categories from "./Categories";
import ProductList from "./ProductList";
import { Routes, Route } from "react-router-dom";
import { Grid } from "semantic-ui-react";

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
              <Route path="/" element={<ProductList />} />
            </Routes>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
