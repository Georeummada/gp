import React from 'react';
import { StyleSheet, View, Text, Pressable, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const ExerciseScreen1 = ({ navigation }) => {
    const handleExerciseSelect = (exerciseType) => {
        navigation.navigate('ExerciseScreen2', { exerciseType });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>운동 유형을 선택하세요</Text>
            <Pressable
                style={styles.button}
                onPress={() => handleExerciseSelect('산책')}
            >
                <Image 
                    source={require('../../assets/walk.png')}
                    style={styles.icon}
                />
                <Text style={styles.extype}>
                  산책
                </Text>
            </Pressable>
            <Pressable
                style={[styles.button, styles.buttonSpacing]}
                onPress={() => handleExerciseSelect('달리기')}
            >
                <Image 
                    source={require('../../assets/run.png')}
                    style={styles.icon}
                />
                <Text style={styles.extype}>
                  달리기
                </Text>
            </Pressable>
            <Pressable
                style={[styles.button, styles.buttonSpacing]}
                onPress={() => handleExerciseSelect('사이클')}
            >
                <Image 
                    source={require('../../assets/cycle.png')}
                    style={styles.icon}
                />
                <Text style={styles.extype}>
                  사이클링
                </Text>
            </Pressable>
            <StatusBar style="auto" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 30,
    },
    button: {
        width: 120,
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#E2E7DD",
        borderRadius: 10,
    },
    buttonSpacing: {
        marginTop: 20,
    },
    icon: {
        width: 70,
        height: 70,
    },
    extype: {
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 10,
    },
});

export default ExerciseScreen1;