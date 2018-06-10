import React, {Component} from 'react';
import {Dimensions, Platform, StatusBar} from 'react-native';
import {Router, Scene,Stack} from 'react-native-router-flux';
import HomeLogin from './scenes/login/';
import Login from './scenes/login/login';


class AppNavigator extends Component {
    render() {
        return (
            <Router>
                <Stack key="root">
                    <Scene panHandlers={null} key="HomeLogin" component={HomeLogin}  hideNavBar initial={true}/>
                    <Scene panHandlers={null} key="Login" component={Login} hideNavBar/>
                </Stack>
            </Router>

        );
    }
}

export default AppNavigator;