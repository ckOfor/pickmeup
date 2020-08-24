import styled from 'styled-components/native';
import Text from '../../widget/text';
import TextInput from '../../widget/textInput';
import Button from '../../widget/button';
import { Dimensions, Platform } from 'react-native'

const width = Dimensions.get("window").width
const height = Dimensions.get("window").height

export const  ScreenView = styled.View`
  background-color: #2667c9;
  width: ${width};
  height: ${height};
`;

export const  TopView = styled.View`
  width: ${width};
  height: ${height / 2.1};
  justify-content: space-between;
  margin: ${width / 6}px 300px 0 30px
`;

export const BottomView = styled.View`
  width: ${width};
  height: ${height / 2.5};
  justify-content: flex-end;
  align-items: center
`;

export const  IntroView = styled.View`
  justify-content: space-between
`;

export const  HeaderView = styled.View`
  flex-direction: row;
`;

export const  AppLogo = styled.Image`
  max-width:100%;
  height:auto;
`;

export const TextView = styled(Text)`
  margin-left: 15;
  font-size: 40;
  width: ${width};
  color: #fff
`;

export const IntroTextOne = styled(Text)`
  font-size: 30;
  width: ${width};
  color: #fff;
  font-weight: 400
`;

export const IntroTextTwo = styled(Text)`
  font-size: 30;
  width: ${width / 1.15};
  color: #fff;
  margin-top: 10;
  font-weight: 300
`;

export const PhoneNumberView = styled.View`
  width: ${width};
`;

export const TextFieldView = styled.View`
  background-color: #FFF;
  border-radius: 5;
  width: ${width / 1.38};
  height: 50;
  flex-direction: row;
  align-items: center
`;

export const  FlagIcon = styled.Image`
  height: 20
  width: 30
  margin-left: 20
`;

export const  PrefixText = styled.Text`
  margin-left: 15
  font-size: 20;
  font-weight: 600;
  color: #3d3d3d;
  height: 25;
`;

export const Divider = styled.View`
  background-color: #dbdbdb;
  width: 2;
  height: 50;
  margin-left: 10
`;

export const TextInputField = styled(TextInput)`
  width: ${width / 2.5};
  height: 50
  margin-left: 10;
  margin-top: 4px
  font-size: 20;
  line-height: 20
  font-weight: 600;
  color: #7f7f7f;
  align-items: center;
  justify-content: center;

`;

export const GoButton = styled.View`
  width: 50px
  height: 52px;
  border-radius: 5px
  border: 2px solid #dadada;
  flex-direction: row
  justify-content: center;
  align-items: center;
  margin-left: 10;
`;

export const  GoText = styled.Text`
  font-size: 20;
  color: #fff;
  height: 25;
`;

export const  SignUpText = styled.Text`
  margin-Bottom: 15
  font-size: 20;
  font-weight: 600;
  color: #FFF;
  height: 25;
`;

export const  BottomSubView = styled.View`
  background-color: #fff;
  height: 110px;
  width: ${width};
  justify-content: space-around;
  align-items: center;
  flex-direction: row

`;

export const  FacebookButton = styled.View`
  width: 150px
  height: 50px;
  border-radius: 8px
  border: 1px solid #2667c9;
  flex-direction: row
  justify-content: center;
  align-items: center;
`;

export const  ButtonLogo = styled.Image`
  height: 25;
  width: 25;
  marginLeft: 10
`;

export const  FacebookText = styled.Text`
  marginLeft: 10
  font-size: 20;
  color: #7a7a7a;
  height: 25;
`;

export const  GoogleButton = styled.View`
  width: 150px
  height: 50px;
  border-radius: 8px
  border: 1px solid #dadada;
  flex-direction: row
  justify-content: center;
  align-items: center;
`;

export const  GoogleText = styled.Text`
  marginLeft: 10
  font-size: 20;
  color: #7a7a7a;
  height: 25;
`;
