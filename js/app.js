import React from 'react';
import {
    AppRegistry,
    View,
    Text,
    Button
} from 'react-native';
import {StackNavigator} from 'react-navigation';

class HomeScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Home',//showIcon option
        tabBarIcon: ({tintColor}) => (
            <Image source={require()}
        )
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <Text>Hello, Chat App!</Text>
                <Button
                    onPress={() => navigate('Chat')}
                    title="Chat with Lucy"
                />
            </View>
        )
    }
}

class ChatScreen extends React.Component {
    static navigationOptions = {
        title: 'Chat with Lucy',
    };

    render() {
        return (
            <View>
                <Text>Chat with Lucy</Text>
            </View>
        );
    }
}

const Hope = StackNavigator({
    Home: {screen: HomeScreen},
    Chat: {screen: ChatScreen},
});

AppRegistry.registerComponent('Hope', () => Hope);