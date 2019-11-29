import React from 'react';
// import { Link } from 'react-router-dom'
import '../App.css'
import Footer from '../components/footer';
import LinkCities from '../components/link-Cities';
import { connect } from "react-redux";
import { getItineraries } from "../redux/actions/itineraryActions";
import { getActivity } from "../redux/actions/activityActions";
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'
import Media from 'react-bootstrap/Media'
import Carousel from 'react-bootstrap/Carousel'


class Itinerary extends React.Component {

  async  componentDidMount() {
    await this.props.getItineraries(this.props.match.params.cityId)
  }

  clicAccordion(id) {
    this.props.getActivity(id)
  }


  render() {
    // console.log("this.props")
    // console.log(this)
    let that = this;

    return (

      <div className="Redux">

        {this.props.itineraryReducer[0] != null &&
          <Card>
            <Card.Img src={`http://localhost:5000/city/image/${this.props.itineraryReducer[0][0].cityId.url}`} alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title className="titleItin">{this.props.itineraryReducer[0][0].cityId.name}</Card.Title>
            </Card.ImgOverlay>
          </Card>
        }

        <h4 id="Availables-MYT"> Available MYtinerary: </h4>

        {this.props.itineraryReducer[0] && this.props.itineraryReducer[0]
          .map(function (itineraries, index) {
            return (

              <Accordion key={index}>
                <Card  className="CardItin">
                  <Media >
                    <img
                      className="rounded-circle profile-pic"
                      src={`http://localhost:5000/city/image/${itineraries.profilePic}`}
                      alt="profile pic"
                    />
                    <Media.Body className="Media-Itin">
                      <h5>{itineraries.title}</h5>
                      <h6> {"Likes: " + itineraries.rating + "     " + itineraries.duration + " Hs       $" + itineraries.price} </h6>
                      <h6> {itineraries.hashtag} </h6>
                      <Media.Body className="ViewAllAccordion" onClick={() => that.clicAccordion(itineraries._id)}>
                        <Accordion.Toggle as={Media.Body} variant="link" eventKey="0" >
                          v View All v
                       </Accordion.Toggle>
                      </Media.Body>
                      <Accordion.Collapse eventKey="0">
                        <Media.Body>
                          Activities
                          {that.props.activityReducer[0] && that.props.activityReducer[0]
                            .map(function (activity, ind) {
                              return activity.image.map(img =>
                                // <Carousel>
                                //   <Carousel.Item >
                                <div>
                                  <img key={ind} className="d-block rounded activity-pic" src={`http://localhost:5000/city/image/${img}`} alt="activity pic" />
                                </div>
                                //   </Carousel.Item>
                                // </Carousel>
                              )
                            })}
                            Comments
                            
                        </Media.Body>
                      </Accordion.Collapse>
                    </Media.Body>
                  </Media>
                </Card>
              </Accordion>
            );
          })}

        <LinkCities/>
        <Footer />

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    itineraryReducer: state.itineraryReducer,
    activityReducer: state.activityReducer
    //otro_reducer: state.otro_reducer ,
  };
};

export default connect(mapStateToProps, { getItineraries, getActivity })(Itinerary);
