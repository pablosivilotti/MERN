import React from "react";
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import { getCities } from "../actions/cityActions";
import List from '@material-ui/core/List';
import { Navbar, Form } from 'react-bootstrap'
import FormControl from 'react-bootstrap/FormControl'
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
    let value_ = name === ''
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
        <Navbar>
          <Form inline>
            <FormControl type="search" onChange={this.onChange2('name')} placeholder="Search cities" aria-label="Search" className="mr-sm-2 Search" />
          </Form>
        </Navbar>

        {this.props.cities[0] && (this.props.cities[0].filter(function (city) {
          return city.name.toLowerCase().indexOf(state1.toLowerCase()) !== -1
        }).map(function (city, index) {

          // let name = city.name + ", " + city.country
          // console.log(name);

          return (
            <List className="List-cities" key={index}>
              <Link to={`./itineraries/${city._id}`} className="Link-Cities">
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

  return {
    cities: state.cityReducer,
  };
};

// const mapDispatchToProps = {
//   addCity: addCityAction,
//   getCities: getCitiesAction
// };


export default connect(mapStateToProps, { getCities })(CitiesRedux);
