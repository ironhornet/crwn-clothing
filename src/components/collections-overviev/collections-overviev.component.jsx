import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";
import CollectionPreview from "../preview-collection/collection-preview.component";


import "./collections-overviev.styles.scss";


const CollectionsOverviev = ({ collections }) => (
  <div className="collections-overviev">
    {collections.map(({ id, ...othetCollectionProps }) => (
      <CollectionPreview key={id} {...othetCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
  })

export default connect(mapStateToProps)(CollectionsOverviev)