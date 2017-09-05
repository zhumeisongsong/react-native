import {Stylesheet} from 'StyleSheet';
const styles = Stylesheet.create({
  button: {
    borderColor: 'transparent', //common style

    ios: {
      height: HEIGHT,
      paddingHorizontal: 20,
      borderRadius: HEIGHT / 2,
      borderWidth: 1,
    },
    android: {
      paddingBottom: 6,
      paddingHorizontal: 10,
      borderBottomWidth: 3,
      marginRight: 10
    }
  }
});
