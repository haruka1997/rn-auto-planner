/**
 * モジュールのインポート
 */

import React, { Component } from 'react';
import { Container, Header, Content, Text } from 'native-base';
import { DrawerNavigator, StackNavigator } from 'react-navigation';

import HomeScreen from './components/HomeScreen';
import NewTodoScreen from './components/NewTodoScreen';
import TodoDetailScreen from './components/TodoDetailScreen';
import UsualScheduleScreen from './components/UsualScheduleScreen';

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
