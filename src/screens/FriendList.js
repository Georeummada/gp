import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FriendList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [friends, setFriends] = useState([
    { id: '1', name: '이은채', nickname: '은채짱', profilePicture: 'https://example.com/profile1.jpg', walkRoute: '한강 공원' },
    { id: '2', name: '정주민', nickname: '주민님', profilePicture: 'https://example.com/profile2.jpg', walkRoute: '남산 타워' },
  ]);

  const navigation = useNavigation();

  const handleSearch = () => {
    // 검색 로직을 구현하여 setSearchResults에 결과 저장
  };

  const addFriend = (user) => {
    setFriends((prevFriends) => [...prevFriends, user]);
    // 추가 로직 구현
  };

  const handleFriendPress = (friend) => {
    navigation.navigate('FriendRecord', { friend });
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="사용자 검색"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <Button title="검색" onPress={handleSearch} />
        <FlatList
          data={searchResults}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.searchResult}>
              <Text>{item.name}</Text>
              <Button title="친구 추가" onPress={() => addFriend(item)} />
            </View>
          )}
        />
      </View>

      <View style={styles.friendsContainer}>
        <Text style={styles.friendsHeader}>친구 목록</Text>
        <FlatList
          data={friends}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleFriendPress(item)}>
              <View style={styles.friendItem}>
                <Text>{item.name}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6EDE0',
    padding: 10,
  },
  searchContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  searchInput: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 8,
    borderRadius: 5,
    marginBottom: 10,
  },
  searchResult: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  friendsContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
  },
  friendsHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    alignItems: 'center',
  },
  friendItem: {
    padding: 10,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
});

export default FriendList;
