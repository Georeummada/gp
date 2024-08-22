/*import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Alert, TouchableOpacity, ActivityIndicator } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { app } from '../../firebaseConfig';


const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
      .then(async () => {
        setLoading(false);
        setError(''); // 에러 메시지 초기화
        Alert.alert('로그인 성공', '오늘도 걸어볼까요?'); // 성공 알림 추가

        // AsyncStorage에 사용자 정보 저장
        await AsyncStorage.setItem('userEmail', email);
        await AsyncStorage.setItem('userNickname', '사용자 닉네임');

        navigation.navigate('App'); // 로그인 성공 시 HomeScreen으로 이동
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message);
        Alert.alert('로그인 실패', error.message); // 오류 알림 추가
      });
  };

  const handleSignUp = () => {
    navigation.navigate('SignUpScreen'); // 회원 가입 화면으로 이동
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="이메일"
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="비밀번호"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>로그인</Text>
        </TouchableOpacity>
      )}
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <TouchableOpacity onPress={handleSignUp}>
        <Text style={styles.signUpText}>회원 가입</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f8f8f8',
  },
  input: {
    height: 40,
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontFamily: 'KangwonEdu',
  },
  errorText: {
    color: 'red',
    marginTop: 10,
  },
  signUpText: {
    color: 'blue',
    marginTop: 15,
    fontFamily: 'KangwonEdu',
    fontSize: 15,

  },
});

export default LoginScreen;*/
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Alert, TouchableOpacity, ActivityIndicator } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { app } from '../../firebaseConfig';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        setLoading(false);
        setError(''); // 에러 메시지 초기화
        Alert.alert('로그인 성공', '오늘도 걸어볼까요?'); // 성공 알림 추가

        // 사용자 닉네임을 Firebase Auth에서 가져와서 AsyncStorage에 저장
        const user = userCredential.user;
        const nickname = user.displayName;
        const profilePic = await AsyncStorage.getItem(`profilePic_${email}`);
        
        await AsyncStorage.setItem('userNickname', nickname);
        await AsyncStorage.setItem('userEmail', email);
        // profilePic이 null인 경우 기본 프로필 사진을 설정
        await AsyncStorage.setItem('profilePic', profilePic || 'default_profile_picture_uri'); 

        navigation.navigate('App'); // 로그인 성공 시 HomeScreen으로 이동
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message);
        Alert.alert('로그인 실패', error.message); // 오류 알림 추가
      });
  };

  const handleSignUp = () => {
    navigation.navigate('SignUpScreen'); // 회원 가입 화면으로 이동
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="이메일"
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="비밀번호"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>로그인</Text>
        </TouchableOpacity>
      )}
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <TouchableOpacity onPress={handleSignUp}>
        <Text style={styles.signUpText}>회원 가입</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f8f8f8',
  },
  input: {
    height: 40,
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'KangwonEdu',
  },
  errorText: {
    color: 'red',
    marginTop: 10,
  },
  signUpText: {
    color: 'blue',
    marginTop: 12,
    fontSize: 17,
    fontFamily: 'KangwonEdu',
  },
});

export default LoginScreen;
