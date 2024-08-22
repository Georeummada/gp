import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ContentTab from './ContentTab';
import ExerciseScreen2 from '../screens/ExerciseScreen2';
import DetailScreen from '../screens/DetailScreen';
import CheckRecord from '../screens/CheckRecord';
import RecordContents from '../screens/RecordContents';
import RecordScreen from '../screens/RecordScreen'; // 추가
import DiaryScreen from '../screens/DiaryScreen'; // 추가
import FriendList from '../screens/FriendList';
import FriendRecord from '../screens/FriendRecord';


const Stack = createNativeStackNavigator();

const AppStack = () => {
    return (
        <Stack.Navigator initialRouteName="Content">
            <Stack.Screen name="Content" component={ContentTab} options={{ title:'운동 선택', headerShown: false }}/>
            <Stack.Screen name="ExerciseScreen2" component={ExerciseScreen2} options={{title:'산책'}} />
            <Stack.Screen name="DetailScreen" component={DetailScreen}options={{title:'산책길 저장'}} />
            <Stack.Screen name="CheckRecord" component={CheckRecord} options={{title:'오늘의 발자국'}}/>
            <Stack.Screen name="RecordContents" component={RecordContents} options={{title:'발자국'}}/>
            <Stack.Screen name="RecordScreen" component={RecordScreen} options={{title:'산책기록'}}/>
            <Stack.Screen name="DiaryScreen" component={DiaryScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="FriendList" component={FriendList} options={{title:'친구 목록'}}/>
            <Stack.Screen name="FriendRecord" component={FriendRecord} options={{title:'친구의 기록'}} />
        </Stack.Navigator>
    );
};

export default AppStack;
