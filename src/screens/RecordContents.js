/*import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import MapView, { Polyline, Marker } from 'react-native-maps';

const RecordContents = ({ route, navigation }) => {
  const { record } = route.params;

  const handleWriteDiary = () => {
    Alert.alert(
      "걸음 일기",
      "일기를 작성하시겠습니까?",
      [
        {
          text: "아니오",
          onPress: () => console.log("일기 작성 취소"),
          style: "cancel"
        },
        {
          text: "예",
          onPress: () => navigation.navigate('RecordScreen', { record })
        }
      ]
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: record.pathCoordinates[0]?.latitude || 37.78825,
          longitude: record.pathCoordinates[0]?.longitude || -122.4324,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Polyline coordinates={record.pathCoordinates} strokeWidth={2} />
        {record.pathCoordinates.length > 0 && (
          <>
            <Marker coordinate={record.pathCoordinates[0]} title="출발" />
            <Marker coordinate={record.pathCoordinates[record.pathCoordinates.length - 1]} title="도착" />
          </>
        )}
      </MapView>
      <View style={styles.infoContainer}>
        <View style={styles.infoItem}>
          <Text style={styles.label}>산책길 이름</Text>
          <Text style={styles.value}>{record.name}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.label}>간단한 소개</Text>
          <Text style={styles.value}>{record.description}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.label}>별점</Text>
          <Text style={styles.value}>{record.rating} / 5</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.label}>소요시간</Text>
          <Text style={styles.value}>{record.time} 초</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.label}>이동거리</Text>
          <Text style={styles.value}>{record.distance.toFixed(1)} m</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.label}>등록시간</Text>
          <Text style={styles.value}>{record.date}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleWriteDiary}>
        <Text style={styles.buttonText}>걸음일기📝</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  map: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
  },
  infoContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginBottom: 20, // Add marginBottom to separate from button
  },
  infoItem: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 10,
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  value: {
    fontSize: 17,
    color: '#555',
  },
  button: {
    backgroundColor: '#1EB1FC',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default RecordContents;
*/

