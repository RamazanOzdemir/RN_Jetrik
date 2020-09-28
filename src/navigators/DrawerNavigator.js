import React from 'react'

import { createDrawerNavigator, Dra, DrawerItemList } from '@react-navigation/drawer';
import HomeScreen from '../screens/home/HomeScreen';
import OrdersScreen from '../screens/orders/OrdersScreen';
import { Button, Text, View } from 'react-native';
import StackNavigator, { HomeStackNavigator, OrdersStackNavigator } from './StackNavigator';
import { ScrollView } from 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();


const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            drawerType="slide"
            drawerContent={
                (props) => {
                    console.log("*****PROPS*******", props.state.routes)
                    return(
                    <View>
                        <ScrollView>
                            <Text>Header</Text>
                            <DrawerItemList
                                {...props}
                                getLabel={(scene) => (
                                    <View >
                                        <Text>{"---" + props.getLabel(scene)}</Text>
                                    </View>
                                )}
                            />
                            <Text>FOOTER</Text>
                        </ScrollView>
                    </View>
                )}
            }
        >
            <Drawer.Screen name="Home" component={HomeStackNavigator} initialParams={{group:"aaa"}} />
            <Drawer.Screen name="Orders" component={OrdersStackNavigator} />
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;
