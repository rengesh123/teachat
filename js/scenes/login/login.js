import React, { Component } from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import {Actions, ActionConst} from 'react-native-router-flux';
import { Container, Header, Content, Form, Item, Input, Label,Picker,Button } from 'native-base';
export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected2: undefined
        };
    }
    onValueChange2(value: string) {
        this.setState({
            selected2: value
        });
    }


    render() {
        return (
            <Container style={{backgroundColor: '#fff'}}>
                <Content style={{marginTop:'10%'}}>
                    <Form>
                        <Item floatingLabel>
                            <Label>Name</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel last>
                            <Label>email</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Phone</Label>
                            <Input />
                        </Item>
                        <Picker
                            mode="dropdown"
                            style={{marginLeft:'2%',marginTop:'5%'}}
                            placeholder="Select One"
                            note={false}
                            selectedValue={this.state.selected2}
                            onValueChange={this.onValueChange2.bind(this)}
                        >
                            <Item label="Chennai" value="key0" />
                            <Item label="Banglore" value="key1" />
                            <Item label="Hyderabad" value="key2" />
                            <Item label="Delhi" value="key3" />
                            <Item label="Mumbai" value="key4" />
                        </Picker>
                        <View style={{justifyContent: 'flex-end',marginLeft:'25%',marginTop:'5%'}}>
                            <Button style={{width:200,justifyContent:'center',backgroundColor:'#50e3c2'}} onPress={() => Actions.Chat()}>
                                <Text style={{fontSize:20,color:"white"}}> Register </Text>
                            </Button>
                        </View>

                    </Form>
                </Content>
            </Container>
        );
    }
}