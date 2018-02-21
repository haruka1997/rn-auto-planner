import React, { Component } from 'react';
import {  Card, CardItem, Body, Text } from 'native-base';
import styles from '../../style';

import {dateFormatter} from '../../utils/datetimeFormatter';

export default class CardHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card>
        <CardItem style={styles.home.cardHeaderStyle}>
          <Body>
            <Text style={styles.home.cardHeaderTextStyle}>
              {dateFormatter(this.props.date)}
            </Text>
          </Body>
        </CardItem>
      </Card>
    );
  }
}
