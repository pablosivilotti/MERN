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
import Expand from 'react-expand-animated';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav'
import { Navbar } from 'react-bootstrap'
import NavDropdown from 'react-bootstrap/NavDropdown'




class Itinerary extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
        open:false,
        clicked: false,
    }
  };

  componentDidMount() {
    this.props.getItineraries(this.props.match.params.cityId)
  }

  clicAccordion(id) {
    this.setState(() => ({ open: id, clicked: !this.state.clicked }));
    this.props.getActivity(id)
  }


  render() {
    // console.log("this.props")
    // console.log(this)
    let that = this;

    return (

      <div className="Redux">
        <Navbar bg="light" variant="light">
        <Nav.Item>
          <Nav.Link href="/" > Home </Nav.Link>
        </Nav.Item>
        <Nav className="mr-auto">
          <Nav.Link href="/list-cities" > Cities</Nav.Link>
          <Nav.Item>
            <Nav.Link href="/cities" > Album </Nav.Link>
          </Nav.Item>
          <NavDropdown title="Account" id="nav-dropdown">
            <NavDropdown.Item href="/login" >Log in</NavDropdown.Item>
            <NavDropdown.Item href="/createAccount" >Create Account</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar>

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
                      <Media.Body  onClick={() => that.clicAccordion(itineraries._id)}>

                      <Media.Body className="ViewAllAccordion" onClick={()=>{that.clicAccordion(itineraries._id)}}> View All </Media.Body>
                        <Expand open={that.state.open===itineraries._id && that.state.clicked===true}>            
                        <Carousel className="CarouselActivities">
                          {that.props.activityReducer[0] && that.props.activityReducer[0]
                            .map(function (activity, ind) {
                              return activity.image.map(img =>
                                  <Carousel.Item >
                                    <img key={ind} className="d-block rounded activity-pic" src={`http://localhost:5000/city/image/${img}`} alt="activity pic" />
                                  <Carousel.Caption>
                                  <h3 className="text-dark carouselCaption">{img}</h3>
                                  </Carousel.Caption>
                                  </Carousel.Item>
                              )
                            })}
                            </Carousel>
                            <Form>
                              <Form.Label>Comments</Form.Label>
                              <Form.Control type="comment" placeholder="Your comment.." />
                            </Form>
                          <Button className="CloseActivities" onClick={()=>{that.clicAccordion(itineraries._id)}}> Close </Button>
                          {/* <Media.Body onClick={()=>{that.clicAccordion(itineraries._id)}}> Close </Media.Body> */}
                        </Expand>
              
                        </Media.Body>
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
