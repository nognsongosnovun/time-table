import * as React from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity,TextInput} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import timetableScreen from './Screens/timeTableScreen'
import loginScreen from './Screens/logInScreen'
import alarmsScreen from './Screens/alarmsScreen'


export default class App extends React.Component {
  render(){
    return (
        <View style={styles.container}>
        <AppContainer />
        </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
 LOGIN: loginScreen,
 ALARM :  alarmsScreen,
TIMETABLE:timetableScreen
});

const AppContainer =  createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
