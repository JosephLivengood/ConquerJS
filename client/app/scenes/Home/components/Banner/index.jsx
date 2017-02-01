import React from 'react';
import {render} from 'react-dom';
import ReactTooltip from 'react-tooltip'

export default class Banner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {banner: '../resources/banner2.png'};
    }
    render () {
        return (
            <div id='Banner'>
                <img className='img-fluid' src={this.state.banner} data-tip data-for='banner' />
                
                <ReactTooltip place="bottom" id='banner' type='info' effect='float'>
                    <span>The last boilerplate you'll ever need for projects big and small, front heavy or back heavy!</span>
                </ReactTooltip>
            </div>
        );
    }
}