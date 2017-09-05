import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  SectionList,
  TouchableOpacity,
} from 'react-native';

// class ProductsList extends React.Component {
//   props: {
//     products:Array<Product>;
//     onPress:(product: Product)=>void;
//   };
//
//   render() {
//     if (this.props.products.length === 0) {
//       return (
//         <View>
//           productslist empty
//         </View>
//       );
//     }
//     return (
//         <Text style={styles.container}> productslist full</Text>
//     )
//   }
// }

class ProductsList extends React.PureComponent {
  static title = '<SectionList>';
  static description = 'Performant ,scrollable list of data';

  // state ={
  //   data:getItemData(1000),
  //   filterText:'',
  //   logViewable:false,
  //   virtualized:true,
  // };

  render() {
    return (
      <View style={styles.container}>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e91e63',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

module.exports = ProductsList;