/*
import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const fetchFonts = () => {
  return Font.loadAsync({
    'gowun-dodum': require('../../assets/fonts/GowunDodum-Regular.ttf'),
    'bagel-fat-one': require('../../assets/fonts/BagelFatOne-Regular.ttf'),
  });
};

const SettingScreen = ({ navigation }) => {
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [profilePic, setProfilePic] = useState(null);
  const [fontLoaded, setFontLoaded] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
      const getUserInfo = async () => {
        try {
          const storedEmail = await AsyncStorage.getItem('userEmail');
          const storedNickname = await AsyncStorage.getItem('userNickname');
          const storedProfilePic = await AsyncStorage.getItem(`profilePic_${storedEmail}`);

          if (storedEmail) {
            setEmail(storedEmail);
          }
          if (storedNickname) {
            setNickname(storedNickname);
          }
          if (storedProfilePic) {
            setProfilePic(storedProfilePic);
          } else {
            setProfilePic('default_profile_picture_uri'); // 기본 프로필 사진 URI로 설정
          }
        } catch (error) {
          console.error('Error fetching user info from AsyncStorage:', error);
        }
      };

      getUserInfo();
    }, [])
  );

  const handleChoosePhoto = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        const uri = result.assets[0].uri;
        setProfilePic(uri);
        await AsyncStorage.setItem(`profilePic_${email}`, uri);
        await AsyncStorage.setItem('profilePic', uri);
      }
    } catch (error) {
      console.error('Error choosing photo:', error);
      Alert.alert('사진 선택 오류', '사진을 선택하는 도중 오류가 발생했습니다.');
    }
  };

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('userEmail');
      await AsyncStorage.removeItem('userNickname');
      await AsyncStorage.removeItem(`profilePic_${email}`);
      navigation.navigate('StartScreen'); // StartScreen으로 이동
    } catch (error) {
      console.error('Error during logout:', error);
      Alert.alert('로그아웃 오류', '로그아웃 중 오류가 발생했습니다.');
    }
  };

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerbutton}>
        <Text style={styles.headertext}>Profile</Text>
      </View>
      <View style={styles.profileContainer}>
        <Image
          source={profilePic ? { uri: profilePic } : require('../../assets/profileicon.png')}
          style={styles.profilePic}
        />
        <Text style={styles.nickname}>{nickname}</Text>
        <Text style={styles.email}>{email}</Text>
        <TouchableOpacity style={styles.button} onPress={handleChoosePhoto}>
          <Text style={styles.buttonText}>프로필 사진 변경</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleLogout}>
          <Text style={styles.buttonText}>로그아웃</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  headerbutton: {
    backgroundColor: '#F0F0F0',
    paddingVertical: 8,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: 'center',
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  headertext: {
    fontSize: 30,
    margin: 5,
    fontWeight: 'bold',
    color: '#E3F6CE',
    fontFamily: 'RubikMonoOne',
    textShadowColor: '#21610B',
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 3,
  },
  profileContainer: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 45,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  profilePic: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 3,
    borderColor: '#DDD',
    marginBottom: 20,
  },
  nickname: {
    fontSize: 22,
    fontWeight: 'bold',
    margin: 5,
    color: '#555',
    fontFamily: 'HakgyoansimUndongjang',
  },
  email: {
    fontSize: 15,
    color: '#777',
    marginBottom: 20,
    fontFamily: 'SokchoBadaBatang',
  },
  button: {
    backgroundColor: '#E3F6CE',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    borderColor: '#CEF6CE',
    borderWidth: 1,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    textShadowColor: '#21610B',
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 3,
    fontFamily: 'KangwonEdu',
  },
});

export default SettingScreen;*/
import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const fetchFonts = () => {
  return Font.loadAsync({
    'gowun-dodum': require('../../assets/fonts/GowunDodum-Regular.ttf'),
    'bagel-fat-one': require('../../assets/fonts/BagelFatOne-Regular.ttf'),
  });
};

const SettingScreen = ({ navigation }) => {
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [profilePic, setProfilePic] = useState(null);
  const [fontLoaded, setFontLoaded] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
      const getUserInfo = async () => {
        try {
          const storedEmail = await AsyncStorage.getItem('userEmail');
          const storedNickname = await AsyncStorage.getItem('userNickname');
          const storedProfilePic = await AsyncStorage.getItem(`profilePic_${storedEmail}`);

          if (storedEmail) {
            setEmail(storedEmail);
          }
          if (storedNickname) {
            setNickname(storedNickname);
          }
          if (storedProfilePic) {
            setProfilePic(storedProfilePic);
          } else {
            setProfilePic('default_profile_picture_uri'); // 기본 프로필 사진 URI로 설정
          }
        } catch (error) {
          console.error('Error fetching user info from AsyncStorage:', error);
        }
      };

      getUserInfo();
    }, [])
  );

  const handleChoosePhoto = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        const uri = result.assets[0].uri;
        setProfilePic(uri);
        await AsyncStorage.setItem(`profilePic_${email}`, uri);
        await AsyncStorage.setItem('profilePic', uri);
      }
    } catch (error) {
      console.error('Error choosing photo:', error);
      Alert.alert('사진 선택 오류', '사진을 선택하는 도중 오류가 발생했습니다.');
    }
  };

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('userEmail');
      await AsyncStorage.removeItem('userNickname');
      Alert.alert('로그아웃 완료', '다음에 또 함께 걸어요!');
      navigation.navigate('StartScreen'); // StartScreen으로 이동
    } catch (error) {
      console.error('Error during logout:', error);
      Alert.alert('로그아웃 오류', '로그아웃 중 오류가 발생했습니다.');
    }
  };

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerbutton}>
        <Text style={styles.headertext}>Profile</Text>
      </View>
      <View style={styles.profileContainer}>
        <Image
          source={profilePic ? { uri: profilePic } : require('../../assets/profileicon.png')}
          style={styles.profilePic}
        />
        <Text style={styles.nickname}>{nickname}</Text>
        <Text style={styles.email}>{email}</Text>
        <TouchableOpacity style={styles.button} onPress={handleChoosePhoto}>
          <Text style={styles.buttonText}>프로필 사진 변경</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleLogout}>
          <Text style={styles.buttonText}>로그아웃</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  headerbutton: {
    backgroundColor: '#F0F0F0',
    paddingVertical: 8,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: 'center',
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  headertext: {
    fontSize: 30,
    margin: 5,
    fontWeight: 'bold',
    color: '#E3F6CE',
    fontFamily: 'RubikMonoOne',
    textShadowColor: '#21610B',
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 3,
  },
  profileContainer: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 45,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  profilePic: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 3,
    borderColor: '#DDD',
    marginBottom: 20,
  },
  nickname: {
    fontSize: 22,
    fontWeight: 'bold',
    margin: 5,
    color: '#555',
    fontFamily: 'HakgyoansimUndongjang',
  },
  email: {
    fontSize: 15,
    color: '#777',
    marginBottom: 20,
    fontFamily: 'SokchoBadaBatang',
  },
  button: {
    backgroundColor: '#E3F6CE',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    borderColor: '#CEF6CE',
    borderWidth: 1,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    textShadowColor: '#21610B',
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 3,
    fontFamily: 'KangwonEdu',
  },
});

export default SettingScreen;

