import React, { Component } from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Video } from 'expo-av';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

export default class App extends Component {
  videoRef = React.createRef()

  render() {
    return (
      <View style={styles.container}>
        <Video
          ref={this.videoRef}
          source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay={false}
          isLooping
          style={{ width: 300, height: 300 }}
        />
        <TouchableOpacity onPress={() => {
          if(this.videoRef.current){
            this.videoRef.current.playAsync()
          }
        }} style={{width: 100,height: 100,backgroundColor: 'gray', position: 'absolute', top: 0, left: 0}}>
          <Text style={{width: 100,height: 100,backgroundColor: 'gray', color: 'red'}}>
            Play/Pause
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
