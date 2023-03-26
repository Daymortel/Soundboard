import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Image, Linking, StyleSheet, TouchableOpacity, View } from 'react-native';
import { ContextSettings } from './src/contexts';
import { Settings } from './src/settings';
import { Soundboard } from './src/soundboard';

const stack = createStackNavigator()

export default function App() {

  const [speed, setSpeed] = React.useState(1)
  const [tone, setTone] = React.useState(1)

  return (
    <NavigationContainer>
      <ContextSettings.Provider value={{ speed, setSpeed }}>
        <stack.Navigator>
          <stack.Screen
            name='Soundboard'
            component={Soundboard}
            options={({ navigation }) => ({
              headerRight: () => <View style={styles.container}><TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                <Image style={styles.image} source={require('./assets/ui/gear.png')} />
              </TouchableOpacity><TouchableOpacity onPress={() => Linking.openURL('https://github.com/Daymortel/Soundboard')}>
                  <Image style={styles.image} source={require('./assets/ui/github.png')} />
                </TouchableOpacity></View>,
              headerStyle: {
                backgroundColor: '#123456'
              }
            })}
          />
          <stack.Screen
            name='Settings'
            component={Settings}
            options={() => ({
              headerStyle: {
                backgroundColor: '#123456'
              }
            })}
          />
        </stack.Navigator>
      </ContextSettings.Provider>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10
  },
  image: {
    width: 40,
    height: 40,
    marginRight: 10
  }
});
