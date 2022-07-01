import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image,
  ImageURISource,
  Button,
} from 'react-native'

class App extends Component {
  state = {
    count: 0
  }


  onPress = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

render() {
  let pic2 = {
    uri:"https://i.imgur.com/ThWUrYc.png"
  };
  let pic = {
    uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
  };
    return (
      <View style={styles.container}>
        <TouchableOpacity
        style={styles.button}
        onPress={this.onPress}
        >
        <Text>Click me</Text>
        </TouchableOpacity>
        <View>
          <Text>
            You clicked { this.state.count } times
          </Text>
        </View>
        <View>
          <Text>
            Hello world!
          </Text>
        <Button
  onPress={this.onPress}
  title="Learn More"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
<Image source={pic2} style={{width: 193, height: 110}}/>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#1FD0D5',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    borderRadius:10,
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10
  }
})

export default App;