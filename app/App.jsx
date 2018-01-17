import React, { Component } from 'react';
import Form from './components/Form';
import Result from './components/Result';
import data from './data/data.json'
class App extends React.Component {
    constructor(){
        super();
        this.state = {
            name: '',
            lastName: '',
            userName: '',
            users: data.users
        }
    }
    createResult(name,lastName,userName){
        this.setState({name});
        this.setState({lastName});
        this.setState({userName});
    }
    render() {
        return (
            <div>
                <Form createResult={this.createResult.bind(this)} result={this.state}/>
                <Result result={this.state}/>
            </div>
        );
    }
}

export default App;