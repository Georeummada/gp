import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import MainNavigator from './navigations/MainNavigator';

const fetchFonts = () => {
  return Font.loadAsync({
    'gowun-dodum': require('../assets/fonts/GowunDodum-Regular.ttf'),
    'bagel-fat-one': require('../assets/fonts/BagelFatOne-Regular.ttf'),
    'HakgyoansimUndongjang': require('../assets/fonts/HakgyoansimUndongjangL.ttf'),
    'KangwonEdu': require('../assets/fonts/KangwonEdu.ttf'),
    'MoiraiOne': require('../assets/fonts/MoiraiOne-Regular.ttf'),
    'SokchoBadaBatang': require('../assets/fonts/SokchoBadaBatang.ttf'),
    'RubikMonoOne': require('../assets/fonts/RubikMonoOne-Regular.ttf'),
  });
};

const App = () => {
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
};

export default App;











