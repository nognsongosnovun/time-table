import React from 'react';
import { Text, View,Image,StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader'
import SoundButton from '../components/SoundButton';

export default class Searchscreen extends React.Component {
    render() {
      return (
        <View>
        <View>  <AppHeader/> </View>
        <View style={{ flex: 1, alignItems: 'center', marginTop: 5 }}>
        <Image source={require("../assets/clock.png")} style={{ width: 90, height: 90 }}></Image>
          <Text style={{textAlign: 'center', fontSize: 40}}> ALARMS </Text>

        </View>
        <View>
        <SoundButton />
      </View>
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
      backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    }
  })