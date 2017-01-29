import React from 'react';
import {render} from 'react-dom';
import axios from 'axios';

export default class ProfileSideBar extends React.Component {
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
            <div id='ProfileSideBar'>
                <img src={this.state.user.photo} className={'img-thumbnail ' + this.loading()} />
                <h2 className={this.loading()}>{this.state.user.name}</h2>
                <a id='logout' href='/logout'>Logout</a>
            </div>
        );
    }
}