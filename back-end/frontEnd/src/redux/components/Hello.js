import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
// import {
//             addCityOK as addCityAction,
//             getCities as getCitiesAction
//         } from "../actions/cityActions";

class HelloRedux extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: []
    };
  }

  componentDidMount() {
    axios.get("http://localhost:5000/cities").then(res => {
      const cities = res.data.allCities.map(obj => ({
        id: obj._id,
        name: obj.name,
        country: obj.country
      }));
      this.setState({ cities });
      console.log(cities);
    });
  }

  render() {
 
    return (
      <div>
        <h1> All Cities! </h1>

        <Table className="table">
          <TableHead>
            <TableRow>
              <TableCell align="center"> Id </TableCell>
              <TableCell align="center"> City </TableCell>
              <TableCell align="center"> Country </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {this.state.cities.map(function(city, index) {
              return (
                <TableRow key={index}>
                  <TableCell align="center">{city.id}</TableCell>
                  <TableCell align="center">{city.name}</TableCell>
                  <TableCell align="center">{city.country}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>

        {/* <ul>
          {this.state.cities.map(city => {
            return <li key={city.id}>{city.nombre}</li>;
          })}
        </ul> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cities: state.cityReducer
    //otro_reducer: state.otro_reducer ,
  };
};

// const mapDispatchToProps = {
//   addCity: addCityAction,
//   getCities: getCitiesAction
// };

export default connect(mapStateToProps)(HelloRedux);
// export default HelloRedux;
