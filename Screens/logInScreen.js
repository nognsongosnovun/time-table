import React from 'react';
import { Text, View,TouchableOpacity,StyleSheet,TextInput,Image } from 'react-native';
import AppHeader from '../components/AppHeader'

export default class Searchscreen extends React.Component {
    render() {
      return (
        <View>
        <View>  <AppHeader/> </View>
        <View style={{ flex: 1, alignItems: 'center', marginTop: 50 }}>
         <Image source={require("../assets/1.png")} style={{ width: 150, height: 150 }}></Image>
          <Text style={{textAlign: 'center', fontSize: 40}}> LOG IN </Text>

          <TextInput
              style={styles.inputBox}
              placeholder="user name"              
            />
           <TouchableOpacity
              style={styles.container}
              onPress={() => {
              
              }}>
              <Text style={styles.buttonText}>LogIn</Text>
            </TouchableOpacity>
        </View></View>
      );
    }
  }

  const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',    
    backgroundColor: 'yellow',
    width: 80,
    borderWidth: 1.5,
    height: 10,
  },

inputBox: {
    width: 200,
    height: 40,
    borderWidth: 1.5,  
    fontSize: 20,
    margin: 20,
  },

   buttonText: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 10    
  },

  })
