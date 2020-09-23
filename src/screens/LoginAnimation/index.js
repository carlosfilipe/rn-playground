import React, { Component } from "react";
import { View, Text, Dimensions } from "react-native";

import { Asset } from "expo-asset";

const bg = require;

import Svg, { Image, Circle, ClipPath } from "react-native-svg";

import Animated, { Easing, interpolate } from "react-native-reanimated";

import { TapGestureHandler, State } from "react-native-gesture-handler";

import {
  Container,
  ImageContainer,
  TopImage,
  ButtonsContainer,
  Button,
  ButtonLabel,
  ButtonFacebook,
  LoginFormContainer,
  Input,
  CloseButton,
  CloseButtonLabel,
} from "./styles";

const { width, height } = Dimensions.get("window");

export default class LoginAnimation extends Component {
  constructor(props) {
    super(props);

    this.buttonOpacity = new Animated.Value(1);

    this.buttonY = interpolate(this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [100, 0],
    });

    this.bgY = interpolate(this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [-height / 3 -50, 0],
    });

    this.textInputOpacity = interpolate(this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [1, 0],
    });

    this.textInputZindex = interpolate(this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [1, -1],
    });

    this.textInputY = interpolate(this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [0, 100],
    });
    this.rotateCross = interpolate(this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [180, 360],
    });
  }

  state = {
    isReady: false,
  };

  onStateChange = (event) => {
    // console.log(event.nativeEvent.state);
    if (event.nativeEvent.state == State.END) {
      console.log("acabou o evento");
      this.runAnimation();
    }
  };

  onCloseStateChange = (event) => {
    // console.log(event.nativeEvent.state);
    if (event.nativeEvent.state == State.END) {
      console.log("acabou o evento");
      this.closeAnimation();
    }
  };

  runAnimation() {
    Animated.timing(this.buttonOpacity, {
      duration: 300,
      toValue: 0,
      easing: Easing.ease,
    }).start(() => {});
  }

  closeAnimation() {
    Animated.timing(this.buttonOpacity, {
      duration: 300,
      toValue: 1,
      easing: Easing.ease,
    }).start(() => {});
  }

  render() {
    return (
      <Container>
        <ImageContainer style={{ transform: [{ translateY: this.bgY }] }}>
          <Svg height={height + 50} width={width}>
            <ClipPath id='clip'> 
              <Circle r={height + 900} cx={width /2} cy={(-850)} />
            </ClipPath>
            <TopImage href={require("../../../assets/bg.jpg")}
              height={height + 50} width={width}
              preserveAspectRatio='XMidYMid slice'
              clipPath="url(#clip)"
            />
          </Svg>
        </ImageContainer>

        <ButtonsContainer>
          <TapGestureHandler onHandlerStateChange={this.onStateChange}>
            <Button
              style={{
                opacity: this.buttonOpacity,
                transform: [{ translateY: this.buttonY }],
              }}
            >
              <ButtonLabel>Sign in</ButtonLabel>
            </Button>
          </TapGestureHandler>

          <ButtonFacebook
            style={{
              opacity: this.buttonOpacity,
              transform: [{ translateY: this.buttonY }],
            }}
          >
            <ButtonLabel white={true}>Sign in with Facebook</ButtonLabel>
          </ButtonFacebook>
          <LoginFormContainer
            style={{
              opacity: this.textInputOpacity,
              zIndex: this.textInputZindex,
              transform: [{ translateY: this.textInputY }],
            }}
          >
            <TapGestureHandler onHandlerStateChange={this.onCloseStateChange}>
              <CloseButton>
                <CloseButtonLabel
                  style={{
                    transform: [
                      { rotate: Animated.concat(this.rotateCross, "deg") },
                    ],
                  }}
                >
                  X
                </CloseButtonLabel>
              </CloseButton>
            </TapGestureHandler>

            <Input placeholder="Email" />
            <Input placeholder="Password" />
            <Button>
              <ButtonLabel>Sign in</ButtonLabel>
            </Button>
          </LoginFormContainer>
        </ButtonsContainer>
      </Container>
    );
  }
}
