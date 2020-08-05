import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
export default class About extends Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 25, marginBottom: 20}}>ABOUT</Text>
        <Button
          title="HOME"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
