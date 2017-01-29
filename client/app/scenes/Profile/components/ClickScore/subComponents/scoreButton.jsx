import React from 'react';
import {render} from 'react-dom';

export default class ScoreButton extends React.Component {
    render () {
        return (
            <button onClick={this.props.onClick}>{this.props.text}</button>
        );
    }
}