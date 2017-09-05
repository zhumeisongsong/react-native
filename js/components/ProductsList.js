import React from 'react';
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

type Product ={
  id:number;
  name: string;
  listIntro: string;
  detailIntro: string;
  price: number;
  originalPrice: number;
  coverUrl: string;
  userPurchase: number;
  richText: any;
}

export default class ProductsList extends React.Component {
  props: {
    products:Array<Product>;
    onPress:(product: Product)=>void;
  };

  render() {
    if (this.props.products.length === 0) {
      return (
        <View>
          productslist empty
        </View>
      );
    }
    return (
        <Text style={styles.container}> productslist full</Text>
    )
  }
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:'red',
    alignItems:'center',
    justifyContent:'center',
  }
});