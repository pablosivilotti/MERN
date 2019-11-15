import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { addCity } from "../actions/cityActions";
import { Navbar, Form } from 'react-bootstrap'



class HelloRedux extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [],
      name: ''
    }
  }

  async componentDidMount() {
    await axios.get("http://localhost:5000/cities").then(res => {
      const cities = res.data.allCities.map(obj => ({
        id: obj._id,
        name: obj.name,
        country: obj.country
      }));
      // this.setState({ cities });
      //dispatch addCity
      this.props.dispatch(addCity(cities))
    });
  }

  onChange2 = name => event => {
    let value_ = name === ' '
      ? event.target.files[0]
      : event.target.value

    this.setState({ [name]: value_ })
    console.log("onChange")
    console.log(value_)
  }

  render() {

    let state1 = this.state.name;

    return (

      <div>

        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="./cities">Cities Album</Navbar.Brand>
          {/* <Nav className="mr-auto">
          <Nav.Link href="./cities">Cities Album</Nav.Link>

          </Nav> */}
          <Form inline>

          {/* <form className="form-inline search" > */}
            <input className="form-control mr-sm-2" type="search" onChange={this.onChange2('name')} placeholder="Search cities" aria-label="Search" /*value={this.state.filterC} onChange2={console.log(this.state.filterC)}*/ />
          {/* </form> */}
          </Form>

        </Navbar>


        <Table className="table">
          <TableHead>
            <TableRow>
              {/* <TableCell align="center"> Id </TableCell> */}
              <TableCell align="center"> City </TableCell>
              <TableCell align="center"> Country </TableCell>
            </TableRow>
          </TableHead>


          <TableBody>
            {this.props.cities[0] && (this.props.cities[0].filter(function (city) {
              return city.name.toLowerCase().indexOf(state1.toLowerCase()) !== -1
            }).map(function (city, index) {
              return (
                <TableRow key={index}>
                  {/* <TableCell align="center">{city.id}</TableCell> */}
                  <TableCell align="center">{city.name}</TableCell>
                  <TableCell align="center">{city.country}</TableCell>
                </TableRow>
              );
            }))}
          </TableBody>
        </Table>

      </div>
    );
  }
}

const mapStateToProps = state => {
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

export default connect(mapStateToProps)(HelloRedux);
// export default HelloRedux;
