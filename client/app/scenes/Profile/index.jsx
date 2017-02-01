import React from 'react';
import {render} from 'react-dom';

import ClickScore from './components/ClickScore/index.jsx';
import TopClickScorers from './components/TopClickScorers/index.jsx'
import Account from './components/Account/index.jsx'
import ProfileSideBar from './components/ProfileSideBar/index.jsx';


class Profile extends React.Component {
    componentDidMount () {
        document.getElementById('profileApp').className += ' fadeItIn';
    }
    render () {
        return (
            <div id='Profile' className='container'>
                <div className='row'>
                    <div className='col-sm-2'>
                        <ProfileSideBar />
                    </div>
                    <div className='col-sm-7'>
                        <ClickScore />
                        <Account />
                    </div>
                    <div className='col-sm-3'>
                        <TopClickScorers />
                    </div>
                </div>
            </div>
        );
    }
}

render(<Profile/>, document.getElementById('profileApp'));