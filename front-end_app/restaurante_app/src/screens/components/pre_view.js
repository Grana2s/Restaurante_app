import {StyleSheet, Text, View, Button} from 'react-native'
import React, {Component} from 'react'

class PreView extends Component{
    render(){
        return(
            <View style={styles.centerView}>
                <Text style={styles.titulo}>Preview</Text>
                <Button title='ls de elementos' onPress={() => this.props.navigation.navigate('Inicio')}></Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    centerView: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titulo: {
        color: 'green',
        fontSize: 10,
    },
})

export default PreView