import React, { Component } from 'react';
import { Container, Header, Body, Content, Text } from 'native-base';
import styles from '../../style';

import HeaderComponent from '../utils/HeaderComponent';

export default class UsualScheduleScreen extends Component {

  render() {
    return (
      <Container style={styles.containerStyle}>
        <HeaderComponent title={"Usual"} navigation={this.props.navigation} />
        <Content>
          <Text>Usual Schedule Screen</Text>
        </Content>
      </Container>
    )
  }
}
