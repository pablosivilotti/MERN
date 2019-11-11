import React from 'react';
import '../App.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';



class SectionCitiesBD extends React.Component {

    render() {
        return (
            <div className="SectionCitiesBD">
                <Table className="table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center"> Id </TableCell>
                            <TableCell align="center"> City </TableCell>
                            <TableCell align="center"> Country </TableCell>
                        </TableRow>
                    </TableHead>
                    
                    <TableBody>
                        {this.state.cities.map(function (city, index) {
                            return (
                                <TableRow key={index}>
                                    <TableCell align="center">{city.id}</TableCell>
                                    <TableCell align="center">{city.name}</TableCell>
                                    <TableCell align="center">{city.country}</TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>

                </Table>
            </div>
        );
    }

}

export default SectionCitiesBD;