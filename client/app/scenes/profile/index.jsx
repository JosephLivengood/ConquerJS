import React from 'react';
import {render} from 'react-dom';

import ClickScore from './components/ClickScore/index.jsx';
import TopClickScorers from './components/TopClickScorers/index.jsx'
import Account from './components/Account/index.jsx'

class Profile extends React.Component {
    render () {
        return (
            <div id='profile'>
                <Account />
                <ClickScore />
                <TopClickScorers />
            </div>
        );
    }
}

render(<Profile/>, document.getElementById('profileApp'));