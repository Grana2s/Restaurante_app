import {StyleSheet, Text, View, Button, Image} from 'react-native'
import React, {Component} from 'react'
import client from "./../../api/client"

class DetailView extends Component{
    constructor(props){
        super(props)
        console.log(this.props.route.params)
        this.state = {
            objurl: this.props.route.params.objurl,
            hey: this.props.route.params.hey,
            data: [],
        }
    }

    render(){
        const objurl = this.state.objurl
        const hey = this.state.hey
        const data = this.state.data
        return(
            <View style={styles.centerView}>
                <Image source={{uri: data.imagen, width: 200, height: 200}} />
                <Text style={styles.titulo}>Ciudad: { data.ciudad}</Text>
                <Text style={styles.titulo}>Telefono: { data.telefono}</Text>
                <Text style={styles.titulo}>Estado: { data.estado}</Text>
                <Text style={styles.titulo}>Codigo Postal: { data.codigo_postal}</Text>
                <Text style={styles.titulo}>Latitud: { data.latitud}</Text>
                <Text style={styles.titulo}>Longitud: { data.longitud}</Text>
                <Text style={styles.titulo}>{ objurl }</Text>
                <Text style={styles.titulo}>{ hey }</Text>
                <Button title='Lista de elementos' onPress={() => this.props.navigation.navigate('tabs')}></Button>
            </View>
        )
    }
    async componentDidMount(){
        try{
          const response = await client.get(this.state.objurl)
          if (!response.ok){
            this.setState({data: response.data})
            console.log(this.state.data)
          }
        }
        catch(error){
          console.log(error)
        }
      }
}

const styles = StyleSheet.create({
    centerView: {
        flex: 1,
        backgroundColor: '#CEFF33',
        alignItems: 'center',
        justifyContent: 'center'
    },
    titulo: {
        color: '#0b0f46',
        fontSize: 20,
    },
})

export default DetailView