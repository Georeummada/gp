import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal } from 'react-native';
import { Camera } from 'expo-camera'; // expo-camera 임포트

const TestCamera = () => {
    const [hasPermission, setHasPermission] = useState(null);
    const [isCameraVisible, setIsCameraVisible] = useState(false);
    const cameraRef = useRef(null);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const takePicture = async () => {
        if (cameraRef.current) {
            const photo = await cameraRef.current.takePictureAsync();
            console.log("Photo taken:", photo);
            setIsCameraVisible(false);
        }
    };

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => setIsCameraVisible(true)}>
                <Text style={styles.buttonText}>Open Camera</Text>
            </TouchableOpacity>
            {isCameraVisible && (
                <Modal visible={isCameraVisible} animationType="slide">
                    <Camera style={styles.camera} ref={cameraRef}>
                        <View style={styles.cameraButtonContainer}>
                            <TouchableOpacity style={styles.cameraButton} onPress={takePicture}>
                                <Text style={styles.buttonText}>Capture</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.cameraButton} onPress={() => setIsCameraVisible(false)}>
                                <Text style={styles.buttonText}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </Camera>
                </Modal>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#1EB1FC',
        padding: 15,
        borderRadius: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    camera: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    cameraButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
    },
    cameraButton: {
        backgroundColor: '#1EB1FC',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
    },
});

export default TestCamera;
