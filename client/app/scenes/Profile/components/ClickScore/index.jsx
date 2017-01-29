import React from 'react';
import {render} from 'react-dom';
import axios from 'axios';

import ScoreButton from './subComponents/scoreButton.jsx';

export default class ClickScore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {score: '', loading: true}
        this.incScore = this.incScore.bind(this);
        this.resetScore = this.resetScore.bind(this);
    }
    componentDidMount() {
        axios.get('/_api/click-score')
            .then((result) => {
                 this.setState({score: result.data.click_score, loading: false});
            })
    }
    incScore() {
        axios.post('/_api/click-score')
            .then((result) => {
                 this.setState({score: result.data.click_score});
            })
    }
    resetScore() {
        axios.delete('/_api/click-score')
            .then((result) => {
                 this.setState({score: result.data.click_score});
            })
    }
    loading() {
		return this.state.loading ? 'placeholder' : '';
	}
    render () {
        return (
            <div id='ClickScore'>
                <p onClick={this.incScore}>Score: {this.state.score}</p>
                <ScoreButton text='Click Me!' onClick={this.incScore.bind(this)} />
                <ScoreButton text='Reset' onClick={this.resetScore.bind(this)} />
            </div>
        );
    }
}