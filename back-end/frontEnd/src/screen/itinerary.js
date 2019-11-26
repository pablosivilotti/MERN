import React from 'react';
import '../App.css'
import Footer from '../components/footer';
import { connect } from "react-redux";
import { getItineraries } from "../redux/actions/itineraryActions";
// import List from '@material-ui/core/List';
import Card from 'react-bootstrap/Card'
// import Collapse from 'react-bootstrap/Collapse'
import Accordion from 'react-bootstrap/Accordion'
import Media from 'react-bootstrap/Media'
// import img1 from '../img/GaudiLover.png'


class Itinerary extends React.Component {

  async  componentDidMount() {
    await this.props.getItineraries(this.props.match.params.cityId)
  }

  //LLAMAR A GETACTIVITY AL CLICKEAR EN VIEW ALL PARA MOSTRAR LAS IMAGENES

  render() {

    return (

      <div className="Redux">

        {this.props.itineraryReducer[0] != null && 
        <div> 
          {/* <h1> {this.props.itineraryReducer[0][0].cityId.name} </h1> */}
          <img src={`http://localhost:5000/city/image/${this.props.itineraryReducer[0][0].cityId.url}`} className="IMG-CITY-TITLE" alt="CITY"></img>
        </div>
        }

        <h4 id="Availables-MYT"> Available MYtinerary: </h4>

        {this.props.itineraryReducer[0] && this.props.itineraryReducer[0]
          .map(function (itineraries, index) {
            return (

              <Card key={index}>

                <Media >
                  <img
                    className="rounded-circle"
                    src={`http://localhost:5000/city/image/${itineraries.profilePic}`}
                    alt="profile pic"
                  />
                  <Media.Body className="Media-Itin">
                    <h5>{itineraries.title}</h5>
                    <h6> {"Likes: " + itineraries.rating + "     " + itineraries.duration + " Hs       $" + itineraries.price} </h6>
                    <h6> {itineraries.hashtag} </h6>
                    <Accordion defaultActiveKey="0">
                      <Media.Body className="ViewAllAccordion">
                        <Accordion.Toggle as={Media.Body} variant="link" eventKey="1">
                          v View All v
                       </Accordion.Toggle>
                      </Media.Body>
                      <Accordion.Collapse eventKey="1">
                        <Media.Body>ACTIVITIES</Media.Body>
                      </Accordion.Collapse>
                    </Accordion>
                  </Media.Body>
                </Media>
              </Card>

            );
          })}

        <Footer />

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    itineraryReducer: state.itineraryReducer
    //otro_reducer: state.otro_reducer ,
  };
};




export default connect(mapStateToProps, { getItineraries })(Itinerary);
