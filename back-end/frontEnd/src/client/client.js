// import React from 'react';
import axios from 'axios';
import '../App.css';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';


const requestHelper = axios.create({
    baseURL: 'http://localhost:5000',
});


export default {
    cities: {
        get: () => requestHelper({
            url: 'cities',
            method: 'get',
        }),

        create: data => requestHelper({
            url: 'cities',
            method: 'post',
            data,
        })
    }
}

//Separar la conexion con el Componente
// class BackEndClient extends React.Component {

//     constructor() {
//         super();
//         this.state = {
//             cities: []
//         }
//     }

//     componentDidMount() {

//         this.getCities();

//     }

//     getCities() {

//         axios.get("http://localhost:5000/cities")
//             .then(res => {
//                 const cities = res.data.allCities.map(obj => ({ id: obj._id, name: obj.name, country: obj.country }));
//                 this.setState({ cities });
//                 // console.log(cities)
//             });
//     }

//     render() {

//         return (
//             <div>
//                 <Table className="table">
//                     <TableHead>
//                         <TableRow>
//                             <TableCell align="center"> Id </TableCell>
//                             <TableCell align="center"> City </TableCell>
//                             <TableCell align="center"> Country </TableCell>
//                         </TableRow>
//                     </TableHead>
//                     <TableBody>
//                         {this.state.cities.map(function (city, index) {
//                             return (
//                                 <TableRow key={index}>
//                                     <TableCell align="center">{city.id}</TableCell>
//                                     <TableCell align="center">{city.name}</TableCell>
//                                     <TableCell align="center">{city.country}</TableCell>
//                                 </TableRow>
//                             )
//                         })}
//                     </TableBody>

//                 </Table>
                
//             </div>
//         )}
// }

// export default BackEndClient;
