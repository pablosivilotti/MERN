import React from 'react';
// import { Link } from 'react-router-dom'
import '../App.css'
import Footer from '../components/footer';
import { connect } from "react-redux";
import { getItineraries } from "../redux/actions/itineraryActions";
import { getActivity } from "../redux/actions/activityActions";
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'
import Media from 'react-bootstrap/Media'


class Itinerary extends React.Component {

  async  componentDidMount() {
    await this.props.getItineraries(this.props.match.params.cityId)
    await this.props.getActivity(this.props.itineraryReducer[0][0]._id)
  }

  async clicAccordion() {
    // await this.props.getActivity(this.props.itineraryReducer[0][0]._id)
    console.log("clic")
    console.log(this)
  }

  async componentDidUpdate() {
    // this.clicAccordion()
  }

  render() {

    console.log("this.props")
    console.log(this)
    return (

      <div className="Redux">

        {this.props.itineraryReducer[0] != null &&
          <Card>
            <Card.Img src={`http://localhost:5000/city/image/${this.props.itineraryReducer[0][0].cityId.url}`} alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title className="titleItin" onClick={this.clicAccordion}>{this.props.itineraryReducer[0][0].cityId.name}</Card.Title>
            </Card.ImgOverlay>
          </Card>
        }

        <h4 id="Availables-MYT"> Available MYtinerary: </h4>

        {this.props.itineraryReducer[0] && this.props.itineraryReducer[0]
          .map(function (itineraries, index) {
            return (

              <Card key={index}>

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
                    <Accordion defaultActiveKey="0" onClick={() => console.log("CLICC")}/*onClick={() => this.handleClick()}*/>
                      <Media.Body className="ViewAllAccordion" >
                        <Accordion.Toggle as={Media.Body} variant="link" eventKey="1"  >
                          {/* <Link to={`./city/activity/${itineraries._id}`}> v View All v</Link> */}
                          v View All v
                       </Accordion.Toggle>
                      </Media.Body>
                      <Accordion.Collapse eventKey="1">
                        <Media.Body>
                          {/* ACTIVITIES */}
                          <img
                                className="rounded activity-pic"
                                src={`http://localhost:5000/city/image/barcelonaBar.jpg`}
                                alt="activity pic"
                              />
                        </Media.Body>
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
    itineraryReducer: state.itineraryReducer,
    activityReducer: state.activityReducer
    //otro_reducer: state.otro_reducer ,
  };
};

export default connect(mapStateToProps, { getItineraries, getActivity })(Itinerary);
