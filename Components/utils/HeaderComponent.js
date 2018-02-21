/**
 * モジュールのインポート
 */
import React, { Component } from 'react';
import { Header, Body, Content, Text, Left, Button, Icon } from 'native-base';

import styles from '../../style';

export default class HeaderComponent extends Component {
  constructor(props) {
    super(props);

    this.render = this.render.bind(this);
  }

  render() {
    return (
      <Header style={styles.header.headerStyle}>
        <Left>
          <Button
            transparent
            onPress={() => this.props.navigation.navigate("DrawerOpen")}>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body style={styles.header.bodyStyle}>
          <Text style={styles.header.textStyle}>
            {this.props.title}
          </Text>
        </Body>
      </Header>
    )
  }
}
