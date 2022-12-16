import React, {Component} from 'react'
import {StyleSheet, Text, View} from 'react-native'

class tab2 extends Component{
    render(){
        return(
            <View style={styles.center}>
                <Text style={styles.texto}>tab2</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
    },
    texto: {
        color: '#1f1',
        fontSize: 20,
    },
})

export default tab2