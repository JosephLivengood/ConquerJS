import React from 'react';
import {render} from 'react-dom';
import axios from 'axios';

export default class ScorerLine extends React.Component {
    render () {
        return (
            <div className='row ScorerLine'>
                <div className='col-3 rank'>
                    {this.props.rank}
                </div>
                <div className='col-6 name'>
                    {this.props.name}
                </div>
                <div className='col-3 score'>
                    {this.props.score}
                </div>
            </div>
        );
    }
}