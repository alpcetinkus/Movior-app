import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import HomeScreen from "../Movior/src/screens/HomeScreen"
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from "../Movior/src/navigator/RootNavigator"
import { LogBox } from 'react-native';

LogBox.ignoreAllLogs();

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#15141F',
    
  },
});
