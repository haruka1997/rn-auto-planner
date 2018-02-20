import React, { Component } from 'react';
import { Container, Header, Body, Content, Text } from 'native-base';
import styles from '../style';

import HeaderComponent from './utils/HeaderComponent';

export default class HomeScreen extends Component {

  render() {
    return (
      <Container style={styles.containerStyle}>
        <HeaderComponent title={"Home"} />
        <Content>
          <Text>Home Screen</Text>
        </Content>
      </Container>
    )
  }
}
