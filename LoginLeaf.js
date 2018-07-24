/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput
} from 'react-native';
let widthOfMargin = Dimensions.get('window').width * 0.05;

export default class LoginLeaf extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      inputedNum: '',
      inputedPW: '',
    };
    this.updatePW = this.updatePW.bind(this);
  }

  updateNum(newText) {
    this.setState((state) => {
      return {
        inputedNum: newText,
      }
    });
  }

  updatePW(newText) {
    this.setState(() => {
      return {
        inputedPW: newText,
      };
    });
  }

  userPressConfirm () {
    this.props.navigator.push({
      phoneNumber: this.state.inputedNum,
      userPW: this.state.inputedPW,
      name: 'waiting',
    });

  }

  userPressRegister () {
    this.props.navigator.push({
      name: 'register',
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.textInputStyle} placeholder={'请输入手机号'}
        onChangeText = {(newText) => this.updateNum(newText)}
        />
        <Text style={styles.textPromptStyle}>
        您输入的手机号：{this.state.inputedPW}
        </Text>
        <TextInput style={styles.textInputStyle}
        placeholder={'请输入密码'} password={true}
        onChangeText = {this.updatePW}
        />
        <Text style={styles.bigTextStyle} onPress={()=>this.userPressConfirm()}>
        确定
        </Text>
        <Text style={styles.bigTextStyle} onPress={()=>this.userPressRegister()}>
        注册
        </Text>
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
  textInputStyle: {
    margin: widthOfMargin,
    backgroundColor: 'gray',
    fontSize: 20,
  },
  textPromptStyle: {
    margin: widthOfMargin,
    fontSize: 20,
  },
  bigTextStyle: {
    margin: widthOfMargin,
    backgroundColor: 'gray',
    color: 'white',
    textAlign: 'center',
    fontSize: 30,
  },
});
