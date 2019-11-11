import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCityOK as addCityAction, getCities as getCitiesAction } from '../actions/cityActions'
import api from '../../client/client'

class HelloRedux extends Component {
    state = {}

    componentDidMount() {
        console.log(api.cities.get());
        const { getCities } = this.props;
        // console.log(getCitiesOK);
        getCities();
    }

    render() {
        const {
            cities,
            getCities,
        } = this.props;

        console.log(cities);

        return (
            <div>
                <h1> Hello World with Redux! </h1>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        city: state.city,
        //otro_reducer: state.otro_reducer ,
    };
};

const mapDispatchToProps = {
    addCity: addCityAction,
    getCities: getCitiesAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(HelloRedux);
// export default HelloRedux;