import React from "react";

import { Route } from "react-router";
import CollectionsOverviev from '../../components/collections-overviev/collections-overviev.component'
import CollectionPage from "../collection/collection.component";

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`}component={CollectionsOverviev}/>
    <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
  </div>
);



export default  ShopPage;
