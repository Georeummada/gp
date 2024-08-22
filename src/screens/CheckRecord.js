/*import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapView, { Polyline } from 'react-native-maps';
import RecordContents from './RecordContents';
import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createNativeStackNavigator();

const CheckRecordHomeScreen = ({ navigation }) => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchRecords = async () => {
      const storedRecords = JSON.parse(await AsyncStorage.getItem('records')) || [];
      setRecords(storedRecords);
    };
    fetchRecords();
  }, []);

  const deleteRecord = async (id) => {
    Alert.alert(
      "기록 삭제",
      "정말로 이 기록을 삭제하시겠습니까?",
      [
        {
          text: "취소",
          onPress: () => console.log("취소됨"),
          style: "cancel"
        },
        {
          text: "삭제",
          onPress: async () => {
            const updatedRecords = records.filter(record => record.id !== id);
            setRecords(updatedRecords);
            await AsyncStorage.setItem('records', JSON.stringify(updatedRecords));
          },
          style: "destructive"
        }
      ]
    );
  };

  const toggleFavorite = async (id) => {
    const updatedRecords = records.map(record => {
      if (record.id === id) {
        return { ...record, favorite: !record.favorite };
      }
      return record;
    });
    setRecords(updatedRecords);
    await AsyncStorage.setItem('records', JSON.stringify(updatedRecords));
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.body}>
        <Text style={styles.headerText}>👣 오늘의 발자국 👣</Text>
        {records.map((record) => (
          <View key={record.id} style={styles.recordButtonContainer}>
            <TouchableOpacity
              style={styles.recordButton}
              onPress={() => navigation.navigate('RecordContents', { record })}
            >
              <View style={styles.mapContainer}>
                <MapView
                  style={styles.map}
                  initialRegion={{
                    latitude: record.pathCoordinates[0]?.latitude || 37.78825,
                    longitude: record.pathCoordinates[0]?.longitude || -122.4324,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                  }}
                  scrollEnabled={false}
                  zoomEnabled={false}
                >
                  <Polyline coordinates={record.pathCoordinates} strokeWidth={2} />
                </MapView>
              </View>
              <View style={styles.infoContainer}>
                <Text style={styles.recordName}>{record.name}</Text>
                <Text style={styles.recordTime}>⏱️ {record.time}s</Text>
                <Text style={styles.recordDistance}>📍 {record.distance.toFixed(1)}m</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.iconButtonContainer}>
              <TouchableOpacity style={styles.iconButton} onPress={() => toggleFavorite(record.id)}>
                <Icon name={record.favorite ? "heart" : "heart-o"} size={20} color="#FF6347" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton} onPress={() => deleteRecord(record.id)}>
                <Icon name="trash" size={20} color="#1EB1FC" />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default function CheckRecord() {
  return (
    <Stack.Navigator initialRouteName="CheckRecordHome">
      <Stack.Screen
        name="CheckRecordHome"
        component={CheckRecordHomeScreen}
        options={{ title: '오늘의 기록', headerShown: false }}
      />
      <Stack.Screen
        name="RecordContents"
        component={RecordContents}
        options={{ title: '기록 내용', headerShown: false, gestureEnabled: true }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  body: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 20,
  },
  headerText: {
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
  },
  recordButtonContainer: {
    width: '100%',
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  recordButton: {
    flex: 1,
    padding: 10,
    backgroundColor: '#E6EDE0',
    borderRadius: 5,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    flexDirection: 'row',
    marginRight: 10,
  },
  mapContainer: {
    width: 100,
    height: 100,
    borderRadius: 5,
    overflow: 'hidden',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  infoContainer: {
    flex: 1,
    paddingLeft: 10,
    justifyContent: 'center',
  },
  recordName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  recordTime: {
    marginTop: 5,
    fontSize: 14,
  },
  recordDistance: {
    marginTop: 5,
    marginBottom: 18,
    fontSize: 14,
  },
  iconButtonContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 100,
  },
  iconButton: {
    backgroundColor: '#f1f1f0',
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
});
*/
import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFocusEffect } from '@react-navigation/native';
import MapView, { Polyline } from 'react-native-maps';
import RecordContents from './RecordContents';
import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createNativeStackNavigator();

