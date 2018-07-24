/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  BackAndroid,
} from 'react-native';

import {Navigator} from 'react-native-deprecated-custom-components';
import LoginLeadf from './LoginLeaf';
import WaitingLeaf from './WaitingLeaf';
import RegisterLeaf from './RegisterLeaf';
import  ImagesLeaf from './ImagesLeaf';


export default class App extends Component<Props> {
  
  constructor(props) {
    super(props);
    this.renderScene = this.renderScene.bind(this);
    this.configureScene = this.configureScene.bind(this);
    this.handleBackAndroid = this.handleBackAndroid.bind(this);
  }  
  
  configureScene(route) {
    return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
    console.error(err5);
  }

  renderScene(router, navigator) {
    this.navigator = navigator;
    switch (router.name) {
      case "login":
        return <LoginLeadf navigator={navigator}/>;
      case "waiting":
        return <WaitingLeaf phoneNumber={router.phoneNumber}
          userPW={router.userPW} navigator={navigator}/>;
      case "register":
        return <RegisterLeaf navigator={navigator}/>;
      case "iconChoice":
        return <ImagesLeaf navigator={navigator}/>;
    }
  }


  render() {
    return (
      <Navigator
        initialRoute={{name: 'login'}}
        configureScene={this.configureScene}
        renderScene={this.renderScene}/>
    );
  }

  handleBackAndroid () {
    if (this.navigator.getCurrentRoutes().length > 1) {
      this.navigator.pop();
      return true;
    }
    return false;
  }

  componentDidMount () {
    if (Platform.OS === "android") BackAndroid.addEventListener(
      'handwareBackPress', this.handleBackAndroid);
  }

  componentWillUnmount () {
    if (Platform.OS === "android") BackAndroid.removeEventListener(
      'handwareBackPress', this.handleBackAndroid);
  }
}
