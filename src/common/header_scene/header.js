import React from 'react'
import { View, Text } from 'react-native'
import styles from './headerStyle';

const Header = (props) => {
    return (
        <View style={styles.header} {...props}>
            <Text style={styles.headerText}>{props.title}</Text>
        </View>
    )
}

export default Header;
