import React, {Component} from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import {Actions, ActionConst} from 'react-native-router-flux';
import {Button,Container,Content,Card,CardItem} from 'native-base';
const logo = require('teachat/images/abc.png');
class HomeLogin extends Component {
    render() {
        return (
            <Container style={{backgroundColor: '#fff',marginTop:'5%'}}>
                <Card>
                    <CardItem>
                        <Image source={logo} style={{height:470,width:360,flex:1}}/>
                    </CardItem>
                    <CardItem>
                        <Text style={{fontWeight: 'bold',fontSize: 20,marginLeft:15}}>Recykle will help you manage your household waste more responsibly</Text>
                    </CardItem>
                    <CardItem>
                        <View style={{justifyContent: 'flex-end',marginLeft:'65%'}}>
                            <Button style={{width:100,justifyContent:'center',backgroundColor:'#50e3c2'}} onPress={() => Actions.Login()}>
                                <Text style={{fontSize:20,color:"white"}}> Next </Text>
                            </Button>
                        </View>
                    </CardItem>
                </Card>

            </Container>
        );
    }
}

export default HomeLogin;

