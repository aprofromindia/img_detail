import * as React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';

interface State {
  showDetailV: boolean;
}

export default class App extends React.PureComponent<{}, State> {
  state = {
    showDetailV: false,
  };

  render() {
    return (
      <View style={styles.container}>
        {!this.state.showDetailV && (
          <TouchableOpacity
            onPress={() => this.setState({ showDetailV: true })}
            style={styles.button}>
            <Text style={styles.text}>Press me!</Text>
          </TouchableOpacity>
        )}
        {this.state.showDetailV && (
          <TouchableOpacity
            onPress={() => this.setState({ showDetailV: false })}>
            <Image
              source={require('./src/img/boy.jpg')}
              style={styles.container}
            />
          </TouchableOpacity>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    backgroundColor: 'green',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    margin: 10,
  },
  text: {
    color: 'white',
  },
});
