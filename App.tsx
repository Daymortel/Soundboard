import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, Linking, StyleSheet, TouchableOpacity } from 'react-native';
import { Soundboard } from './src/soundboard';

const stack = createStackNavigator()

export default function App() {
  return (
      <NavigationContainer>
        <stack.Navigator>
          <stack.Screen 
            name='Soundboard'
            component={Soundboard}
            options={() => ({
              headerRight: () => <TouchableOpacity onPress={() => Linking.openURL('https://github.com/Daymortel')}>
                <Image style={styles.image} source={ require('./assets/ui/github.png') } />
              </TouchableOpacity>
            })}
          />
        </stack.Navigator>
      </NavigationContainer>
      
  );
}

const styles = StyleSheet.create({
  image: {
    width: 40,
    height: 40
  }
});
