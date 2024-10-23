import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, View } from 'react-native';
import React from 'react';

export default class App extends React.Component{

  state = {
    value: 0
  }

  incrementValue = () => {
    this.setState({
      value: this.state.value + 1
    })
  }

  decrementValue = () => {
    this.setState({
      value: this.state.value - 1
    })
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 60, marginBottom: 20}}>{this.state.value}</Text>
        <StatusBar style="auto" />
        <View style={{flexDirection: 'row'}}>
          <Button  color="red" onPress={this.decrementValue} title='RESTAR'/>
          <Text>   </Text>
          <Button  onPress={this.incrementValue} title='SUMAR'/>
        </View>
      </View>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
