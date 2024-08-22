import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert, Platform } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import * as Location from 'expo-location';

const ExerciseScreen2 = ({ route, navigation }) => {
    const [location, setLocation] = useState(null);
    const [elapsedTime, setElapsedTime] = useState(0);
    const [speed, setSpeed] = useState(0);
    const [distance, setDistance] = useState(0);
    const [isTracking, setIsTracking] = useState(false);
    const [pathCoordinates, setPathCoordinates] = useState([]);
    const [region, setRegion] = useState({
        latitude: 37.546475,
        longitude: 126.9646916,
        latitudeDelta: 0.005,
        longitudeDelta: 0.0025,
    });
    const [locationSubscription, setLocationSubscription] = useState(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                Alert.alert('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location.coords);
            setRegion((prevRegion) => ({
                ...prevRegion,
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
            }));
        })();
    }, []);

    useEffect(() => {
        let timer;
        if (isTracking) {
            const startTracking = async () => {
                const subscription = await Location.watchPositionAsync(
                    {
                        accuracy: Location.Accuracy.High,
                        timeInterval: 1000,
                        distanceInterval: 2,
                    },
                    (newLocation) => {
                        setLocation(newLocation.coords);
                        setSpeed(newLocation.coords.speed);
                        setPathCoordinates((prevCoords) => [...prevCoords, newLocation.coords]);
                        if (pathCoordinates.length > 1) {
                            const prevCoord = pathCoordinates[pathCoordinates.length - 1];
                            const dist = haversineDistance(prevCoord, newLocation.coords);
                            setDistance(distance + dist);
                        }
                    }
                );
                setLocationSubscription(subscription);
            };
            startTracking();

            timer = setInterval(() => {
                setElapsedTime((prevTime) => prevTime + 1);
            }, 1000);
        }

        return () => {
            if (locationSubscription) {
                locationSubscription.remove();
            }
            if (timer) {
                clearInterval(timer);
            }
        };
    }, [isTracking]);

    const haversineDistance = (coord1, coord2) => {
        const toRad = (angle) => (angle * Math.PI) / 180;
        const R = 6371; // Radius of the Earth in kilometers
        const dLat = toRad(coord2.latitude - coord1.latitude);
        const dLon = toRad(coord2.longitude - coord1.longitude);
        const lat1 = toRad(coord1.latitude);
        const lat2 = toRad(coord2.latitude);

        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                  Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c * 1000; // Distance in meters
    };

    const handleStartStopTracking = () => {
        setIsTracking(!isTracking);
        if (isTracking) {
            Alert.alert(
                "확인",
                `지금까지 생성한 경로를 나만의 산책길로 저장할까요?`,
                [
                    {
                        text: "아니오",
                        onPress: () => console.log("아니오 Pressed"),
                        style: "cancel"
                    },
                    {
                        text: "네", onPress: () => navigation.navigate('DetailScreen', {
                            pathCoordinates,
                            elapsedTime,
                            distance
                        })
                    }
                ]
            );
        }
    };

    const zoomIn = () => {
        setRegion((prevRegion) => ({
            ...prevRegion,
            latitudeDelta: prevRegion.latitudeDelta / 2,
            longitudeDelta: prevRegion.longitudeDelta / 2,
        }));
    };

    const zoomOut = () => {
        setRegion((prevRegion) => ({
            ...prevRegion,
            latitudeDelta: prevRegion.latitudeDelta * 2,
            longitudeDelta: prevRegion.longitudeDelta * 2,
        }));
    };

    return (
        <View style={styles.container}>
            {location && (
                <MapView
                    style={styles.map}
                    region={region}
                    onRegionChangeComplete={setRegion}
                >
                    <Marker
                        coordinate={{
                            latitude: location.latitude,
                            longitude: location.longitude,
                        }}
                    />
                    <Polyline coordinates={pathCoordinates} strokeWidth={2} />
                </MapView>
            )}
            <View style={styles.infoContainer}>
                <View style={styles.statsContainer}>
                    <View style={styles.statItem}>
                        <Text style={styles.statValue}>{elapsedTime}s</Text>
                        <Text style={styles.statLabel}>시간</Text>
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.statValue}>{(speed * 3.6).toFixed(2)}km/h</Text>
                        <Text style={styles.statLabel}>속도</Text>
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.statValue}>{(distance / 1000).toFixed(2)}km</Text>
                        <Text style={styles.statLabel}>거리</Text>
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={handleStartStopTracking}>
                        <Text style={styles.buttonText}>{isTracking ? '중지' : '시작'}</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.zoomButtons}>
                <TouchableOpacity onPress={zoomIn} style={styles.zoomButton}>
                    <Text>+</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={zoomOut} style={styles.zoomButton}>
                    <Text>-</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    map: {
        flex: 1,
    },
    infoContainer: {
        height: 200,
        backgroundColor: '#F8F8F8',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
    },
    statItem: {
        alignItems: 'center',
    },
    statValue: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    statLabel: {
        fontSize: 16,
        color: '#888',
    },
    buttonContainer: {
        alignItems: 'center',
        marginTop: 10,
    },
    button: {
        backgroundColor: '#1EB1FC',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    zoomButtons: {
        position: 'absolute',
        right: 10,
        bottom: 200,
        flexDirection: 'column',
    },
    zoomButton: {
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 10,
        marginBottom: 5,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 4,
    },
});

export default ExerciseScreen2;
