import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCity as addCityAction, getCities as getCitiesAction } from '../actions/cityActions'

class HelloRedux extends Component {
    state = {}

    componentDidMount() {
        const { getCitiesAction} = this.props;

        getCites();
    }

    render() {
        const {
            city,
            getCities,
        } = this.props;


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