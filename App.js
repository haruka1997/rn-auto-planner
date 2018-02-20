/**
 * モジュールのインポート
 */

import React from 'react';
import { Container, Header, Content, Text } from 'native-base';
import { DrawerNavigator } from 'react-navigation';

import HomeScreen from './Components/HomeScreen';
import NewTodoScreen from './Components/NewTodoScreen';
import TodoDetailScreen from './Components/TodoDetailScreen';
import UsualScheduleScreen from './Components/UsualScheduleScreen';

export default DrawerNavigator(
  {
    Home:    { screen: HomeScreen },
    NewTodo: { screen: NewTodoScreen },
    Detail:  { screen: TodoDetailScreen },
    Usual:   { screen: UsualScheduleScreen },
  },
  {
    initialRouteName: 'Home',
  }
);
