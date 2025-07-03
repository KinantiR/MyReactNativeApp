import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import InputField from '../components/InputField';
import styles from '../styles/loginStyles';

const LoginScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={[styles.container, { paddingTop: insets.top + 20 }]}
      enableOnAndroid={true}
      extraScrollHeight={20}
      keyboardShouldPersistTaps="handled"
    >
      <Image
        source={require('../assets/login-illustration.png')}
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.title}>Login</Text>

      <InputField
        icon="email"
        placeholder="Email Address"
        keyboardType="email-address"
      />

      <InputField
        icon="lock"
        placeholder="Password"
        secureTextEntry={true}
      />

      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Dashboard')}>
          <Text style={styles.loginText}>Log in</Text>
      </TouchableOpacity>

      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Don't have an account?</Text>
        <TouchableOpacity>
          <Text style={styles.signupLink}> Sign up</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default LoginScreen;
