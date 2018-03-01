import React, { Component } from 'react';
import { View, Platform, DatePickerAndroid, DatePickerIOS, StyleSheet } from 'react-native';
import { Form, Text, Container, Header, Left, Right, Body, List, ListItem, Item, Input, Label, Icon, Content, Footer, FooterTab, Button } from 'native-base'; // 2.3.9

import HeaderComponent from '../utils/HeaderComponent';

export default class NewTodoScreen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      deadline: new Date(),
      duration: '0',
      place: '',
      genre: '',
      desc: ''
    };
  }

  render() {
    const { deadline } = this.state;
    return (
        <Container>
          <HeaderComponent title={"New Todo"} navigation={this.props.navigation} />
            <Content>
              <List>
                <ListItem itemDivider>
                  <Text>タイトル</Text>
                </ListItem>                    
                <ListItem >
                  <Input onChangeText={text=>{this.setState({title: text})}} value={this.state.title}/>
                </ListItem>
                <ListItem itemDivider>
                  <Text>締め切り</Text>
                </ListItem>                    
                <ListItem>
                  {Platform.OS === 'ios' ?
                  <DatePickerIOS style={{width: 320}} date={this.state.deadline} onDateChange={date=>{this.setState({deadline: date})}} minuteInterval={5} mode={'date'} />
                    :
                  <Button transparent large onPress={this.openDatePickerAndroid}><Text>{this.state.deadline.getFullYear()}年 {this.state.deadline.getMonth() + 1}月 {this.state.deadline.getDate()}日</Text></Button>}
                </ListItem>
                <ListItem itemDivider>
                  <Text>かかる時間</Text>
                </ListItem>                    
                <ListItem >
                  <Input onChangeText={text=>{this.setState({duration: text})}} value={this.state.duration}/>
                </ListItem>
                <ListItem itemDivider>
                  <Text>場所</Text>
                </ListItem> 
                <ListItem >
                  <Input onChangeText={text=>{this.setState({place: text})}} value={this.state.place}/>
                </ListItem>  
                <ListItem itemDivider>
                  <Text>ジャンル</Text>
                </ListItem> 
                <ListItem >
                  <Input onChangeText={text=>{this.setState({genre: text})}} value={this.state.genre}/>
                </ListItem> 
                <ListItem itemDivider>
                  <Text>説明</Text>
                </ListItem> 
                <ListItem>
                  <Input onChangeText={text=>{this.setState({desc: text})}} value={this.state.desc}/>
                </ListItem>  
              </List>
            </Content>
        </Container>
    )
  }
}
