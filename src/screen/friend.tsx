import React, { Component } from 'react';
import { Container } from 'native-base';
import HeaderTop from '../components/header';
import BottomTab from '../components/tab';

interface Props {
  navigation: any
}

export default class Friend extends Component<Props> {
  render() {
    return (
      <Container>
        <HeaderTop />
        <Container>
        </Container>
        <BottomTab navigation={this.props.navigation} activeTab={2}/>
      </Container>
    );
  }
}