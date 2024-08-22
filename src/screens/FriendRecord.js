import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FriendRecord = ({ route }) => {
  const { friend } = route.params;
  const [recordCount, setRecordCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFriendRecords = async () => {
      try {
        const records = JSON.parse(await AsyncStorage.getItem('friendRecords')) || [];
        const friendRecords = records.filter(record => record.friendId === friend.id);
        setRecordCount(friendRecords.length);
      } catch (error) {
        console.error('Error fetching friend records:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFriendRecords();
  }, [friend.id]);

  return (
    <View style={styles.container}>
      <View style={styles.friendsContainer}>
        <Image source={{ uri: friend.profilePicture }} style={styles.profileImage} />
        <Text style={styles.nickname}>{friend.nickname}</Text>

        <View style={styles.statsContainer}>
          <View style={styles.statsCard}>
            {loading ? (
              <ActivityIndicator size="large" color="#4A90E2" />
            ) : (
              <Text style={styles.statsNumber}>{recordCount}</Text>
            )}
            <Text style={styles.statsLabel}>오늘의 기록</Text>
          </View>
        </View>

        <Text style={styles.routeHeader}>산책 경로:</Text>
        <Text style={styles.route}>{friend.walkRoute}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6EDE0',
    padding: 20,
    justifyContent: 'center',
  },
  friendsContainer: {
    backgroundColor: '#FFFFFF',
    padding: 30,
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    borderWidth: 4,
    borderColor: '#DDE1E7',
  },
  nickname: {
    fontSize: 34,  // 크기를 조금 더 키움
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
    textShadowColor:'#E6EDE0',
    textShadowColor: 'rgba(1, 0, 1, 0.2)',  // 그림자 효과
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 5,
    letterSpacing: 1,  // 글자 간격 조정
    fontFamily:'bagel-fat-one',
    shadowOffset: { width: 0, height: 0 }, // 그림자가 모든 방향으로 퍼지도록 설정
    shadowOpacity: 0.5, // 그림자 투명도
    shadowRadius: 7, // 그림자 흐림 효과 (값을 높일수록 흐림)
    elevation: 5, // 안드로이드에서의 그림자 효과 활성화
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  statsCard: {
    backgroundColor:'#F0F4F8',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statsNumber: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#7B8D9E',

  },
  statsLabel: {
    fontSize: 16,
    color: '#7B8D9E',
  },
  routeHeader: {
    fontSize: 20,
    color: '#333',
    marginTop: 10,
    marginBottom: 5,
    fontFamily:'gowun-dodum',
  },
  route: {
    fontSize: 16,
    color: '#7B8D9E',
    textAlign: 'center',
    fontFamily:'gowun-dodum',
  },
});

export default FriendRecord;
