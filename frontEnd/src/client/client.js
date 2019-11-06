import React from 'react';
import axios from 'axios';

class BackEndClient extends React.Component {

    async getCities() {

        console.log("response.data")
        
        const response = await axios.get("http://localhost:5000/cities")
        // .set('Accept','application/json')
        
        // console.log(response.allCities)

        // .then(response => this.setState({cities : response.data}))
        
    }

    render(){

        return (
            
            <div>
                <h1>CIUDADES</h1>
                <button className='button' onClick={this.getCities}> Listado de ciudades </button>
                {/* <p> {cities} </p> */}
            </div>
        )
    }
}

export default BackEndClient;
