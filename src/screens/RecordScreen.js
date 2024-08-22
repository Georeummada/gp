/*import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert, Switch, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const RecordScreen = ({ navigation }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [diaryEntry, setDiaryEntry] = useState('');
  const [isPublic, setIsPublic] = useState(false);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setSelectedImage(result.uri);
    }
  };

  const handleSave = () => {
    Alert.alert(
      "일기 저장",
      "일기를 작성하시겠습니까?",
      [
        {
          text: "취소",
          onPress: () => console.log("취소됨"),
          style: "cancel"
        },
        {
          text: "예",
          onPress: () => navigation.navigate('RecordContents', {
            image: selectedImage,
            diary: diaryEntry,
            public: isPublic,
          })
        }
      ]
    );
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity onPress={pickImage} style={styles.imagePicker}>
        {selectedImage ? (
          <Image source={{ uri: selectedImage }} style={styles.image} />
        ) : (
          <Text style={styles.imagePickerText}>사진 선택</Text>
        )}
      </TouchableOpacity>
      <TextInput
        style={styles.diaryInput}
        placeholder="오늘 산책은 어떠셨나요?"
        multiline
        value={diaryEntry}
        onChangeText={setDiaryEntry}
      />
      <View style={styles.toggleContainer}>
        <Text style={styles.toggleLabel}>공개 여부</Text>
        <Switch value={isPublic} onValueChange={setIsPublic} />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.buttonText}>저장</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
          <Text style={[styles.buttonText, styles.cancelButtonText]}>취소</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    justifyContent: 'center',
  },
  imagePicker: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#f0f0f0',
    height: 200,
    borderRadius: 10,
  },
  imagePickerText: {
    color: '#aaa',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  diaryInput: {
    height: 150,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    textAlignVertical: 'top',
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  toggleLabel: {
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  saveButton: {
    backgroundColor: '#1EB1FC',
    padding: 15,
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 5,
  },
  cancelButton: {
    backgroundColor: '#d3d3d3',
    padding: 15,
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  cancelButtonText: {
    color: '#555',
  },
});

export default RecordScreen;
*/
/*import React, { useState } from 'react';
import {
  View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image, Switch, Alert
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RecordScreen = ({ route, navigation }) => {
  const { record } = route.params;
  const [image, setImage] = useState(null);
  const [diary, setDiary] = useState('');
  const [isPublic, setIsPublic] = useState(false);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.uri);
    }
  };

  const handleSave = async () => {
    if (!diary) {
      Alert.alert("일기를 작성해 주세요.");
      return;
    }

    const diaryData = {
      image,
      diary,
      isPublic,
      ...record,
    };

    await AsyncStorage.setItem(`diary_${record.id}`, JSON.stringify(diaryData));
    navigation.navigate('DiaryScreen', { record: diaryData });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={pickImage}>
        <View style={styles.imageContainer}>
          {image ? (
            <Image source={{ uri: image }} style={styles.image} />
          ) : (
            <Text style={styles.imagePlaceholder}>사진을 선택하세요</Text>
          )}
        </View>
      </TouchableOpacity>
      <TextInput
        style={styles.diaryInput}
        multiline
        placeholder="일기를 작성하세요"
        value={diary}
        onChangeText={setDiary}
      />
      <View style={styles.switchContainer}>
        <Text>공개 여부</Text>
        <Switch value={isPublic} onValueChange={setIsPublic} />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleSave}>
          <Text style={styles.buttonText}>저장</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.cancelButton]}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>취소</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  imageContainer: {
    width: '100%',
    height: 200,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imagePlaceholder: {
    color: '#aaa',
    fontSize: 16,
  },
  diaryInput: {
    flex: 1,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    textAlignVertical: 'top',
    marginBottom: 20,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    backgroundColor: '#1EB1FC',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  cancelButton: {
    backgroundColor: '#aaa',
  },
});

export default RecordScreen;
*/
/*import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableWithoutFeedback, Keyboard, Image, Switch, TouchableOpacity, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RecordScreen = ({ navigation, route }) => {
  const [diaryEntry, setDiaryEntry] = useState('');
  const [image, setImage] = useState(null);
  const [isPublic, setIsPublic] = useState(false);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.uri);
    }
  };

  const saveDiary = async () => {
    const newDiary = {
      id: Date.now().toString(),
      entry: diaryEntry,
      image,
      isPublic,
    };

    const storedDiaries = JSON.parse(await AsyncStorage.getItem('diaries')) || [];
    storedDiaries.push(newDiary);
    await AsyncStorage.setItem('diaries', JSON.stringify(storedDiaries));

    navigation.navigate('DiaryScreen', { diary: newDiary });
  };

  const handleCancel = () => {
    Alert.alert(
      "일기 작성을 취소하시겠습니까?",
      "",
      [
        {
          text: "아니오",
          onPress: () => console.log("일기 작성 취소됨"),
          style: "cancel"
        },
        {
          text: "예",
          onPress: () => navigation.goBack()
        }
      ]
    );
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <TouchableOpacity onPress={pickImage}>
          {image ? (
            <Image source={{ uri: image }} style={styles.image} />
          ) : (
            <View style={styles.imagePlaceholder}>
              <Text style={styles.imagePlaceholderText}>사진을 선택하세요</Text>
            </View>
          )}
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="오늘의 일기를 작성하세요"
          value={diaryEntry}
          onChangeText={setDiaryEntry}
          multiline
        />
        <View style={styles.switchContainer}>
          <Text>공개 여부</Text>
          <Switch
            value={isPublic}
            onValueChange={setIsPublic}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={saveDiary}>
            <Text style={styles.buttonText}>저장</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={handleCancel}>
            <Text style={[styles.buttonText, styles.cancelButtonText]}>취소</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  imagePlaceholder: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
  },
  imagePlaceholderText: {
    color: '#888',
    fontSize: 18,
  },
  input: {
    height: 100,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    marginBottom: 20,
    textAlignVertical: 'top',
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    backgroundColor: '#1EB1FC',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#fff',
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

export default RecordScreen;
*/
/*import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableWithoutFeedback, Keyboard, Image, Switch, TouchableOpacity, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';
import uuid from 'react-native-uuid';

const RecordScreen = ({ route }) => {
    const { record } = route.params;
    const [entry, setEntry] = useState('');
    const [image, setImage] = useState(null);
    const [isPublic, setIsPublic] = useState(false);
    const navigation = useNavigation();

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    const saveDiary = async () => {
        if (!entry || !image) {
            alert("일기와 이미지를 모두 입력해주세요.");
            return;
        }

        const diaryEntry = {
            id: uuid.v4(),
            entry,
            image,
            isPublic,
        };

        try {
            const existingDiaries = JSON.parse(await AsyncStorage.getItem('diaries')) || [];
            existingDiaries.push(diaryEntry);
            await AsyncStorage.setItem('diaries', JSON.stringify(existingDiaries));
            navigation.navigate('DiaryScreen', { diary: diaryEntry });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.title}>오늘의 걸음 일기 📝</Text>
                <TouchableOpacity style={styles.imageContainer} onPress={pickImage}>
                    {image ? (
                        <Image source={{ uri: image }} style={styles.image} />
                    ) : (
                        <Text style={styles.imageButtonText}>사진을 선택하세요</Text>
                    )}
                </TouchableOpacity>
                <TextInput
                    style={styles.input}
                    placeholder="오늘의 걸음을 기록하세요"
                    value={entry}
                    onChangeText={setEntry}
                    multiline
                />
                <View style={styles.switchContainer}>
                    <Text style={{fontSize: 17}}>공개 여부</Text>
                    <Switch value={isPublic} onValueChange={setIsPublic} />
                </View>
                <TouchableOpacity style={styles.saveButton} onPress={saveDiary}>
                    <Text style={styles.saveButtonText}>저장</Text>
                </TouchableOpacity>
            </ScrollView>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 5,
        marginBottom: 30,
        textAlign: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 20,
        borderRadius: 5,
        height: '25%', // 텍스트 입력 창의 높이를 화면 비율의 1/3로 설정
        fontSize: 18,
    },
    imageContainer: {
        backgroundColor: '#DCDCDC',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        borderColor: '#DCDCDC',
        borderWidth: 1,
    },
    imageButtonText: {
        color: '#4F4F4F',
        fontSize: 15,
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 4,
    
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 5,
    },
    switchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    saveButton: {
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
    saveButtonText: {
        color: '#FFF',
        fontSize: 20,
        textShadowColor: '#21610B',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 4,
        fontFamily: 'KangwonEdu',
    },
});

export default RecordScreen;
*/
/*import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableWithoutFeedback, Keyboard, Image, Switch, TouchableOpacity, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';
import uuid from 'react-native-uuid';

const RecordScreen = ({ route }) => {
    const { record } = route.params;
    const [entry, setEntry] = useState('');
    const [image, setImage] = useState(null);
    const [isPublic, setIsPublic] = useState(false);
    const navigation = useNavigation();

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    const saveDiary = async () => {
        if (!entry || !image) {
            alert("일기와 이미지를 모두 입력해주세요.");
            return;
        }

        const diaryEntry = {
            id: record.id, // 동일한 산책길 ID 사용
            entry,
            image,
            isPublic,
        };

        try {
            const existingDiaries = JSON.parse(await AsyncStorage.getItem('diaries')) || [];
            const updatedDiaries = existingDiaries.filter(diary => diary.id !== record.id);
            updatedDiaries.push(diaryEntry);
            await AsyncStorage.setItem('diaries', JSON.stringify(updatedDiaries));
            navigation.navigate('DiaryScreen', { diary: diaryEntry });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.title}>오늘의 걸음 일기 📝</Text>
                <TouchableOpacity style={styles.imageContainer} onPress={pickImage}>
                    {image ? (
                        <Image source={{ uri: image }} style={styles.image} />
                    ) : (
                        <Text style={styles.imageButtonText}>사진을 선택하세요</Text>
                    )}
                </TouchableOpacity>
                <TextInput
                    style={styles.input}
                    placeholder="오늘의 걸음을 기록하세요"
                    value={entry}
                    onChangeText={setEntry}
                    multiline
                />
                <View style={styles.switchContainer}>
                    <Text style={{fontSize: 17}}>공개 여부</Text>
                    <Switch value={isPublic} onValueChange={setIsPublic} />
                </View>
                <TouchableOpacity style={styles.saveButton} onPress={saveDiary}>
                    <Text style={styles.saveButtonText}>저장</Text>
                </TouchableOpacity>
            </ScrollView>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 5,
        marginBottom: 30,
        textAlign: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 20,
        borderRadius: 5,
        height: '25%', // 텍스트 입력 창의 높이를 화면 비율의 1/3로 설정
        fontSize: 18,
    },
    imageContainer: {
        backgroundColor: '#DCDCDC',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        borderColor: '#DCDCDC',
        borderWidth: 1,
    },
    imageButtonText: {
        color: '#4F4F4F',
        fontSize: 15,
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 4,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 5,
    },
    switchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    saveButton: {
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
    saveButtonText: {
        color: '#FFF',
        fontSize: 20,
        textShadowColor: '#21610B',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 4,
    },
});

export default RecordScreen;
*/
/*import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableWithoutFeedback, Keyboard, Image, Switch, TouchableOpacity, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';
import uuid from 'react-native-uuid';

const RecordScreen = ({ route }) => {
    const { record } = route.params;
    const [entry, setEntry] = useState('');
    const [image, setImage] = useState(null);
    const [isPublic, setIsPublic] = useState(false);
    const navigation = useNavigation();

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    const saveDiary = async () => {
        if (!entry || !image) {
            alert("일기와 이미지를 모두 입력해주세요.");
            return;
        }

        const currentDate = new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString();
        const diaryEntry = {
            id: uuid.v4(),
            entry,
            image,
            isPublic,
            date: currentDate, // 저장 시간 추가
        };

        try {
            const existingDiaries = JSON.parse(await AsyncStorage.getItem('diaries')) || [];
            existingDiaries.push(diaryEntry);
            await AsyncStorage.setItem('diaries', JSON.stringify(existingDiaries));
            navigation.navigate('DiaryScreen', { diary: diaryEntry });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.title}>오늘의 걸음 일기 📝</Text>
                <TouchableOpacity style={styles.imageContainer} onPress={pickImage}>
                    {image ? (
                        <Image source={{ uri: image }} style={styles.image} />
                    ) : (
                        <Text style={styles.imageButtonText}>사진을 선택하세요</Text>
                    )}
                </TouchableOpacity>
                <TextInput
                    style={styles.input}
                    placeholder="오늘의 걸음을 기록하세요"
                    value={entry}
                    onChangeText={setEntry}
                    multiline
                />
                <View style={styles.switchContainer}>
                    <Text style={{ fontSize: 17 }}>공개 여부</Text>
                    <Switch value={isPublic} onValueChange={setIsPublic} />
                </View>
                <TouchableOpacity style={styles.saveButton} onPress={saveDiary}>
                    <Text style={styles.saveButtonText}>저장</Text>
                </TouchableOpacity>
            </ScrollView>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 5,
        marginBottom: 30,
        textAlign: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 20,
        borderRadius: 5,
        height: '25%', // 텍스트 입력 창의 높이를 화면 비율의 1/3로 설정
        fontSize: 18,
    },
    imageContainer: {
        backgroundColor: '#DCDCDC',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        borderColor: '#DCDCDC',
        borderWidth: 1,
    },
    imageButtonText: {
        color: '#4F4F4F',
        fontSize: 15,
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 4,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 5,
    },
    switchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    saveButton: {
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
    saveButtonText: {
        color: '#FFF',
        fontSize: 20,
        textShadowColor: '#21610B',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 4,
        fontFamily: 'KangwonEdu',
    },
});

export default RecordScreen;
*/
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableWithoutFeedback, Keyboard, Image, Switch, TouchableOpacity, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';
import uuid from 'react-native-uuid';

