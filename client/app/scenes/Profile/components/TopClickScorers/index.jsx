import React from 'react';
import {render} from 'react-dom';
import axios from 'axios';
import ReactTooltip from 'react-tooltip'
import ScorerLine from './subComponents/ScorerLine.jsx';

export default class TopClickScorers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {topScorers: []}
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
    render () {
        return (
            <div id='TopClickScorers'>
                <div className='container'>
                    <div className='row title'>
                        <p className='col-12' data-tip data-for='leaderBoard'>Leaderboard</p>
                    </div>
                    {this.state.topScorers.map((score, index) => (
                        <ScorerLine key={index} rank={index+1} name={score.name} score={score.click_score} />
                    ))}
                </div>
                
                <ReactTooltip place="bottom" id='leaderBoard' type='warning' effect='solid'>
                    <span>Auto-refresh on 20 seconds!</span>
                </ReactTooltip>
            </div>
        );
    }
}