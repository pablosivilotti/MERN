import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { action1 } from '../actions/actions';

class HelloWorld extends Component {
    // state = {}

    // componentDidMount() {
    //     this.props.action1(777);
    // }

    render() {
        // console.log(this.props);

        return (
            <div>
                <h1> Hello World with Redux! </h1>
            </div>
        );
    }
}

// const mapStateToProps = (state) => {
//     return state;
// };

// const mapDispatchToProps = {
//     action1,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(HelloWorld);
export default HelloWorld;