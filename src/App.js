import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import {connect,useSelector, useDispatch} from 'react-redux';
import {addFeature, removeFeature} from './actions/carActions'

const App = (props) => {
  
  //state redux hooks
  const carData = useSelector(state => state.car)
  const featureData = useSelector(state => state.additionalFeatures)
  const priceData = useSelector(state => state.additionalPrice)
  //dispatch redux hooks
  const dispatch = useDispatch()
  const addF = useCallback((e)=>dispatch(addFeature(e)),[dispatch])
  const removeF = useCallback((e)=>dispatch(removeFeature(e)),[dispatch])

  return (
    <div className="boxes">
      <div className="box">
        <Header car={carData} />
        <AddedFeatures car={carData} removeFeature={removeF} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={featureData} addFeature={addF} />
        <Total car={carData} additionalPrice={priceData} />
      </div>
    </div>
  );
};

// const mapStateToProps = state => {
//   return {
//     car: state.car,
//     additionalFeatures: state.additionalFeatures,
//     additionalPrice: state.additionalPrice
//   };
// };

// export default connect(
//   mapStateToProps,
//   {addFeature, removeFeature}
  
// )(App);

export default App;