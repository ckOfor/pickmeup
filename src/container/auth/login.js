import React, { useState } from 'react';
// react-native
import { TouchableOpacity, SafeAreaView } from'react-native'

import LoginView from '../../component/view/auth/login';

const login = () => {
  return <SafeAreaView 
      style={{ flex: 1 }}>
    <LoginView />
  </SafeAreaView>;
};

export default login;
