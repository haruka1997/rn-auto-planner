/**
 * モジュールのインポート
 */

import React, { Component } from 'react';
import { Container, Header, Content, Text } from 'native-base';
import { DrawerNavigator, StackNavigator } from 'react-navigation';

import HomeScreen from './Components/HomeScreen';
import NewTodoScreen from './Components/NewTodoScreen';
import TodoDetailScreen from './Components/TodoDetailScreen';
import UsualScheduleScreen from './Components/UsualScheduleScreen';

const Drawer = DrawerNavigator(
  {
    Home:    { screen: HomeScreen },
    NewTodo: { screen: NewTodoScreen },
    Usual:   { screen: UsualScheduleScreen },
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Drawer />
    );
  }
}
