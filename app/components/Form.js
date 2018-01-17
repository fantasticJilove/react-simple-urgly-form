import React, { Component } from 'react';

class Form extends Component {
    handleSubmit(event){
        // event.preventDefault();
        let name = document.getElementById('name').value;
        let lastName = document.getElementById('lastName').value;
        let userName = document.getElementById('userName').value;
        let nameArray = this.props.result.users.map(a => a.name);

        //check for duplication
        if(nameArray.indexOf(name) > -1){
            alert("This name has been used");
            document.getElementById('name').value = '';
            return;
        }
        
        this.props.createResult(name,lastName,userName);
    }

    render() {
        return (
                <form onSubmit={(event) => {this.handleSubmit(event)}}>
                    <label htmlFor='name'/>Name
                    <input type='text' id='name' required></input>
                    <label htmlFor='lastName'/>LastName
                    <input type='text' id='lastName' ></input>
                    <label htmlFor='userName'/>User Name
                    <input type='text' id='userName' ></input>
                    <label htmlFor='password'/>Password
                    <input type='password' id='password' ></input>
                    <button type='submit'>Click</button>
                </form>
        );
    }
}

export default Form;