import React, { Component } from 'react';
import {  Card, CardItem, Body, Text, Right } from 'native-base';
import styles from '../../style';

import {timeFormatter} from '../../utils/datetimeFormatter';

export default class TodoCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card transparent>
        <CardItem header>
          <Body>
            <Text>{this.props.params.title}</Text>
            <Text note>{timeFormatter(this.props.params.time)}</Text>
          </Body>
          <Right>
            <Text>{this.props.params.genre}</Text>
          </Right>
        </CardItem>
        <CardItem>
          <Body>
            <Text>{this.props.params.desc}</Text>
          </Body>
        </CardItem>
      </Card>
    );
  }
}
