import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator, TouchableOpacity, ScrollView, Linking } from 'react-native';
import * as Location from 'expo-location';
import axios from 'axios';
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

const HomeScreen = ({ navigation }) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [profilePic, setProfilePic] = useState(null);
  const [location, setLocation] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [fontLoaded, setFontLoaded] = useState(false);
  const [recordCount, setRecordCount] = useState(0);
  const [articles, setArticles] = useState([]);
  const [isArticleLoading, setIsArticleLoading] = useState(true);

  const fetchRecords = async () => {
    const records = JSON.parse(await AsyncStorage.getItem('records')) || [];
    setRecordCount(records.length);
  };

  useFocusEffect(
    React.useCallback(() => {
      const fetchUserInfo = async () => {
        try {
          const storedProfilePic = await AsyncStorage.getItem('profilePic');
          const storedNickname = await AsyncStorage.getItem('userNickname');
          const storedEmail = await AsyncStorage.getItem('userEmail');
          if (storedProfilePic) {
            setProfilePic(storedProfilePic);
          } else {
            setProfilePic('default_profile_picture_uri'); // 기본 프로필 사진 URI로 설정
          }
          if (storedNickname) {
            setNickname(storedNickname);
          }
          if (storedEmail) {
            setEmail(storedEmail);
          }
        } catch (error) {
          console.error('Error fetching user info from AsyncStorage:', error);
        }
      };

      fetchUserInfo();
      fetchRecords(); // 기록 수 업데이트

      // AsyncStorage 변경 사항을 감지하여 업데이트
      const unsubscribe = navigation.addListener('focus', () => {
        fetchRecords();
      });

      return unsubscribe;
    }, [navigation])
  );

  useEffect(() => {
    const fetchWeather = async () => {
      const locationStatus = await Location.requestForegroundPermissionsAsync();
      if (locationStatus.status !== 'granted') {
        setError('위치 접근 권한이 필요합니다.');
        return;
      }

      const { coords } = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = coords;

      const apiKey = '9c4f365f03770cc7be76efbf21f8d645';
      const lang = 'KR';
      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&lang=${lang}`;

      try {
        const [weatherResponse, locationResponse] = await Promise.all([
          axios.get(weatherUrl),
          axios.get(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`)
        ]);

        setWeather(weatherResponse.data);
        setLocation(locationResponse.data.address.city || locationResponse.data.address.town || locationResponse.data.address.village || '위치 정보를 가져올 수 없습니다.');
      } catch (error) {
        setError('날씨 정보를 가져오는 도중 오류가 발생했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setIsArticleLoading(true);
        const query = '걷기 러닝 산책';
        const encodedQuery = encodeURIComponent(query);

        const apiUrl = `https://openapi.naver.com/v1/search/news.json?query=${encodedQuery}&display=3&start=1&sort=date`;

        const response = await axios.get(apiUrl, {
          headers: {
            'X-Naver-Client-Id': '56IQotGfuJutCIOhVhTt',
            'X-Naver-Client-Secret': 'XR590kCyTn',
          },
        });

        // 기사 내용에서 HTML 태그 제거
        const cleanArticles = response.data.items.map((article) => ({
          ...article,
          title: article.title.replace(/<[^>]*>/g, ''), // 제목의 HTML 태그 제거
          description: article.description.replace(/<[^>]*>/g, ''), // 설명의 HTML 태그 제거
          pubDate: article.pubDate ? new Date(article.pubDate) : null, // 날짜를 Date 객체로 변환
        }));

        setArticles(cleanArticles);
        setIsArticleLoading(false);
      } catch (error) {
        console.error('Error fetching articles:', error.message);
        setIsArticleLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const formatDateToKorean = (date) => {
    if (!date || isNaN(date.getTime())) {
      return ''; // 유효하지 않은 날짜일 경우 빈 문자열 반환
    }
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // 월은 0부터 시작하므로 +1
    const day = date.getDate();

    return `${year}년 ${month}월 ${day}일`;
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

  const navigateToSetting = () => {
    navigation.navigate('SettingScreen', {
      profilePic,
      setProfilePic,
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.headerTextContainer}>
            <Text style={styles.header}>Hello {nickname},</Text>
            <Text style={styles.subHeader}>오늘도 힘차게 걸어볼까요?</Text>
          </View>
          <TouchableOpacity onPress={navigateToSetting}>
            <Image 
              source={require('../../assets/settingicon.png')} 
              style={styles.settingIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.profileContainer}>
          <Image 
            source={profilePic ? { uri: profilePic } : require('../../assets/profileicon.png')} 
            style={styles.profilePic} 
          />
        </View>
        <View style={styles.statsContainer}>
          <View style={styles.statsCard}>
            {loading ? (
              <ActivityIndicator size="large" color="#0000ff" />
            ) : (
              <Text style={styles.statsNumber}>{recordCount}</Text>
            )}
            <Text style={styles.statsLabel}>생성한 기록</Text>
          </View>
          <TouchableOpacity style={styles.statsCard} onPress={() => navigation.navigate('FriendList')}>
            <Text style={styles.statsNumber}>1</Text>
            <Text style={styles.statsLabel}>팔로워</Text>
          </TouchableOpacity>
        </View>

        {/* 뉴스 섹션을 카드로 적용 */}
        <View style={styles.articleSection}>
          <View style={styles.newsContainer}> 
            <Text style={styles.newsTitle}>산책길 소식</Text>
            {isArticleLoading ? (
              <ActivityIndicator size="large" color="#0000ff" />
            ) : articles.length > 0 ? (
              articles.map((article, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => Linking.openURL(article.link)} // 기사 링크로 연결
                  style={styles.articleCard}
                >
                  <Text style={styles.articleTitle}>{article.title}</Text>
                  <Text style={styles.articleDescription}>{article.description}</Text>
                  <Text style={styles.articleDate}>{formatDateToKorean(article.pubDate)}</Text>
                </TouchableOpacity>
              ))
            ) : (
              <Text>관련 기사를 불러오는 중입니다...</Text>
            )}
          </View>
        </View>

        <View style={styles.weatherContainer}>
          {loading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : weather ? (
            <View style={styles.weatherCard}>
              <Text style={styles.weatherLocation}>{location}</Text>
              <Text style={styles.weatherMain}>{weather.weather[0].main}</Text>
              <Text style={styles.weatherTemp}>{Math.round(weather.main.temp - 273.15)}°C</Text>
            </View>
          ) : (
            <Text style={styles.errorText}>날씨 정보를 가져오는 중...</Text>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20, // 마지막 요소가 잘리지 않도록 padding 추가
  },
  container: {
    flex: 1,
    backgroundColor: '#E6EDE0',
    padding: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTextContainer: {
    flexDirection: 'column',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 18,
    color: '#555',
  },
  profileContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  profilePic: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderWidth: 3,
    borderColor: '#f1f5f0',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  statsCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  statsNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  statsLabel: {
    fontSize: 14,
    color: '#555',
  },

  newsContainer: {
    backgroundColor: '#fff', // 뉴스 섹션의 카드 배경색
    borderRadius: 10,
    padding: 20,
    marginBottom: 20, // 섹션 간격을 추가
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5, // Android 그림자
  },
  weatherContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 20, // 날씨 위젯과 이전 요소 사이의 간격 조정
    marginBottom: 20, // 날씨 섹션 간격 추가
  },
  weatherCard: {
    backgroundColor: '#6A5ACD', // 원래 배경색으로 복구
    borderRadius: 15,
    padding: 20,
    width: '100%',
    alignItems: 'center',
  },
  weatherLocation: {
    fontSize: 18,
    color: '#fff', // 원래 텍스트 색상으로 복구
    marginBottom: 10,
  },
  weatherMain: {
    fontSize: 20,
    color: '#fff', // 원래 텍스트 색상으로 복구
    fontWeight: 'bold',
    marginBottom: 10,
  },
  weatherTemp: {
    fontSize: 24,
    color: '#fff', // 원래 텍스트 색상으로 복구
    fontWeight: 'bold',
  },
  settingIcon: {
    width: 24,
    height: 24,
  },
  errorText: {
    color: 'red',
  },
  articleSection: {
    width: '100%', // 부모 뷰에 맞게 넓이 조정
    marginBottom: 20, // 하단 요소와 간격 조정
    marginTop: 20,
  },
  newsTitle: {
    fontFamily: 'KangwonEdu',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center', // 카드 시작 지점과 맞춤
  },
  articleCard: {
    backgroundColor: '#f5f5f5', // 신문 느낌의 회색 배경
    borderRadius: 8,
    padding: 15, // 패딩을 줄여서 카드 높이를 낮게 조정
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 10, // Android 그림자
  },
  articleTitle: {
    fontFamily: 'KangwonEdu',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  articleDescription: {
    fontFamily: 'KangwonEdu',
    fontSize: 14,
    color: '#555',
    lineHeight: 22,
    marginBottom: 8,
  },
  articleDate: {
    fontFamily: 'KangwonEdu',
    fontSize: 12,
    color: '#888',
    textAlign: 'right',
  },
});

export default HomeScreen;
