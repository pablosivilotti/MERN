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
import Carousel from 'react-bootstrap/Carousel'


class Itinerary extends React.Component {

  async  componentDidMount() {
    await this.props.getItineraries(this.props.match.params.cityId)
  }

  clicAccordion(id) {
    this.props.getActivity(id)
    console.log("this.props CLIC")
    console.log(this.props)
    // {this.props.activityReducer[0] && this.props.activityReducer[0]
    //   .map(function (activity, index) {
    //     return (
    //       <img key={index}> {activity.image}</img>
    //     );
    //   })}
  }


  render() {

    console.log("this.props")
    console.log(this)
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
                    <Accordion defaultActiveKey="0" /*onClick={() => that.clicAccordion(itineraries._id)}*/>
                      <Media.Body className="ViewAllAccordion" >
                        <Accordion.Toggle as={Media.Body} variant="link" eventKey="1" onClick={() => that.clicAccordion(itineraries._id)}>
                          v View All v
                       </Accordion.Toggle>
                      </Media.Body>
                      <Accordion.Collapse eventKey="1">
                        <Media.Body>
                          {/* ACTIVITIES */}
                          {/* <img
                                className="rounded activity-pic"
                                src={`http://localhost:5000/city/image/barcelonaBar.jpg`}
                                alt="activity pic"
                              /> */}
                          {/* {that.props.activityReducer[0] && that.props.activityReducer[0]
                            .map(function (activity, index) {
                              activity.image.map( function (imagen) {

                                return (
                                  <img className="activity-pic" key={index} src={`http://localhost:5000/city/image/${imagen}`} />
                                );

                              })
                              
                            })} */}
                          {that.props.activityReducer[0] && that.props.activityReducer[0]
                            .map(function (activity, ind) {
                              /*console.log(activity.image)
                                return (
                                 <img className="activity-pic" key={index} src={`http://localhost:5000/city/image/${activity.image}`} />
                              );*/
                              return activity.image.map(img =>
                                <Carousel key={ind}>
                                  <Carousel.Item>
                                    <img className="d-block rounded activity-pic" src={`http://localhost:5000/city/image/${img}`} alt="activity pic" />
                                  </Carousel.Item>
                                </Carousel>
                              )

                            })}


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
