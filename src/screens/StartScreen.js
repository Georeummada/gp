/*import React from 'react';
import { ImageBackground, StyleSheet, View, Text, Pressable, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const StartScreen = ({ navigation }) => {
    const handleGetStarted = () => {
        navigation.navigate('ContentTab'); // Get started 버튼 클릭 시 ContentTab으로 이동
    };

    return (
        <ImageBackground 
            source={require('../../assets/main1.jpg')} 
            style={styles.backgroundImage}
        >
            <View style={styles.overlay} />
            <View style={styles.container}>
                <Text style={styles.mainText}>걸음마다</Text>
                <Text style={styles.subText}>GeoreumMada</Text>
                <Text style={styles.description}>
                    당신의 <Text style={styles.highlight}>발자취</Text>를 기록하세요
                </Text>
                <Pressable
                    style={styles.button}
                    onPress={handleGetStarted} // Get started 버튼 클릭 이벤트 핸들러 설정
                >
                    <Text style={styles.buttonText}>Get started!</Text>
                </Pressable>
                <StatusBar style="auto" />
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        justifyContent: 'center',
        alignItems: 'center',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainText: {
        fontWeight: "700",
        marginTop: 50,
        alignSelf: "center",
        textAlign: "center",
        width: 300,
        fontSize: 50,
        color: 'white',
    },
    subText: {
        fontWeight: "500",
        alignSelf: "center",
        textAlign: "center",
        width: 300,
        fontSize: 30,
        color: 'white',
    },
    description: {
        fontWeight: "400",
        marginTop: 5,
        alignSelf: "center",
        textAlign: "center",
        width: 300,
        fontSize: 20,
        color: "#bbb",
    },
    highlight: {
        color: "#7CA45C",
        fontWeight: "bold",
    },
    button: {
        borderRadius: 10,
        backgroundColor: "#CBE3B3",
        marginTop: 50,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        width: 200,
        height: 50,
    },
    buttonText: {
        fontSize: 15,
        fontWeight: "bold",
    },
});

export default StartScreen;
*/

import React from 'react';
import { ImageBackground, StyleSheet, View, Text, Pressable, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const StartScreen = ({ navigation }) => {
    const handleGetStarted = () => {
        navigation.navigate('LoginScreen'); // 'App' 스택의 'Content'로 이동
    };

    return (
        <ImageBackground 
            source={require('../../assets/main1.jpg')} 
            style={styles.backgroundImage}
        >
            <View style={styles.overlay} />
            <View style={styles.container}>
                <Text style={styles.mainText}>걸음마다</Text>
                <Text style={styles.subText}>GeoreumMada</Text>
                <Text style={styles.description}>
                    당신의 <Text style={styles.highlight}>발자취</Text>를 기록하세요
                </Text>
                <Pressable
                    style={styles.button}
                    onPress={handleGetStarted}
                >
                    <Text style={styles.buttonText}>시작하기</Text>
                </Pressable>
                <StatusBar style="auto" />
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        justifyContent: 'center',
        alignItems: 'center',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainText: {
        fontWeight: "700",
        marginTop: 50,
        alignSelf: "center",
        textAlign: "center",
        width: 300,
        fontSize: 50,
        color: 'white',
        fontFamily: 'HakgyoansimUndongjang',
    },
    subText: {
        fontWeight: "500",
        alignSelf: "center",
        textAlign: "center",
        width: 300,
        fontSize: 30,
        color: 'white',
        fontFamily: 'bagel-fat-one',
    },
    description: {
        fontWeight: "400",
        marginTop: 5,
        alignSelf: "center",
        textAlign: "center",
        width: 300,
        fontSize: 20,
        color: "#bbb",
        fontFamily: 'KangwonEdu',
    },
    highlight: {
        color: "#7CA45C",
        fontWeight: "bold",
    },
    button: {
        borderRadius: 10,
        backgroundColor: "#CBE3B3",
        marginTop: 50,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        width: 200,
        height: 50,
        fontFamily: 'KangwonEdu',
    },
    buttonText: {
        fontSize: 20,
        fontWeight: "bold",
        fontFamily: 'KangwonEdu',
    },
});

export default StartScreen;