/*import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import MapView, { Polyline, Marker } from 'react-native-maps';

const RecordContents = ({ route, navigation }) => {
  const { record } = route.params;

  const handleWriteDiary = () => {
    Alert.alert(
      "걸음 일기",
      "일기를 작성하시겠습니까?",
      [
        {
          text: "아니오",
          onPress: () => console.log("일기 작성 취소"),
          style: "cancel"
        },
        {
          text: "예",
          onPress: () => navigation.navigate('RecordScreen', { record })
        }
      ]
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: record.pathCoordinates[0]?.latitude || 37.78825,
          longitude: record.pathCoordinates[0]?.longitude || -122.4324,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Polyline coordinates={record.pathCoordinates} strokeWidth={2} />
        {record.pathCoordinates.length > 0 && (
          <>
            <Marker coordinate={record.pathCoordinates[0]} title="출발" />
            <Marker coordinate={record.pathCoordinates[record.pathCoordinates.length - 1]} title="도착" />
          </>
        )}
      </MapView>
      <View style={styles.infoContainer}>
        <View style={styles.infoItem}>
          <Text style={styles.label}>산책길 이름</Text>
          <Text style={styles.value}>{record.name}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.label}>간단한 소개</Text>
          <Text style={styles.value}>{record.description}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.label}>별점</Text>
          <Text style={styles.value}>{record.rating} / 5</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.label}>소요시간</Text>
          <Text style={styles.value}>{record.time} 초</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.label}>이동거리</Text>
          <Text style={styles.value}>{record.distance.toFixed(1)} m</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.label}>등록시간</Text>
          <Text style={styles.value}>{record.date}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleWriteDiary}>
        <Text style={styles.buttonText}>걸음일기📝</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  map: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
  },
  infoContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginBottom: 20, // Add marginBottom to separate from button
  },
  infoItem: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 10,
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  value: {
    fontSize: 17,
    color: '#555',
  },
  button: {
    backgroundColor: '#1EB1FC',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default RecordContents;
*/
/*import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import MapView, { Polyline, Marker } from 'react-native-maps';

const RecordContents = ({ route, navigation }) => {
  const { record } = route.params;

  const handleWriteDiary = () => {
    Alert.alert(
      "걸음 일기",
      "일기를 작성하시겠습니까?",
      [
        {
          text: "아니오",
          onPress: () => console.log("일기 작성 취소"),
          style: "cancel"
        },
        {
          text: "예",
          onPress: () => navigation.navigate('DiaryScreen', { record })
        }
      ]
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: record.pathCoordinates[0]?.latitude || 37.78825,
          longitude: record.pathCoordinates[0]?.longitude || -122.4324,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Polyline coordinates={record.pathCoordinates} strokeWidth={2} />
        {record.pathCoordinates.length > 0 && (
          <>
            <Marker coordinate={record.pathCoordinates[0]} title="출발" />
            <Marker coordinate={record.pathCoordinates[record.pathCoordinates.length - 1]} title="도착" />
          </>
        )}
      </MapView>
      <View style={styles.infoContainer}>
        <View style={styles.infoItem}>
          <Text style={styles.label}>산책길 이름</Text>
          <Text style={styles.value}>{record.name}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.label}>간단한 소개</Text>
          <Text style={styles.value}>{record.description}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.label}>별점</Text>
          <Text style={styles.value}>{record.rating} / 5</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.label}>소요시간</Text>
          <Text style={styles.value}>{record.time} 초</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.label}>이동거리</Text>
          <Text style={styles.value}>{record.distance.toFixed(1)} m</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.label}>등록시간</Text>
          <Text style={styles.value}>{record.date}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleWriteDiary}>
        <Text style={styles.buttonText}>걸음일기📝</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  map: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
  },
  infoContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginBottom: 20, // Add marginBottom to separate from button
  },
  infoItem: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 10,
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  value: {
    fontSize: 17,
    color: '#555',
  },
  button: {
    backgroundColor: '#1EB1FC',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default RecordContents;
*/
/*import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert, AsyncStorage } from 'react-native';
import MapView, { Polyline, Marker } from 'react-native-maps';

const RecordContents = ({ route, navigation }) => {
  const { record } = route.params;
  const [hasDiary, setHasDiary] = useState(false);

  useEffect(() => {
    const checkDiary = async () => {
      const storedDiary = await AsyncStorage.getItem(`diary_${record.id}`);
      if (storedDiary) {
        setHasDiary(true);
      } else {
        setHasDiary(false);
      }
    };
    checkDiary();
  }, [record.id]);

  const handleWriteDiary = () => {
    if (hasDiary) {
      Alert.alert(
        "걸음 일기",
        "이미 작성한 일기가 있습니다. 기존 일기로 이동하시겠습니까?",
        [
          {
            text: "아니오",
            onPress: () => console.log("일기 작성 취소"),
            style: "cancel"
          },
          {
            text: "예",
            onPress: () => navigation.navigate('DiaryScreen', { record })
          }
        ]
      );
    } else {
      Alert.alert(
        "걸음 일기",
        "일기를 작성하시겠습니까?",
        [
          {
            text: "아니오",
            onPress: () => console.log("일기 작성 취소"),
            style: "cancel"
          },
          {
            text: "예",
            onPress: () => navigation.navigate('RecordScreen', { record })
          }
        ]
      );
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: record.pathCoordinates[0]?.latitude || 37.78825,
          longitude: record.pathCoordinates[0]?.longitude || -122.4324,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Polyline coordinates={record.pathCoordinates} strokeWidth={2} />
        {record.pathCoordinates.length > 0 && (
          <>
            <Marker coordinate={record.pathCoordinates[0]} title="출발" />
            <Marker coordinate={record.pathCoordinates[record.pathCoordinates.length - 1]} title="도착" />
          </>
        )}
      </MapView>
      <View style={styles.infoContainer}>
        <View style={styles.infoItem}>
          <Text style={styles.label}>산책길 이름</Text>
          <Text style={styles.value}>{record.name}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.label}>간단한 소개</Text>
          <Text style={styles.value}>{record.description}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.label}>별점</Text>
          <Text style={styles.value}>{record.rating} / 5</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.label}>소요시간</Text>
          <Text style={styles.value}>{record.time} 초</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.label}>이동거리</Text>
          <Text style={styles.value}>{record.distance.toFixed(1)} m</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.label}>등록시간</Text>
          <Text style={styles.value}>{record.date}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleWriteDiary}>
        <Text style={styles.buttonText}>걸음일기 📝</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  map: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
  },
  infoContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginBottom: 20,
  },
  infoItem: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 10,
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  value: {
    fontSize: 17,
    color: '#555',
  },
  button: {
    backgroundColor: '#E3F6CE',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    borderColor: '#E3F6CE',
    borderWidth: 1,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    textShadowColor: '#21610B',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
});

export default RecordContents;*/
/*import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import MapView, { Polyline, Marker } from 'react-native-maps';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const RecordContents = ({ route }) => {
  const { record } = route.params;
  const navigation = useNavigation();
  const [existingDiary, setExistingDiary] = useState(null);

  useEffect(() => {
    const checkExistingDiary = async () => {
      const existingDiaries = JSON.parse(await AsyncStorage.getItem('diaries')) || [];
      const foundDiary = existingDiaries.find(diary => diary.id === record.id);
      setExistingDiary(foundDiary);
    };
    checkExistingDiary();
  }, [record.id]);

  const handleWriteDiary = () => {
    if (existingDiary) {
      Alert.alert(
        "걸음 일기",
        "이미 작성한 일기가 있습니다. 기존 일기로 이동하시겠습니까?",
        [
          {
            text: "아니오",
            onPress: () => console.log("아니오 Pressed"),
            style: "cancel"
          },
          {
            text: "네",
            onPress: () => navigation.navigate('DiaryScreen', { diary: existingDiary })
          }
        ]
      );
    } else {
      Alert.alert(
        "걸음 일기",
        "일기를 작성하시겠습니까?",
        [
          {
            text: "아니오",
            onPress: () => console.log("아니오 Pressed"),
            style: "cancel"
          },
          {
            text: "네",
            onPress: () => navigation.navigate('RecordScreen', { record })
          }
        ]
      );
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: record.pathCoordinates[0]?.latitude || 37.78825,
          longitude: record.pathCoordinates[0]?.longitude || -122.4324,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Polyline coordinates={record.pathCoordinates} strokeWidth={2} />
        {record.pathCoordinates.length > 0 && (
          <>
            <Marker coordinate={record.pathCoordinates[0]} title="출발" />
            <Marker coordinate={record.pathCoordinates[record.pathCoordinates.length - 1]} title="도착" />
          </>
        )}
      </MapView>
      <View style={styles.infoContainer}>
        <View style={styles.infoItem}>
          <Text style={styles.label}>산책길 이름</Text>
          <Text style={styles.value}>{record.name}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.label}>간단한 소개</Text>
          <Text style={styles.value}>{record.description}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.label}>별점</Text>
          <Text style={styles.value}>{record.rating} / 5</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.label}>소요시간</Text>
          <Text style={styles.value}>{record.time} 초</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.label}>이동거리</Text>
          <Text style={styles.value}>{record.distance.toFixed(1)} m</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.label}>등록시간</Text>
          <Text style={styles.value}>{record.date}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleWriteDiary}>
        <Text style={styles.buttonText}>걸음일기📝</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  map: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
  },
  infoContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginBottom: 20, // Add marginBottom to separate from button
  },
  infoItem: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 10,
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  value: {
    fontSize: 17,
    color: '#555',
  },
  button: {
    backgroundColor: '#1EB1FC',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default RecordContents;
*/
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import MapView, { Polyline, Marker } from 'react-native-maps';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const RecordContents = ({ route }) => {
  const { record } = route.params;
  const navigation = useNavigation();
  const [existingDiary, setExistingDiary] = useState(null);

  useEffect(() => {
    const checkExistingDiary = async () => {
      const existingDiaries = JSON.parse(await AsyncStorage.getItem('diaries')) || [];
      const foundDiary = existingDiaries.find(diary => diary.recordId === record.id);
      setExistingDiary(foundDiary);
    };
    checkExistingDiary();
  }, [record.id]);

  const handleWriteDiary = () => {
    if (existingDiary) {
      Alert.alert(
        "걸음 일기",
        "이미 작성한 일기가 있습니다. 기존 일기로 이동하시겠습니까?",
        [
          {
            text: "아니오",
            onPress: () => console.log("아니오 Pressed"),
            style: "cancel"
          },
          {
            text: "네",
            onPress: () => navigation.navigate('DiaryScreen', { diary: existingDiary })
          }
        ]
      );
    } else {
      Alert.alert(
        "걸음 일기",
        "일기를 작성하시겠습니까?",
        [
          {
            text: "아니오",
            onPress: () => console.log("아니오 Pressed"),
            style: "cancel"
          },
          {
            text: "네",
            onPress: () => navigation.navigate('RecordScreen', { record })
          }
        ]
      );
    }
  };

  const formatElapsedTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h > 0 ? `${h}시간 ` : ''}${m > 0 ? `${m}분 ` : ''}${s}초`;
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: record.pathCoordinates[0]?.latitude || 37.78825,
          longitude: record.pathCoordinates[0]?.longitude || -122.4324,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Polyline coordinates={record.pathCoordinates} strokeWidth={2} />
        {record.pathCoordinates.length > 0 && (
          <>
            <Marker coordinate={record.pathCoordinates[0]} title="출발" />
            <Marker coordinate={record.pathCoordinates[record.pathCoordinates.length - 1]} title="도착" />
          </>
        )}
      </MapView>
      <View style={styles.infoContainer}>
        <View style={styles.infoItem}>
          <Text style={styles.label}>산책길 이름</Text>
          <Text style={styles.value}>{record.name}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.label}>간단한 소개</Text>
          <Text style={styles.value}>{record.description}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.label}>별점</Text>
          <Text style={styles.value}>{record.rating} / 5</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.label}>소요시간</Text>
          <Text style={styles.value}>{formatElapsedTime(record.time)}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.label}>이동거리</Text>
          <Text style={styles.value}>{record.distance.toFixed(1)} m</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.label}>등록시간</Text>
          <Text style={styles.value}>{record.date}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleWriteDiary}>
        <Text style={styles.buttonText}>걸음일기📝</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  map: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
  },
  infoContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginBottom: 20, // Add marginBottom to separate from button
  },
  infoItem: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 10,
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  value: {
    fontSize: 17,
    color: '#555',
  },
  button: {
    backgroundColor: '#1EB1FC',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default RecordContents;
