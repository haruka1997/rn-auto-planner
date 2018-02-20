/**
 * モジュールのインポート
 */
import React, { Component } from 'react';
import { Header, Body, Content, Text } from 'native-base';
import styles from '../../style';

export default class HeaderComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Header>
        <Body style={styles.header.bodyStyle}>
          <Text style={styles.header.textStyle}>
            {this.props.title}
          </Text>
        </Body>
      </Header>
    )
  }
}
