import React from 'react';
import {render} from 'react-dom';
import axios from 'axios';

export default class Account extends React.Component {
    constructor(props) {
        super(props);
        this.state = {user: {}, loading: true};
    }
    componentDidMount() {
        axios.get('/_api/me')
            .then((result) => {
                this.setState({user: result.data.user, loading: false});
            })
    }
    loading() {
		return this.state.loading ? 'placeholder' : '';
	}
    render () {
        return (
            <div id='Account'>
                <h4>MongoDB Doc:</h4>
                <div>id: <span className={this.loading()}>{this.state.user.id}</span></div>
                <div>name: <span className={this.loading()}>{this.state.user.name}</span></div>
                <div>email: <span className={this.loading()}>{this.state.user.email}</span></div>
                <div>photo: <span className={this.loading()}>{this.state.user.photo}</span></div>
                <div>created_on: <span className={this.loading()}>{this.state.user.created_on}</span></div>
                <div>provider: <span className={this.loading()}>{this.state.user.provider}</span></div>
                <div>role: <span className={this.loading()}>{this.state.user.role}</span></div>
                <div>last_login: <span className={this.loading()}>{this.state.user.last_login}</span></div>
                <div>login_count: <span className={this.loading()}>{this.state.user.login_count}</span></div>
            </div>
        );
    }
}