const CheckRecordHomeScreen = ({ navigation }) => {
  const [records, setRecords] = useState([]);

  const fetchRecords = async () => {
    const storedRecords = JSON.parse(await AsyncStorage.getItem('records')) || [];
    setRecords(storedRecords);
  };

  useEffect(() => {
    fetchRecords();
  }, []);

  useFocusEffect(
    useCallback(() => {
      fetchRecords();
    }, [])
  );

  const deleteRecord = async (id) => {
    Alert.alert(
      "기록 삭제",
      "정말로 이 기록을 삭제하시겠습니까?",
      [
        {
          text: "취소",
          onPress: () => console.log("취소됨"),
          style: "cancel"
        },
        {
          text: "삭제",
          onPress: async () => {
            const updatedRecords = records.filter(record => record.id !== id);
            setRecords(updatedRecords);
            await AsyncStorage.setItem('records', JSON.stringify(updatedRecords));
          },
          style: "destructive"
        }
      ]
    );
  };

  const toggleFavorite = async (id) => {
    const updatedRecords = records.map(record => {
      if (record.id === id) {
        return { ...record, favorite: !record.favorite };
      }
      return record;
    });
    setRecords(updatedRecords);
    await AsyncStorage.setItem('records', JSON.stringify(updatedRecords));
  };

  const formatElapsedTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h > 0 ? `${h}시간 ` : ''}${m > 0 ? `${m}분 ` : ''}${s}초`;
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.body}>
        <Text style={styles.headerText}>👣 오늘의 발자국 👣</Text>
        {records.map((record) => (
          <View key={record.id} style={styles.recordButtonContainer}>
            <TouchableOpacity
              style={styles.recordButton}
              onPress={() => navigation.navigate('RecordContents', { record })}
            >
              <View style={styles.mapContainer}>
                <MapView
                  style={styles.map}
                  initialRegion={{
                    latitude: record.pathCoordinates[0]?.latitude || 37.78825,
                    longitude: record.pathCoordinates[0]?.longitude || -122.4324,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                  }}
                  scrollEnabled={false}
                  zoomEnabled={false}
                >
                  <Polyline coordinates={record.pathCoordinates} strokeWidth={2} />
                </MapView>
              </View>
              <View style={styles.infoContainer}>
                <Text style={styles.recordName}>{record.name}</Text>
                <Text style={styles.recordTime}>⏱️ {formatElapsedTime(record.time)}</Text>
                <Text style={styles.recordDistance}>📍 {record.distance.toFixed(1)}m</Text>
                <Text style={styles.recordDistance}>📆 {record.date}</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.iconButtonContainer}>
              <TouchableOpacity style={styles.iconButton} onPress={() => toggleFavorite(record.id)}>
                <Icon name={record.favorite ? "heart" : "heart-o"} size={20} color="#FF6347" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton} onPress={() => deleteRecord(record.id)}>
                <Icon name="trash" size={20} color="#1EB1FC" />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default function CheckRecord() {
  return (
    <Stack.Navigator initialRouteName="CheckRecordHome">
      <Stack.Screen
        name="CheckRecordHome"
        component={CheckRecordHomeScreen}
        options={{ title: '오늘의 기록', headerShown: false }}
      />
      <Stack.Screen
        name="RecordContents"
        component={RecordContents}
        options={{ title: '기록 내용', headerShown: false, gestureEnabled: true }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  body: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 20,
  },
  headerText: {
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
  },
  recordButtonContainer: {
    width: '100%',
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  recordButton: {
    flex: 1,
    padding: 10,
    backgroundColor: '#E6EDE0',
    borderRadius: 5,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    flexDirection: 'row',
    marginRight: 10,
  },
  mapContainer: {
    width: 90,
    height: 90,
    borderRadius: 5,
    overflow: 'hidden',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  infoContainer: {
    flex: 1,
    paddingLeft: 10,
    justifyContent: 'center',
  },
  recordName: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  recordTime: {
    fontSize: 13,
  },
  recordDistance: {
    marginTop: 5,
    fontSize: 13,
  },
  recordDate: {
    marginTop: 5,
    marginBottom: 20,
    fontSize: 13,
  },
  iconButtonContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 100,
  },
  iconButton: {
    backgroundColor: '#f1f1f0',
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
});
