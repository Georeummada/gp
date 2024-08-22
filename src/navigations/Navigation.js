/*import { NavigationContainer } from "@react-navigation/native";
import ContentTab from "./ContentTab";
import AuthStack from "./AuthStack";

const Navigation = () => {
    return (
        <NavigationContainer onReady={onReady}>
            {UserActivation.uid ? <ContentTab/> : <AuthStack/>}
        </NavigationContainer>
    );
};

export default Navigation;*/
/*
import { NavigationContainer } from "@react-navigation/native";
import ContentTab from "./ContentTab";
import AuthStack from "./AuthStack";

const Navigation = () => {
    return (
        <NavigationContainer>
            <AuthStack />
        </NavigationContainer>
    );
};

export default Navigation;
*/

/*import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StartScreen from '../screens/StartScreen';
import ContentTab from './ContentTab';
import ExerciseScreen2 from '../screens/ExerciseScreen2'; // 추가

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="MainScreen" component={StartScreen} />
                <Stack.Screen name="ContentTab" component={ContentTab} options={{ headerShown: false }} />
                <Stack.Screen name="ExerciseScreen2" component={ExerciseScreen2} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;*/

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './AuthStack';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <AuthStack />
        </NavigationContainer>
    );
};

export default Navigation;

