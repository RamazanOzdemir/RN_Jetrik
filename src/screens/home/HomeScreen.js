import React from 'react'
import { View, Text, Button } from 'react-native'
import styles from './HomeStyle';

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Button
                title="Go Orders"
                onPress={()=>{navigation.navigate('Orders')}}
            />

        </View>
    )
}

export default HomeScreen;
