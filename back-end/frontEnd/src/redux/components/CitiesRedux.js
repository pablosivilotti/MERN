import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import { getCities } from "../actions/cityActions";
import { Navbar, Form } from 'react-bootstrap'
import List from '@material-ui/core/List';
import '../../App.css'

class CitiesRedux extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // cities: [],
      name: ''
    }
  }

  componentDidMount() {
    this.props.getCities();
  }

  onChange2 = name => event => {
    let value_ = name === ' '
      ? event.target.files[0]
      : event.target.value

    this.setState({ [name]: value_ })
    // console.log("onChange")
    // console.log(value_)
  }

  render() {

    let state1 = this.state.name;

    return (

      <div>

        <Navbar bg="light" expand="lg" className="Search">
          <Navbar.Brand href="./cities">Cities Album</Navbar.Brand>
          {/* <Nav className="mr-auto">
          <Nav.Link href="./cities">Cities Album</Nav.Link>

          </Nav> */}
          <Form inline>

            {/* <form className="form-inline search" > */}
            <input className="form-control mr-sm-2" type="search" onChange={this.onChange2('name')} placeholder="Search cities" aria-label="Search" />
            {/* </form> */}
          </Form>

        </Navbar>


        {this.props.cities[0] && (this.props.cities[0].filter(function (city) {
          return city.name.toLowerCase().indexOf(state1.toLowerCase()) !== -1
        }).map(function (city, index) {
          return (
            <List className="List-cities" key={index}>
              <Link to={'./itinerary'} className="Link-Cities">
                {city.name + ", " + city.country}
              </Link>
            </List>
          );
        }))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log("state")
  // console.log(state)
  return {
    cities: state.CityReducer
    //otro_reducer: state.otro_reducer ,
  };
};

// const mapDispatchToProps = {
//   addCity: addCityAction,
//   getCities: getCitiesAction
// };


export default connect(mapStateToProps, { getCities })(CitiesRedux);
// export default CitiesRedux;
