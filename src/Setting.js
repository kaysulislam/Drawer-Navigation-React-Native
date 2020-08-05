import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
export default class Setting extends Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 25, marginBottom: 20}}>Settings_SCREEN</Text>
        <Button
          title="Home"
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
