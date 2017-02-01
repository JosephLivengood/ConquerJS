import React from 'react';
import {render} from 'react-dom';

import AuthStrat from './subComponents/AuthStrat.jsx';

export default class Login extends React.Component {
    render () {
        const _this = this;
        return (
            <div id='Login'>
                {Object.keys(this.props.authStrats).map((key) => (
                    <AuthStrat key={key} type={key} formattedType={_this.props.authStrats[key]} />
                ))}
            </div>
        );
    }
}