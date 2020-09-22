import React, { Component } from 'react';
import { View, Text } from 'react-native';

import {Asset} from 'expo-asset';

const bg = require

import {
  Container,
  ImageContainer,
  Image,
  ButtonsContainer,
  Button,
  ButtonLabel,
  ButtonFacebook,
} from './styles';

export default class LoginAnimation extends Component {

  state = {
    isReady: false,
  }

  render(){
    return (
      <Container>

        <ImageContainer>
          <Image source={require('../../../assets/bg.jpg')}/>
        </ImageContainer>

        <ButtonsContainer>
          <Button>
            <ButtonLabel>Sign in</ButtonLabel>
          </Button>

          <ButtonFacebook>
            <ButtonLabel white={true} >Sign in with Facebook</ButtonLabel>
          </ButtonFacebook>

        </ButtonsContainer>

      </Container>
    );
  }
}