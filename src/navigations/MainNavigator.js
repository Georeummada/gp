import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'; // 수정된 부분
import AuthStack from './AuthStack';
import AppStack from './AppStack';

const Stack = createStackNavigator();

const MainNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Auth" component={AuthStack} />
            <Stack.Screen name="App" component={AppStack} />
        </Stack.Navigator>
    );
};

export default MainNavigator;
