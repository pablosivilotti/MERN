import React from 'react';
import HeaderItinerary from '../components/header-Itinerary';
import SectionItineraries from '../components/section-itinerary';
import Footer from '../components/footer';
import { connect } from "react-redux";
import  {getItineraries}  from "../redux/actions/itineraryActions";


class Itinerary extends React.Component {
  
  // componentDidMount() {
  //   this.props.getItineraries(getState.match.params.cityId)
  // }

  render(){
  
  return (

    <div className="Redux">

      <HeaderItinerary />
      <SectionItineraries />
      <Footer />

    </div>
  );}
}

const mapStateToProps = (state) => {
  // console.log("state")
  // console.log(state)
  return {
    // cities: state.cityReducer,
    itinerary: state.itineraryReducer
    //otro_reducer: state.otro_reducer ,
  };
};

const mapDispatchToProps = (dispatch, getState) => {
  console.log(getState)
  console.log(getState.match.params.cityId)
  return ({
    getItineraries:() => dispatch(getItineraries(getState.match.params.cityId))
  });
};


export default connect(mapStateToProps, mapDispatchToProps, getItineraries)(Itinerary);
