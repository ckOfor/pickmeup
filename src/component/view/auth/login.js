// react 
import React, { useState } from 'react';

// react-native
import { TouchableOpacity } from'react-native'

// styles
import { 
  TextView, ScreenView, AppLogo, HeaderView, TopView, BottomView, IntroView, IntroTextOne, 
  IntroTextTwo, TextFieldView, PhoneNumberView, FlagIcon, PrefixText, TextInputField, Divider,
  SignUpText, BottomSubView, FacebookButton, GoogleButton, ButtonLogo,
  FacebookText, GoogleText, GoButton, GoText
} from './styles';

const login = () => {
  const [value, setValue] = useState('')

  const formatPhoneNumber = (phoneNumberString) => {
    //normalize string and remove all unnecessary characters
    phoneNumberString = ("" + phoneNumberString).replace(/[^\d]/g, "")
  
    //check if number length is at least 10, if longer strip off the end characters
    if (phoneNumberString.length >= 11) {
      //reformat and return US phone number
      return phoneNumberString
        .substring(0, 11)
        .replace(/(\d{4})(\d{3})(\d{4})/, "$1 $2 $3")
    }
  
    //let them keep typing in their phone number
    return phoneNumberString
  }

  return (
    <ScreenView>

      <TopView>

        <HeaderView>
          <AppLogo
            source={require('../../../assets/logo.png')}
          />

          <TextView>Pickmeup</TextView>
        </HeaderView>

        <IntroView>
          <IntroTextOne>Hey there!</IntroTextOne>
          <IntroTextTwo>Type in your phone number to get started</IntroTextTwo>
        </IntroView>
        
        <PhoneNumberView>

          <TextFieldView>

            <FlagIcon
              source={require('../../../assets/flag.png')}
            />

            <PrefixText>
              +234
            </PrefixText>

            <Divider />

            <TextInputField 
              placeholder={'Enter number'}
              value={value}
              onChangeText={(value) => setValue(formatPhoneNumber(value))}
              color="red"
              keyboardType={"numeric"}
              returnKey={"done"}
            />

            <TouchableOpacity
              onPress={() => alert('ds')}
            >
              <GoButton>
                <GoText>GO</GoText>
              </GoButton>
            </TouchableOpacity>
            
          </TextFieldView>

        </PhoneNumberView>

      </TopView>

      <BottomView>

        <SignUpText>
          or you can sign in with
        </SignUpText>

        <BottomSubView>

        
          <TouchableOpacity>
            <FacebookButton>
              
              <ButtonLogo
                source={require('../../../assets/facebook-square.png')}
              />

              <FacebookText>
                Facebook
              </FacebookText>

            </FacebookButton>
          </TouchableOpacity>

          <TouchableOpacity>
            <GoogleButton>

              <ButtonLogo
                source={require('../../../assets/google.png')}
              />

              <GoogleText>
                Facebook
              </GoogleText>
              </GoogleButton>
          </TouchableOpacity>

        </BottomSubView>
        
      </BottomView>
      
      
    </ScreenView>
  );
};

export default login;
