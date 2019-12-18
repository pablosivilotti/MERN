import React from 'react';
// import { Link } from 'react-router-dom'
import '../App.css'
import Menu from '../components/menu';
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
import { Link } from 'react-router-dom'
// import Nav from 'react-bootstrap/Nav'
// import { Navbar } from 'react-bootstrap'
// import NavDropdown from 'react-bootstrap/NavDropdown'
import urlServer from '../components/constans'


class Itinerary extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      open: false,
      clicked: false,
      fav: false,
      favIcon: "addFavourite.png"
    }
  };

  componentDidMount() {
    // console.log(this.props)
    this.props.getItineraries(this.props.match.params.cityId)
  }

  clicAccordion(id) {
    this.setState(() => ({ open: id, clicked: !this.state.clicked }));
    this.props.getActivity(id)
  }

  onClickFav() {
    this.setState(() => ({ fav: !this.state.fav }));

    if (this.state.fav === true) {
      this.setState(() => ({ favIcon: "favorite.png" }));
    }
    else
      this.setState(() => ({ favIcon: "addFavourite.png" }));

  }

  render() {
    // console.log("this.props")
    // console.log(this)
    let that = this;

    return (

      <div className="Redux">

        <Menu />

        {this.props.itineraryReducer[0] != null &&
          <Card>
            <Card.Img src={`${urlServer.urlServer}/city/image/${this.props.itineraryReducer[0][0].cityId.url}`} alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title className="titleItin">{this.props.itineraryReducer[0][0].cityId.name}</Card.Title>
            </Card.ImgOverlay>
          </Card>
        }

        <h4 id="Availables-MYT"> Available MYtinerary: </h4>

        {this.props.itineraryReducer[0] && this.props.itineraryReducer[0]
          .map(function (itineraries, index) {
            return (

              <Accordion key={itineraries._id}>
                <Card className="CardItin">
                  <Media >
                    <img
                      className="rounded-circle profile-pic"
                      src={`${urlServer.urlServer}/city/image/${itineraries.profilePic}`}
                      alt="profile pic"
                    />
                    <Media.Body className="Media-Itin">
                      <div className="col-xs-9 flex-column mb-0  d-flex justify-content-around" >
                        {/* <div> */}
                          <div className="col-xs-5 p-3 bd-highlight font-weight-bold"   >
                            <span>{itineraries.title}</span>
                            <span  className="Favourite-icon-span" >
                              <Link to={'#'} onClick={() => { that.onClickFav() }}>
                                <img
                                  className="Favourite-icon"
                                  src={`${urlServer.urlServer}/city/image/${that.state.favIcon}`}
                                  alt="favourite icon"
                                  />
                              </Link>
                            </span>
                          {/* </div> */}
                          {/* <div className="col-xs-3 float-right">
                            <Link to={'#'} onClick={() => { that.onClickFav() }}>
                              <img
                                className="Favourite-icon"
                                src={`${urlServer.urlServer}/city/image/${that.state.favIcon}`}
                                alt="favourite icon"
                              />
                            </Link>
                          </div> */}
                        </div>
                      </div>
                      <div className="p-3 d-flex justify-content-around">
                        <span >Likes: {itineraries.rating}</span>
                        <span >{itineraries.duration} hs</span>
                        <span >$ {itineraries.price}</span>
                      </div>
                      <div className="p-3 d-flex justify-content-around">
                        {itineraries.hashtag.map(function (hashtags, index) {
                          return (
                            <span key={index}>{hashtags}</span>
                          );
                        })}
                      </div>
                      <Media.Body onClick={() => that.clicAccordion(itineraries._id)}>

                        <Media.Body className="ViewAllAccordion" onClick={() => { that.clicAccordion(itineraries._id) }}> View All </Media.Body>
                        <Expand open={that.state.open === itineraries._id && that.state.clicked === true}>
                          <Carousel className="CarouselActivities">
                            {that.props.activityReducer[0] && that.props.activityReducer[0]
                              .map(function (activity, ind) {
                                return activity.image.map(img =>
                                  <Carousel.Item >
                                    <img key={ind} className="d-block rounded activity-pic" src={`${urlServer.urlServer}/city/image/${img}`} alt="activity pic" />
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
                          <br />
                          <Button className="CloseActivities" onClick={() => { that.clicAccordion(itineraries._id) }}> Close </Button>
                          {/* <Media.Body onClick={()=>{that.clicAccordion(itineraries._id)}}> Close </Media.Body> */}
                        </Expand>

                      </Media.Body>
                    </Media.Body>
                  </Media>
                </Card>
              </Accordion>
            );
          })}

        <LinkCities />
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
