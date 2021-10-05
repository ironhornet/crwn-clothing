import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectIsCollectionFetching } from "../../redux/shop/shop.selectors";
import WithSpinner from "../with-spinner/with-spinner.component";
import CollectionsOverviev from "./collections-overviev.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

const CollectionsOvervievContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverviev);

export default CollectionsOvervievContainer
