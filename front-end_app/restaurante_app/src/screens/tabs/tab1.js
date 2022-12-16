import React, {Component} from 'react'
import {StyleSheet, Text, View} from 'react-native'

class tab1 extends Component{
    render(){
        return(
            <View style={styles.center}>
                <Text style={styles.texto}>tab1</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
    },
    texto: {
        color: 'black',
        fontSize: 20,
    },
})

export default tab1