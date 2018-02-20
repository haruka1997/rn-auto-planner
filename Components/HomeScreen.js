import React, { Component } from 'react';
import { Container, Header, Body, Content, Button, Text } from 'native-base';
import styles from '../style';

import HeaderComponent from './utils/HeaderComponent';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container style={styles.containerStyle}>
        <HeaderComponent title={"Home"} navigation={this.props.navigation} />
        <Content>
          <Text>Home Screen</Text>
        </Content>
      </Container>
    )
  }
}
