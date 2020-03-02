import React from 'react';
import { connect } from "react-redux";

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { addCarFeature, removeCarFeature } from './actions/actions';

const App = (props) => {

  const removeFeature = item => {
    // dispatch an action here to remove an item
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.carInfo.car} />
        <AddedFeatures car={props.carInfo.car} />
      </div>
      <div className="box">
        <AdditionalFeatures addCarFeature={props.addCarFeature} additionalFeatures={props.carInfo.additionalFeatures} />
        <Total car={props.carInfo.car} additionalPrice={props.carInfo.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  console.log("full state ", state);
  return {
    carInfo: state
  };
};

export default connect(mapStateToProps, { addCarFeature, removeCarFeature })(App);
