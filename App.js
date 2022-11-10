/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const [name, setName] = useState('Hichem');
  const [session, setSession] = useState({number: 6, title:'state'})
  const [current, setCurrent] = useState(true)
  const onClickHandler = () => {
    setName("Programming with Hichem");
    setSession({number: 7, title: 'state'});
    setCurrent(false);
  }

  return (
    <View style={backgroundStyle}>
      <Text> Hello {name}</Text>
      <Text> This is session number {session.number} and about {session.title} </Text>
      <Text> {current ? 'current session' : 'next session'} </Text>
      <Button title="Update State" onPress={onClickHandler}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
