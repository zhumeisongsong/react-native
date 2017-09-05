//定义一个function 传入不同的key render不同的组件
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

class Home extends React.Component {
  static navigationOptions = {
    tabBarLabel: '首页',//showIcon option
    tabBarIcon: (
      <Svg icon="home" size="26" />
    ),
  };

  render() {
    return (
      <Button
        onPress={()=>this.props.navigation.navigate('cart')}
        title="go to cart"
      />
    );
  }
}

class Cart extends React.Component {
  static navigationOptions = {
    tabBarLabel: '购物车',
    tabBarIcon: (
      <Svg icon="cart" size="26" />
    ),
  };

  render() {
    return (
      <Button
        onPress={()=>this.props.navigation.navigate('home')}
        title="go to home"
      />
    );
  }
}

const Hope = TabNavigator({
  Home: {
    screen: Home
  },
  Notifications: {
    screen: Cart
  },
},{
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
});

AppRegistry.registerComponent('Hope', () => Hope);