import NavigationBar from 'react-native-navbar'
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  SegmentedControlIOS,
  ScrollView,
  Image,
} from 'react-native'

class Project extends Component {
  render() {
    return (
      <View style={styles.container}>
        <NavigationBar
          title={{ title: 'Pizza Lizza', tintColor: 'black', }}
//           leftButton={{ title: 'Back', }}
//           rightButton={{ title: 'Forward', }}
          style={{ backgroundColor: "white", }}
          statusBar={{ tintColor: "white", }}
        />
        <ScrollView 
          horizontal={false}>
          <View>
            <Image 
              style={{
                width: 437,
                height: 258,
                marginLeft: 2,
                marginRight: 2,
                justifyContent: 'center',
              }}
              resizeMode={"cover"}
              source={{uri:'https://eatpizzafresca.com/images/pepperoni_pizza.jpg'}}
            />
            <Text
              style={{
                color: 'black',
                fontSize: 16,
                fontWeight: 'normal',
                fontFamily: 'Helvetica Neue',
                textAlign: 'center',
              }}>
              My Text
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
        textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Project', () => Project);
