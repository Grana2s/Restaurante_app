import React, { Component } from "react"
import { StyleSheet,Button, Text, View,FlatList } from 'react-native'; 
import client from "./../..//api/client"
//import GestureRecognizer, {swipeDirections} from "react-native-swipe-gestures"
import {ListItem, Icon} from "@rneui/themed"
import SucursalCard from '../card/sucursalcard'

class swipgestures extends Component{
    constructor(props){
        super(props)
        this.state = {
          data: [],
          imagenes: [],
          showComponent: false,
          absolute_url: this.props.absolute_url,
          navigation: this.props.navigation,
        }
        this.getImagen = this.getImagen.bind(this)
        this.showSucursalCards = this.showSucursalCards.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.getDatosFromAPIREST = this.getDatosFromAPIREST.bind(this)
    }

    render(){
        const data = this.state.data
        const imagenes = this.state.imagenes
        let i = -1
        const config = {
            velocityThreshold: 0.3,
            directionalOffsetThreshold: 80
        }

        return(
            
            <FlatList
                data = {data}
                keyExtractor = {(item) => item.id.toString()}
                renderItem={({item})=> {
                    i +=1
                    return(
                        this.state.showComponent? <ListItem.Swipeable
                            leftContent={(reset) => (
                                <Button
                                    title="Actualizar"
                                    onPress={() => {
                                        this.state.navigation.navigate("ActualizarSucursal",{
                                            absolute_url: this.state.absolute_url,
                                        })
                                    }}
                                    icon={{ name: 'Actualizar', color: 'white' }}
                                    buttonStyle={{ minHeight: '100%' }}
                                />
                            )}
                            rightContent={() => (
                                <Button
                                    title="Borrar"
                                    color={'#FF0000'}
                                    onPress= {() => this.handleDelete(item.delete)}
                                    icon={{ name: 'Borrar', color: 'white' }}
                                />
                           )}
                        >
                            <SucursalCard
                                nombre_sucursal = {item.nombre_sucursal}
                                direccion = {item.direccion}
                                imagen = {item.imagen}
                                absolute_url = {item.absolute_url}
                                navigation = {this.props.navigation}
                            />
                        </ListItem.Swipeable>: null
                    )
                }
                }
            />
            
        )
    }

    async componentDidMount(){
        console.log("cargando datos")
        this.getDatosFromAPIREST()
    }

    async getDatosFromAPIREST(){
        try{
            const response = await client.get("/sucursal/")
            if (!response.ok){
              this.setState({data: response.data})
              console.log(this.state.data)
              this.showSucursalCards()
            }
          }
          catch(error){
            console.log(error)
          }
    }

    showSucursalCards(){
        let imagenesUriArray = []
        const data = this.state.data
        let indexElement = 0
        data.forEach(element => {
            this.getImagen(element.absolute_url,imagenesUriArray,data.length,indexElement++)
        })
    }

    getImagen(absolute_url,imagenesUriArray,lengthElements,indexElement){
        const response = client.get(absolute_url)
        .then((response)=>{
            let data = this.state.data
            data[indexElement].imagen = response.data.imagen
            data[indexElement].delete = response.data.delete
            imagenesUriArray.push(response.data.imagen)
            this.setState({imagenes: imagenesUriArray})
            this.setState({data: data})
            console.log("Linea76: ",this.state.data)
            if (this.state.imagenes.length == lengthElements)
                this.setState({showComponent: true})
        })
        .catch(function(error){
        console.log(error)
        })
    }

    async handleDelete(delete_url){
        client.delete(delete_url)
        .then((response) =>{
            this.setState({showComponent: false})
            this.getDatosFromAPIREST()
        })
        .catch(function(response){
            console.log(response)
        })
    }
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    texto: {
        color: '#f11',
        fontSize: 20,
    },
})

export default swipgestures