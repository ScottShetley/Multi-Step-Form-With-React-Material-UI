import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


export class FormPersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter Personal Details" />
                    <TextField
                        hintText="Enter Your Occupation"
                        floatingLabel="First Occupation"
                        onChange={handleChange('Occupation')}
                        defaultValue={values.Occupation}
                    />
                    <br />
                    <TextField
                        hintText="Enter Your City"
                        floatingLabel="City"
                        onChange={handleChange('city')}
                        defaultValue={values.city}
                    />
                    <br />
                    <TextField
                        hintText="Enter Your Bio"
                        floatingLabel="Bio"
                        onChange={handleChange('bio')}
                        defaultValue={values.bio}
                    />
                    <br />
                    <RaisedButton
                        label="continue"
                        primary={true}
                        styles={styles.button}
                        onClick={this.continue}
                    />
                    <RaisedButton
                        label="back"
                        primary={false}
                        styles={styles.button}
                        onClick={this.back}
                    />

                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

//variable
const styles = {
    button: {
        margin: 15
    }
}

export default FormPersonalDetails
