import React, { Component } from 'react';
import { Container, Header, Body, Content, Text } from 'native-base';
import styles from '../../style';

import HeaderComponent from '../utils/HeaderComponent';

export default class TodoDetailScreen extends Component {
  render() {
    return (
      <Container style={styles.containerStyle}>
        <HeaderComponent title={"Detail"} navigation={this.props.navigation} />
        <Content>
          <Text>Detail Screen</Text>
        </Content>
      </Container>
    )
  }
}
