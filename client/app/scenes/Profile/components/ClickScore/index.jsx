import React from 'react';
import {render} from 'react-dom';
import axios from 'axios';
import ReactTooltip from 'react-tooltip'
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
                <p data-tip data-for='clickScoreTT' className={this.loading()}><b>Click Score:</b> {this.state.score}</p>
                <button className='btn btn-success' onClick={this.incScore}>+SCORE+</button> 
                <button className='btn btn-danger' onClick={this.resetScore}>Reset</button>
                
                <ReactTooltip place="bottom" id='clickScoreTT' type='info' effect='solid'>
                    <ol>
                        <li>Click the button</li>
                        <li>???</li>
                        <li>PROFIT!</li>
                    </ol>
                    <p>(Then automate it you full stack engineer you.)</p>
                </ReactTooltip>
            </div>
        );
    }
}