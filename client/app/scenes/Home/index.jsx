import React from 'react';
import {render} from 'react-dom';

import Banner from './components/Banner/index.jsx';
import Login from './components/Login/index.jsx'

class Home extends React.Component {
    render () {
        
        //AuthStrats- contains all strategies you want the user to be able to use
        //            that have been impl on the sever. {name: 'Formatted Name'}
        const authStrats = {github: 'Github', 
                            google: 'Google'};
        
        return (
            <div id='Home'>
                <Banner />
                <Login authStrats={authStrats}/>
            </div>
        );
    }
}

render(<Home/>, document.getElementById('App'));