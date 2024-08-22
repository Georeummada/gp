/*import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import StartScreen from '../screens/StartScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import AppStack from './AppStack';

const Stack = createStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator initialRouteName="StartScreen" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="StartScreen" component={StartScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="SignUpScreen" component={SignUpScreen}/>
            <Stack.Screen 
                name="HomeScreen" 
                component={HomeScreen} 
                options={{ gestureEnabled: false }} // 슬라이드 제스처 비활성화
            />
            <Stack.Screen name="App" component={AppStack}/>
        </Stack.Navigator>
    );
};

export default AuthStack;*/
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'; // 수정된 부분
import HomeScreen from '../screens/HomeScreen';
import StartScreen from '../screens/StartScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import SettingScreen from '../screens/SettingScreen'
import AppStack from './AppStack';

const Stack = createStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator initialRouteName="StartScreen" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="StartScreen" component={StartScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="SignUpScreen" component={SignUpScreen}/>
            <Stack.Screen name="SettingScreen" component={SettingScreen}/>
            <Stack.Screen name="HomeScreen" component={HomeScreen}/>
            <Stack.Screen name="App" component={AppStack} options={{ gestureEnabled: false }}/> 
        </Stack.Navigator> //gestureEnabled:false로 바꾸면 뒤로가기 기능 없어짐
    ); 
};

export default AuthStack;