const RecordScreen = ({ route }) => {
    const { record } = route.params;
    const [entry, setEntry] = useState('');
    const [image, setImage] = useState(null);
    const [isPublic, setIsPublic] = useState(false);
    const navigation = useNavigation();

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    const saveDiary = async () => {
        if (!entry || !image) {
            alert("일기와 이미지를 모두 입력해주세요.");
            return;
        }

        const currentDate = new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString();
        const diaryEntry = {
            id: uuid.v4(),
            recordId: record.id, // Record ID 추가
            entry,
            image,
            isPublic,
            date: currentDate, // 저장 시간 추가
        };

        try {
            const existingDiaries = JSON.parse(await AsyncStorage.getItem('diaries')) || [];
            existingDiaries.push(diaryEntry);
            await AsyncStorage.setItem('diaries', JSON.stringify(existingDiaries));
            navigation.navigate('DiaryScreen', { diary: diaryEntry });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.title}>오늘의 걸음 일기 📝</Text>
                <TouchableOpacity style={styles.imageContainer} onPress={pickImage}>
                    {image ? (
                        <Image source={{ uri: image }} style={styles.image} />
                    ) : (
                        <Text style={styles.imageButtonText}>사진을 선택하세요</Text>
                    )}
                </TouchableOpacity>
                <TextInput
                    style={styles.input}
                    placeholder="오늘의 걸음을 기록하세요"
                    value={entry}
                    onChangeText={setEntry}
                    multiline
                />
                <View style={styles.switchContainer}>
                    <Text style={{ fontSize: 17 }}>공개 여부</Text>
                    <Switch value={isPublic} onValueChange={setIsPublic} />
                </View>
                <TouchableOpacity style={styles.saveButton} onPress={saveDiary}>
                    <Text style={styles.saveButtonText}>저장</Text>
                </TouchableOpacity>
            </ScrollView>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 5,
        marginBottom: 30,
        textAlign: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 20,
        borderRadius: 5,
        height: '25%', // 텍스트 입력 창의 높이를 화면 비율의 1/3로 설정
        fontSize: 18,
    },
    imageContainer: {
        backgroundColor: '#DCDCDC',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        borderColor: '#DCDCDC',
        borderWidth: 1,
    },
    imageButtonText: {
        color: '#4F4F4F',
        fontSize: 15,
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 4,
        /*fontFamily: 'KangwonEdu',*/
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 5,
    },
    switchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    saveButton: {
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
    saveButtonText: {
        color: '#FFF',
        fontSize: 20,
        textShadowColor: '#21610B',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 4,
        fontFamily: 'KangwonEdu',
    },
});

export default RecordScreen;
