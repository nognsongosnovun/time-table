import React from 'react';
import { Text, View,Image } from 'react-native';
import AppHeader from '../components/AppHeader'

export default class Searchscreen extends React.Component {
    render() {
      return (
      <View>
        <View>  <AppHeader/> </View>
        <View style={{ flex: 1, alignItems: 'center', marginTop: 30 }}>
          <Text style={{textAlign: 'center', fontSize: 40}}> TIMETABLE </Text>
        </View>
        <Image
              source={require('../assets/timetable.jpg')}
              style={{ width: 300, height: 300 , alignItems:'center'}}            
            />
        </View>
      );
    }
  }
