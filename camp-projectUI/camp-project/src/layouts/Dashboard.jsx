import React from "react";
import Categories from "./Categories";
import ProductList from "./ProductList";
import { Route } from "react-router-dom";
import { Grid } from "semantic-ui-react";

export default function Dashboard() {
  return (
    <div>
      <Grid.Row>
        <Grid.Column width={4}>
          <Categories />
        </Grid.Column>
        <Grid.Column width={12}>
          <Route path="/" Component={ProductList} />
        </Grid.Column>
      </Grid.Row>
    </div>
  );
}
