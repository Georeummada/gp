/*import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

const DiaryScreen = ({ route }) => {
  const { image, diary, date } = route.params;

  return (
    <ImageBackground source={{ uri: image }} style={styles.backgroundImage}>
      <View style={styles.card}>
        <Text style={styles.diaryText}>{diary}</Text>
        <Text style={styles.dateText}>{date}</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 10,
    padding: 20,
    margin: 20,
    width: '80%',
  },
  diaryText: {
    color: 'white',
    fontSize: 18,
    marginBottom: 10,
  },
  dateText: {
    color: 'white',
    fontSize: 14,
    marginBottom: 10,
    textAlign: 'right',
  },
});

export default DiaryScreen;*/
/*import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const DiaryScreen = ({ route }) => {
    const { diary } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>걸음 일기</Text>
            <Text style={styles.entry}>{diary.entry}</Text>
            <Image source={{ uri: diary.image }} style={styles.image} />
            <Text style={styles.publicText}>공개 여부: {diary.isPublic ? '공개' : '비공개'}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    entry: {
        fontSize: 18,
        marginBottom: 20,
    },
    image: {
        width: '100%',
        height: 200,
        marginBottom: 20,
    },
    publicText: {
        fontSize: 18,
    },
});

export default DiaryScreen;
*/
/*import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DiaryScreen = ({ route }) => {
    const { diary } = route.params;
    const navigation = useNavigation();
    const currentDate = new Date().toLocaleString();

    return (
        <ImageBackground source={{ uri: diary.image }} style={styles.backgroundImage}>
            <View style={styles.overlay}>
                <View style={styles.card}>
                    <Text style={styles.title}>걸음 일기</Text>
                    <Text style={styles.entry}>{diary.entry}</Text>
                    <Text style={styles.date}>저장한 날짜: {currentDate}</Text>
                    <Text style={styles.publicText}>공개 여부: {diary.isPublic ? '공개' : '비공개'}</Text>
                    <TouchableOpacity style={styles.exitButton} onPress={() => navigation.navigate('Content')}>
                        <Text style={styles.exitButtonText}>닫기</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0)', // 배경 이미지 위에 반투명 검정색 오버레이
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        width: '80%',
        backgroundColor: 'rgba(0, 0, 0, 0.3)', // 불투명한 검정색
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#fff', // 텍스트 색상을 흰색으로 변경
    },
    entry: {
        fontSize: 18,
        marginBottom: 20,
        textAlign: 'center',
        color: '#fff', // 텍스트 색상을 흰색으로 변경
    },
    date: {
        fontSize: 16,
        color: '#ccc', // 텍스트 색상을 밝은 회색으로 변경
        marginBottom: 10,
    },
    publicText: {
        fontSize: 18,
        color: '#fff', // 텍스트 색상을 흰색으로 변경
    },
    exitButton: {
        marginTop: 20,
        backgroundColor: '#E6EDE0', // 버튼 배경색을 변경
        padding: 10,
        borderRadius: 5,
    },
    exitButtonText: {
        color: '#000', // 텍스트 색상을 검정색으로 변경
        fontSize: 16,
    },
});

export default DiaryScreen;
*/
/*import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DiaryScreen = ({ route }) => {
    const { diary } = route.params;
    const navigation = useNavigation();
    const currentDate = new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString();

    return (
        <ImageBackground source={{ uri: diary.image }} style={styles.backgroundImage}>
            <View style={styles.overlay} />
            <View style={styles.container}>
                <View style={styles.card}>
                    <Text style={styles.title}>걸음 일기</Text>
                    <Text style={styles.entry}>{diary.entry}</Text>
                    <Text style={styles.date}>저장한 날짜: {currentDate}</Text>
                    <Text style={styles.publicText}>공개 여부: {diary.isPublic ? '공개' : '비공개'}</Text>
                    <TouchableOpacity style={styles.exitButton} onPress={() => navigation.navigate('Content')}>
                        <Text style={styles.exitButtonText}>닫기</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    card: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        borderRadius: 10,
        padding: 20,
        width: '100%',
        marginBottom: 20,
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    entry: {
        color: '#fff',
        fontSize: 18,
        marginBottom: 10,
        textAlign: 'center',
    },
    date: {
        color: '#fff',
        fontSize: 14,
        marginBottom: 10,
        textAlign: 'right',
        textAlign: 'center',
    },
    publicText: {
        color: '#fff',
        fontSize: 14,
        marginBottom: 20,
        textAlign: 'center',
    },
    exitButton: {
        backgroundColor: '#E6EDE0',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    exitButtonText: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default DiaryScreen;
*/
/*import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DiaryScreen = ({ route }) => {
    const { diary } = route.params;
    const navigation = useNavigation();
    const currentDate = new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString();

    return (
        <ImageBackground source={{ uri: diary.image }} style={styles.backgroundImage}>
            <View style={styles.container}>
                <View style={styles.card}>
                    <ScrollView contentContainerStyle={styles.scrollContainer}>
                        <Text style={styles.entry}>{diary.entry}</Text>
                        <Text style={styles.date}>저장한 날짜: {currentDate}</Text>
                    </ScrollView>
                    <TouchableOpacity style={styles.exitButton} onPress={() => navigation.navigate('Content')}>
                        <Text style={styles.exitButtonText}>닫기</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 20,
    },
    card: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 10,
        padding: 20,
        width: '100%',
        height: '33%', // 카드 높이를 화면의 1/3로 고정
        marginBottom: 20,
        alignItems: 'center', // 가운데 정렬
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    entry: {
        color: '#fff',
        fontSize: 18,
        marginBottom: 20,
        textAlign: 'center',
    },
    date: {
        color: '#fff',
        fontSize: 14,
        marginBottom: 10,
        textAlign: 'center',
    },
    exitButton: {
        backgroundColor: '#E6EDE0',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    exitButtonText: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default DiaryScreen;
*/
import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DiaryScreen = ({ route }) => {
    const { diary } = route.params;
    const navigation = useNavigation();

    return (
        <ImageBackground source={{ uri: diary.image }} style={styles.backgroundImage}>
            <View style={styles.container}>
                <View style={styles.card}>
                    <ScrollView contentContainerStyle={styles.scrollContainer}>
                        <Text style={styles.entry}>{diary.entry}</Text>
                        <Text style={styles.date}>저장한 날짜: {diary.date}</Text>
                    </ScrollView>
                    <TouchableOpacity style={styles.exitButton} onPress={() => navigation.navigate('Content')}>
                        <Text style={styles.exitButtonText}>닫기</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 20,
    },
    card: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 10,
        padding: 20,
        width: '100%',
        height: '33%', // 카드 높이를 화면의 1/3로 고정
        marginBottom: 20,
        alignItems: 'center', // 가운데 정렬
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    entry: {
        color: '#fff',
        fontSize: 18,
        marginBottom: 20,
        textAlign: 'center',
    },
    date: {
        color: '#fff',
        fontSize: 14,
        marginBottom: 10,
        textAlign: 'center',
    },
    exitButton: {
        backgroundColor: '#E6EDE0',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    exitButtonText: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default DiaryScreen;
