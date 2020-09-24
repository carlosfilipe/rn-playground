import React from 'react';
import {
  Container,
  Button,
  ButtonLabel,
} from './styles';

export default function Home({navigation}) {
  return(
    <Container>
      <Button onPress={() => navigation.navigate('LoginAnimation')}>
        <ButtonLabel>Login</ButtonLabel>
      </Button>
      <Button onPress={() => navigation.navigate('CardsAnimation')}>
        <ButtonLabel>Cartões</ButtonLabel>
      </Button>
    </Container>
  );
}