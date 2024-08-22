/*import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ExerciseScreen1 from '../screens/ExerciseScreen1';
import RecordScreen from '../screens/RecordScreen';

const Tab = createBottomTabNavigator();

const ContentTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        gestureEnabled: false, // 여기서 슬라이드 제스처 비활성화
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Exercise" component={ExerciseScreen1} />
      <Tab.Screen name="Record" component={RecordScreen} />
    </Tab.Navigator>
  );
};

export default ContentTab;
*/

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ExerciseScreen1 from '../screens/ExerciseScreen1';
import CheckRecord from '../screens/CheckRecord';
import FriendList from '../screens/FriendList';
//import SearchScreen from '../screens/SearchScreen';


const Tab = createBottomTabNavigator();

const ContentTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        gestureEnabled: false, // 슬라이드 제스처 비활성화
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Exercise" component={ExerciseScreen1} />
      <Tab.Screen name="Record" component={CheckRecord} />
      <Tab.Screen name="Friend" component={FriendList} />
    </Tab.Navigator>
  );
};

export default ContentTab;
