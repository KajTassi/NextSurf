import React, { Fragment } from "react";

//components

import InputReviews from "./inputReviews";
import ListReviews from "./listReviews";


function App() {
  return (
    <Fragment>
      <div className="container">
        <InputReviews />
        <ListReviews />
      </div>
      <hr className="featurette-divider"></hr>
    </Fragment>
  );
}

export default App;