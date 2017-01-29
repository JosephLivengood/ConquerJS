import React from 'react';
import {render} from 'react-dom';
import axios from 'axios';

export default class TopClickScorers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {topScorers: [], loading: true}
        this.refreshScores = this.refreshScores.bind(this);
    }
    componentDidMount() {
        this.refreshScores();
        this.interval = setInterval(this.refreshScores.bind(this), 20000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    refreshScores() {
        axios.get('/_api/click-score/top')
            .then((result) => {
                this.setState({topScorers: result.data});
            })
    }
    loading() {
		return this.state.loading ? 'placeholder' : '';
	}
    render () {
        return (
            <div id='TopClickScorers'>
                <h4>Leaderboard(refreshed every 20 seconds):</h4>
                {this.state.topScorers.map(score => (
                    <div className="TopScorerName" key={score.click_score}>{score.name}: {score.click_score}</div>
                ))}
            </div>
        );
    }
}