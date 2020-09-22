import Animated from "react-native-reanimated";
import styled from "styled-components/native";
import Svg, { Image, Circle, ClipPath } from "react-native-svg";


import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const Container = styled.View`
  flex: 1;
  /* background: green; */
  justify-content: flex-end;
`;

export const ImageContainer = styled(Animated.View)`
  /* flex: 1; */
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  /* background: blue; */

  /* border-bottom-left-radius: 50px; */
  /* overflow: hidden; */
`;

export const TopImage = styled(Image)``;

export const ButtonsContainer = styled(Animated.View)`
  /* background: red; */
  height: ${height/3}px;
  justify-content: center;
  /* background: white; */
`;

// export const Button = styled.View`
export const Button = styled(Animated.View)`
  margin-horizontal: 20px;
  margin-vertical: 5px;
  border-radius: 35px;
  height: 70px;
  background: white;
  align-items: center;
  justify-content: center;

  elevation: 3;

  box-shadow: 2px 4px black;
  shadow-opacity: 0.2;

`;

export const ButtonFacebook = styled(Button)`
  background: #2e71dc;
`;

export const ButtonLabel = styled.Text`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 16px;
  ${({ white }) => (white ? "color: white;" : "")}
`;

export const LoginFormContainer = styled(Animated.View)`
  /* background: blue; */
  height: ${height / 3}px;
  position: absolute;
  /* top: 0; */
  left: 0;
  right: 0;
  bottom: 0;
  justify-content: center;
  z-index: -1;
  opacity: 0;
`;
export const Input = styled.TextInput.attrs({
  placeholderTextColor: "black",
})`
  height: 50px;
  border-radius: 25px;
  border-width: 0.5px;
  margin: 5px 10px;
  padding-left: 20px;
  border-color: #ccc;
`;

export const CloseButton = styled.View`
  background: whitesmoke;
  height: 40px;
  width: 40px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -20px;
  left: ${width/2 - 20}px;
  box-shadow: 2px 4px black;
  shadow-opacity: 0.2;

  elevation: 3;

`;
export const CloseButtonLabel = styled(Animated.Text)`
  font-size: 15px;
`;
