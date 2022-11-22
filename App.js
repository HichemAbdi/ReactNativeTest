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

  return (
    <View style={styles.body}>
      <View style={styles.group1}>
        <View style={styles.view1}>
          <Text style={styles.text}> 1 </Text>
        </View>
        <View style={styles.view2}>
          <Text style={styles.text}> 2 </Text>
        </View>
        <View style={styles.view3}>
          <Text style={styles.text}> 3 </Text>
        </View>
      </View>

      <View style={styles.view4}>
        <Text style={styles.text}> 4 </Text>
      </View>

      <View style={styles.view5}>
        <Text style={styles.text}> 5 </Text>
      </View>

      <View style={styles.group4}>
        <View style={styles.view6}>
          <Text style={styles.text}> 6 </Text>
        </View>
        <View style={styles.view7}>
          <Text style={styles.text}> 7 </Text>
        </View>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex:1
  },
  group1: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
 
  view1: {
    flex:1,
    backgroundColor: '#00ffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  view2: {
    flex:2,
    backgroundColor: '#ff00ff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  view3: {
    flex:3,
    backgroundColor: '#ffff00',
    justifyContent: 'center',
    alignItems: 'center',
  },
  view4: {
    backgroundColor: '#ff0000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  view5: {
    backgroundColor: '#00ff00',
    justifyContent: 'center',
    alignItems: 'center',
  },
  group4: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  view6: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  view7: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0000ff',
  },
  text: {
    color: '#000000',
    fontSize: 35,
    margin: 10,
  },
});

export default App;
