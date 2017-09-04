'use strict';

import React from 'react';
import {
  AppRegistry,
  View,
  Button,
  Image,
  StyleSheet
} from 'react-native';

import Svg from './common/SvgUri';
import svgs from './img/svgs';

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
      <View>
        {
          Object.keys(svgs).map((icon, index) =>
            <Svg key={`key-${index}`} icon={icon} size="30" />
          )
        }
      </View>
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