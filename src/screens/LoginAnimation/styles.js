import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background: green;
  justify-content: flex-end;
`;

export const ImageContainer = styled.View`
  /* flex: 1; */
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: blue;
`;

export const Image = styled.Image.attrs({
  resizeMode: "cover",
})`
  flex: 1;
  height: null;
  width: null;
`;


export const ButtonsContainer = styled.View`
  /* background: red; */
  height: ${((1/3)*100)}%;
  justify-content: center;

`;

export const Button = styled.TouchableOpacity`
  margin-horizontal: 20px;
  margin-vertical: 5px;
  border-radius: 35px;
  height: 70px;
  background: white;
  align-items: center;
  justify-content: center;
`;

export const ButtonFacebook = styled(Button)`
  background: #2e71dc;
`;

export const ButtonLabel = styled.Text`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 20px;
  ${ ({white}) => (white ? 'color: white;' : '')}
`;



