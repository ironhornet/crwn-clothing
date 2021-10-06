import React, {useEffect} from "react";
import { Route } from "react-router";
import { connect } from "react-redux";

import CollectionsOvervievContainer from "../../components/collections-overviev/collections-overview.container";
import CollectionPageContainer from "../collection/collection.container";


import { fetchCollectionsStart } from "../../redux/shop/shop.actions";


const ShopPage = ({fetchCollectionsStart, match}) => {

 useEffect(() => {
  fetchCollectionsStart()
 }, [fetchCollectionsStart])

  
     return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOvervievContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  
}


const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
