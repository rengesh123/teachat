import React, { Component } from 'react';
import { StyleProvider, View } from 'native-base';
import App from './App';

export default class Setup extends Component {
    
    render() {
        return (
            <View style={{ flex: 1 }}>
                <App />
            </View>
        );
    }
}
