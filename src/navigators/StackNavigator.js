import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home/HomeScreen';
import OrdersScreen from '../screens/orders/OrdersScreen';
import Header from '../common/header_scene/header'
import DrawerNavigator from './DrawerNavigator'; 
import { HeaderBackButton } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons'
import { Button } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';



const Stack = createStackNavigator();

const headerStyle = (navigation)=>({
    headerStyle: {
        backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
    }, 
    headerTitleAlign: 'center',

    headerLeft: (props) => (
   
        <Icon.Button
            {...props}
            name="menu"
            backgroundColor="transparent"
            size={30}
            onPress={() => navigation.openDrawer()}
        />

    )
});
const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Orders" component={OrdersScreen} />
        </Stack.Navigator>
    );
}

export default StackNavigator;

export const HomeStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Home" 
                component={HomeScreen} 
                options={ ({navigation })=>({...headerStyle(navigation)})}
            />
        </Stack.Navigator>
    );
}
export const OrdersStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Orders" 
                component={OrdersScreen} 
                options={({ navigation }) => ({ ...headerStyle(navigation) })}
            />
        </Stack.Navigator>
    );
}



