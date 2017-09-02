import React from 'react';
import {
  AppRegistry,
  View,
  Text,
  Button,
  Image,
  StyleSheet
} from 'react-native';

import {TabNavigator} from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: '首页',//showIcon option
  };

  render() {
    return (
      <Button
        onPress={()=>this.props.navigation.navigate('Notifications')}
        title="go to notifications"
      />
    );
  }
}

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: '购物车',
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});

const Hope = TabNavigator({
  Home: {
    screen: HomeScreen
  },
  Notifications: {
    screen: MyNotificationsScreen,
  },
},{
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
});

AppRegistry.registerComponent('Hope', () => Hope);