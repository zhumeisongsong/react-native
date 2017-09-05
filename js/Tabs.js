//定义一个function 传入不同的key render不同的组件
import React from 'react';
import {
  AppRegistry,
  View,
  Image,
  Text,
  Button,
  StyleSheet
} from 'react-native';

import Svg from './common/SvgUri';
import svgs from './img/svgs';

import {TabNavigator} from 'react-navigation';

import ProductList from './components/ProductsList';
import Cart from './components/Cart';

class HomeScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: '首页',//showIcon option
    tabBarIcon: (
      <Svg icon="home" size="30"/>
    ),
  };

  render() {
    return (
      <ProductList/>
    );
  }
}

class CartScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: '购物车',
    tabBarIcon: (
      <Svg icon="cart" size="30"/>
    ),
  };

  render() {
    return (
      <Cart/>
    );
  }
}

class MyScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: '我的',
    tabBarIcon: (
      <Svg icon="my" size="30"/>
    ),
  };

  render() {
    return (
      <View>
        <Text>User Center</Text>
      </View>
    )
  }
}

export const Hope = TabNavigator({
  Home: {
    screen: HomeScreen
  },
  Cart: {
    screen: CartScreen
  },
  My: {
    screen: MyScreen
  }
}, {
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
});