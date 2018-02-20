import React, { Component } from 'react';
import { Container, Header, Body, Content, Text } from 'native-base';
import styles from '../style';

import HeaderComponent from './utils/HeaderComponent';

export default class NewTodoScreen extends Component {
  render() {
    return (
      <Container style={styles.containerStyle}>
        <HeaderComponent title={"New Todo"} />
        <Content>
          <Text>New Todo Screen</Text>
        </Content>
      </Container>
    )
  }
}
