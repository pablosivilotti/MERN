import React from "react";
import axios from "axios";
import Options from '../../components/options';
import { connect } from "react-redux";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { addCity } from "../actions/cityActions";


class HelloRedux extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: []
      //   name: "",
      //   country: ""
    }
  }


  // componentDidMount() {
  //   this.props.getData();
  // }


  componentDidMount() {
    axios.get("http://localhost:5000/cities").then(res => {
      const cities = res.data.allCities.map(obj => ({
        id: obj._id,
        name: obj.name,
        country: obj.country
      }));
      // this.setState({ cities });
      //dispatch addCity
      this.props.dispatch(addCity(cities))

      // console.log(cities);
    });
  }

  render() {
    // console.log("this.props")
    // console.log(this.props)

    return (


      <div>
        <Options />
        {/* <h1> All Cities! </h1> */}

        <Table className="table">
          <TableHead>
            <TableRow>
              <TableCell align="center"> Id </TableCell>
              <TableCell align="center"> City </TableCell>
              <TableCell align="center"> Country </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {/* {this.state.cities.map(function (city, index) { */}
            {this.props.cities[0] && (this.props.cities[0].map(function (city) {
              return (
                <TableRow key={city._id}>
                  <TableCell align="center">{city.id}</TableCell>
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
    cities: state.city
    //otro_reducer: state.otro_reducer ,
  };
};

// const mapDispatchToProps = {
//   addCity: addCityAction,
//   getCities: getCitiesAction
// };

export default connect(mapStateToProps)(HelloRedux);
// export default HelloRedux;


//filtrar con onChange filter antes del map