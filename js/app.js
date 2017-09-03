import React from 'react';
import {
  AppRegistry,
  View,
  Button,
  Image,
  StyleSheet
} from 'react-native';

import Svg,{
  Circle,
  Ellipse,
  G,
  LinearGradient,
  RadialGradient,
  Line,
  Path,
  Polygon,
  Polyline,
  Rect,
  Symbol,
  Text,
  Use,
  Defs,
  Stop
} from 'react-native-svg';

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
       <Svg
         height="100"
         width="100"
       >
         <Circle
           cx="50"
           cy="50"
           r="50"
           fill="pink"
         />
       </Svg>
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