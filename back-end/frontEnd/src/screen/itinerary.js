import React from 'react';
import Footer from '../components/footer';
import { connect } from "react-redux";
import { getItineraries } from "../redux/actions/itineraryActions";
import List from '@material-ui/core/List';



class Itinerary extends React.Component {

  async  componentDidMount() {
    // console.log(this.props)
    await this.props.getItineraries(this.props.match.params.cityId)
  }

  render() {
   
    return (

      <div className="Redux">

        <h1>ITINERARY</h1>


        {this.props.itineraryReducer[0] && this.props.itineraryReducer[0]
          .map(function (itineraries, index) {

            return (

                <List className="List-itineraries" key={index}>
                  {itineraries.title + ", $" + itineraries.price}
                  <br />
                  {itineraries.duration + " Hs"}
                  <br />
                  {itineraries.rating + " pts"}
                  <br />
                  {itineraries.hashtag}
                </List>

            );
          })}

        <Footer />

      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log("state")
  // console.log(state)
  return {
    // cities: state.cityReducer,
    itineraryReducer: state.itineraryReducer
    //otro_reducer: state.otro_reducer ,
  };
};




export default connect(mapStateToProps, { getItineraries })(Itinerary);
