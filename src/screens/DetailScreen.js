import React, { useState } from 'react';
import {
    StyleSheet, View, Text, TextInput, Switch, ScrollView,
    TouchableOpacity, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Alert, Button
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MapView, { Polyline, Marker } from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome';

const DetailScreen = ({ route, navigation }) => {
    const { pathCoordinates, exerciseType, elapsedTime, distance } = route.params;
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [rating, setRating] = useState(2);
    const [share, setShare] = useState(false);
    const [region, setRegion] = useState({
        latitude: pathCoordinates.length > 0 ? pathCoordinates[0].latitude : 37.78825,
        longitude: pathCoordinates.length > 0 ? pathCoordinates[0].longitude : -122.4324,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    });

    const handleSave = async () => {
        try {
            const newRecord = {
                id: Date.now().toString(),
                name,
                description,
                specialNotes: '',
                rating,
                time: elapsedTime,
                distance,
                date: new Date().toLocaleDateString(),
                pathCoordinates,
                share
            };

            const existingRecords = JSON.parse(await AsyncStorage.getItem('records')) || [];
            const updatedRecords = [...existingRecords, newRecord];
            await AsyncStorage.setItem('records', JSON.stringify(updatedRecords));

            Alert.alert('기록 저장 완료', '기록이 성공적으로 저장되었습니다.');
            navigation.navigate('Content');
        } catch (error) {
            Alert.alert('에러', '기록을 저장하는 중 문제가 발생했습니다.');
        }
    };

    const handleCancel = () => {
        Alert.alert(
            "경로 저장을 취소하겠습니까?",
            "",
            [
                {
                    text: "아니요",
                    onPress: () => console.log("취소됨"),
                    style: "cancel"
                },
                {
                    text: "예",
                    onPress: () => navigation.navigate('Content')
                }
            ]
        );
    };

    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <TouchableOpacity key={i} onPress={() => setRating(i)}>
                    <Icon
                        name="star"
                        size={30}
                        color={i <= rating ? '#FFD700' : '#d3d3d3'}
                        style={styles.star}
                    />
                </TouchableOpacity>
            );
        }
        return stars;
    };

    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                    <MapView
                        style={styles.map}
                        region={region}
                        onRegionChangeComplete={setRegion}
                        onLayout={() => {
                            if (pathCoordinates.length > 0) {
                                setRegion({
                                    latitude: pathCoordinates[0].latitude,
                                    longitude: pathCoordinates[0].longitude,
                                    latitudeDelta: 0.01,
                                    longitudeDelta: 0.01,
                                });
                            }
                        }}
                    >
                        <Polyline coordinates={pathCoordinates} strokeWidth={2} />
                        {pathCoordinates.length > 0 && (
                            <>
                                <Marker coordinate={pathCoordinates[0]} title="출발" />
                                <Marker coordinate={pathCoordinates[pathCoordinates.length - 1]} title="도착" />
                            </>
                        )}
                    </MapView>
                    <View style={styles.infoContainer}>
                        <Text style={styles.label}>산책길 이름</Text>
                        <TextInput
                            style={styles.input}
                            value={name}
                            onChangeText={setName}
                            placeholder="예) 강화도일몰맛집길"
                        />
                        <Text style={styles.label}>간단한 소개</Text>
                        <TextInput
                            style={styles.input}
                            value={description}
                            onChangeText={setDescription}
                            placeholder="예) 뷰가 좋고 한적한 산책길"
                        />
                        <Text style={styles.label}>별점</Text>
                        <View style={styles.starContainer}>
                            {renderStars()}
                        </View>
                        <Text style={styles.label}>공유 여부</Text>
                        <Switch value={share} onValueChange={setShare} />
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.button} onPress={handleSave}>
                                <Text style={styles.buttonText}>저장</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={handleCancel}>
                                <Text style={[styles.buttonText, styles.cancelButtonText]}>취소</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollViewContainer: {
        flexGrow: 1,
    },
    map: {
        height: 300,
    },
    infoContainer: {
        padding: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    input: {
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        padding: 10,
        fontSize: 16,
    },
    starContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    star: {
        marginHorizontal: 5,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    button: {
        backgroundColor: '#1EB1FC',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        flex: 1,
        marginHorizontal: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    cancelButton: {
        backgroundColor: '#d3d3d3',
    },
    cancelButtonText: {
        color: '#555',
    },
});

export default DetailScreen;
