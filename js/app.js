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
    tabBarLabel: 'Home',//showIcon option
    tabBarIcon: ({tintColor}) => (
      <Image
        source={require('../img/svg/home.svg')}
        style={[styles.icon,{tintColor:tintColor}]}
      />
    )
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
    tabBarLabel: 'Notifications',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../img/svg/my.svg')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
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