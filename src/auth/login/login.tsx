import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import LoginService from './login.service';
// import LoginStyle from './Login.style';

const Login = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  return (
    <SafeAreaView style={LoginStyle.login}>
      <View style={LoginStyle.login.title}>
        <Text
          style={{
            fontSize: 50,
            color: 'black',
            fontWeight: 'bold',
          }}>
          Login
        </Text>
      </View>
      <View style={LoginStyle.login.formGroup}>
        <Text style={LoginStyle.login.formGroup.label}>Login:</Text>
        <TextInput
          value={login}
          onChange={e => {
            setLogin(e.nativeEvent.text);
          }}
          style={LoginStyle.login.formGroup?.input}></TextInput>
      </View>
      <View style={LoginStyle.login.formGroup}>
        <Text style={LoginStyle.login.formGroup?.label}>Login:</Text>
        <TextInput
          value={password}
          onChange={e => {
            setPassword(e.nativeEvent.text);
          }}
          style={LoginStyle.login.formGroup?.input}
          textContentType="password"></TextInput>
      </View>
      <View style={LoginStyle.login.formGroup}>
        <TouchableOpacity
          style={LoginStyle.login.formGroup.button}
          onPress={() => {
            LoginService.login(login, password);
          }}>
          <Text style={{color: 'black'}}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const LoginStyle = StyleSheet.create({
  login: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
    backgroundColor: '#eee',
    title: {
      marginBottom: 15,
    },
    formGroup: {
      width: '100%',
      marginBottom: 10,
      label: {
        marginBottom: 10,
      },

      input: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: '#fff',
      },
      button: {
        width: '100%',
        height: 50,
        backgroundColor: 'lightblue',
        dispaly: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        borderRadius: 8,
      },
    },
  },
});

export default Login;
