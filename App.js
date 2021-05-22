import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import HomeScreen from "./components/HomeScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PCRTestingScreen from "./components/PCRTestingScreen";
import HospitalizationDetailsScreen from "./components/HospitalizationDetailsScreen";
const App = () => {
    const Stack = createStackNavigator();
  return (
      <SafeAreaView style={styles.container}>
          <NavigationContainer>
              <Stack.Navigator screenOptions={{
                  headerShown: false
              }}>
                  <Stack.Screen name="Home" component={HomeScreen}/>
                  <Stack.Screen name="PCRTesting" component={PCRTestingScreen} />
                  <Stack.Screen name="HospitalizationDetails" component={HospitalizationDetailsScreen} />
              </Stack.Navigator>
          </NavigationContainer>
          <StatusBar/>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
      backgroundColor: '#dedbdb'
  },
});

export default App;
