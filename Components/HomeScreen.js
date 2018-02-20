import React, { Component } from 'react';
import { Container, Header, Body, Content, Button, Text, Card, CardItem, Right } from 'native-base';
import styles from '../style';

import HeaderComponent from './utils/HeaderComponent';
import dateFormatter from '../utils/dateFormatter';

// サンプルデータ
import sampleTodos from '../sample/sampleTodos';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: sampleTodos
    };
  }

  convertTodosToCards(todos) {
    // 重複を除きつつ日付を抽出する
    const extractDistinctDates = todos => {
      let dates = [];

      for (let todo of todos) {
        if (!dates.includes(todo.date)) {
          dates.push(todo.date);
        }
      }

      return dates;
    };

    const distinctDates = extractDistinctDates(todos).sort();

    let todoCards = [];
    let key = 0;

    for (let distinctDate of distinctDates) {
      // タイトル用の日付
      todoCards.push(
        <Text key={key.toString()}>{dateFormatter(distinctDate)}</Text>
      );
      key++;

      // タイトルに設定されている日付と同じ日付である
      // Todoをカードとして書き出す
      for (let todo of todos) {
        if (todo.date === distinctDate) {
          todoCards.push(
            <Card key={key.toString()}>
              <CardItem header>
                <Body>
                  <Text>{todo.title}</Text>
                </Body>
                <Right>
                  <Text>{todo.genre}</Text>
                </Right>
              </CardItem>
              <CardItem>
                <Body>
                  <Text>{todo.desc}</Text>
                </Body>
              </CardItem>
            </Card>
          );
          key++;
        }
      }
    }

    return todoCards;
  }

  render() {
    const todoCards = this.convertTodosToCards(this.state.todos);
    return (
      <Container style={styles.containerStyle}>
        <HeaderComponent title={"Home"} navigation={this.props.navigation} />
        <Content>
          {todoCards}
        </Content>
      </Container>
    )
  }
}
