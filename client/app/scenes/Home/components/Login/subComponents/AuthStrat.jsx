import React from 'react';
import {render} from 'react-dom';

export default class AuthStrat extends React.Component {
    transitionFromLogin () {
        document.getElementById('App').className += ' fadeItOut ';
        document.getElementById('Loading').className += ' fadeItIn ';
    }
    render () {
        return (
            <div id='AuthStrat'>
                <a href={"/auth/"+this.props.type}
                   className={"btn btn-block btn-social btn-lg btn-"+this.props.type}
                   onClick={this.transitionFromLogin.bind(this)}>
                    <span className={"fa fa-"+this.props.type}></span> Sign in with {this.props.formattedType}!
                </a>
            </div>
        );
    }
}