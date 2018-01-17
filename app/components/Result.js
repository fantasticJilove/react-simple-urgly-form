import React, { Component } from 'react';

class Result extends Component {

    render() {
        return (
            <div>
                <p>Name - {this.props.result.name}</p>
                <p>LastName - {this.props.result.lastName}</p>
                <p>UserName - {this.props.result.userName}</p>
            </div>
        );
    }
}

export default Result;