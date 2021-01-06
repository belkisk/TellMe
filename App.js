import React, { Component } from "react";
import { StyleSheet, Text, View, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import GetAnswers from "./controller/GetAnswers";

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {answer: ''};
  }

  render() {
    return (
      <View style={styles.container}>
        <Button 
          buttonStyle={styles.button}
          onPress={() => this.buttonClickListener()}
          title='Tell me'
          color='#841584'
        />
        <Text style={styles.text}>
          {this.state.answer}
        </Text>
      </View>
    );
  }

   buttonClickListener() {
    this.setState({answer : new GetAnswers().getAnswer()});
  };
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: '#00aeef',
    borderColor: 'black',
    borderWidth: 5,
    borderRadius: 5    
  },
  text: {
    fontSize: 20,
    fontStyle: 'italic',
    lineHeight: 50
  }
});

