import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';

//method for a form and fields

export class UserForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: '',
    }

    // method to proceed to the next step using arrow function. 
    // taking the step out of the state using destructuring 
    //we defined the state and step above. const pulls it out and makes it a variable
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }


    //method to go back a step. Same as above but renamed and a minus on the step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }


    //method to handle fields change
    handleChange = input => e => {
        this.setState({ [input]: e.target.value }); // e = event parameter
    }


    render() {
        //deconstructing to display correct component. Pulling out state and all fields

        const { step } = this.state;
        const { firstName, lastName, email, occupation, city, bio } = this.state;
        //variable to pass values into each components 
        const values = { firstName, lastName, email, occupation, city, bio }

        switch (step) {
            case 1:
                return (
                    <FormUserDetails  //component not created yet
                        //props
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 2:
                return (
                    <FormPersonalDetails  //component not created yet
                        //props
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 3:
                return (
                    <Confirm  //component not created yet
                        //props
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                    />
                );
            case 4:
                return <Success />;
        }


    }
}

export default UserForm
