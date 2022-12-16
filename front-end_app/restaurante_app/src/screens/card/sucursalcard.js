import React, {Component} from 'react'
import {StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Button, Alert, RefreshControl} from 'react-native'
import client from "./../../api/client"
import {ListItem, Icon} from "@rneui/themed"
import {ErrorMessage, Formik} from "formik"
import axios from "axios"
import { useHistory } from "react-router-dom"
import EliminarSucursal from '../drawer/eliminarsucursal'

class SucursalCard extends Component{
    constructor(props){
        super(props)
        console.log("sucursalcard.js: ",this.props)
        this.state = {
            nombre_sucursal: this.props.nombre_sucursal,
            direccion: this.props.direccion,
            imagen: this.props.imagen,
            absolute_url: this.props.absolute_url,
            navigation: this.props.navigation,
            showComponent: false,
            refreshing: false,
           
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.alertMensaje = this.alertMensaje.bind(this)
        this.Refrescar = this.Refrescar.bind(this)
        this.cambio = this.cambio.bind(this)
      
    }
    alertMensaje(){
        console.log('Datos eliminados de la API')
        Alert.alert('¡Datos Eliminados!')
    }
    async handleSubmit(values){
        
        client.delete(this.state.data.delete, 
            {
                'nombre_sucursal':values.nombre_sucursal,
                'direccion':values.direccion,
                'ciudad':values.ciudad,
                'estado':values.estado,
                'telefono':values.telefono,
                'codigo_postal':values.codigo_postal,
                'latitud':values.latitud,
                'longitud':values.longitud,
            }
        )
        .then(this.alertMensaje())
        .catch(function(error){
            console.log(error)

        })
    }
    
    
    render(){

        
        const nombre_sucursal = this.state.nombre_sucursal
        const direccion = this.state.direccion
        const imagen = this.state.imagen


        return(
            
            
                <View style={styles.sucursalcard}>           
                    <Image 
                        style={styles.sucursalimage} 
                        source={{uri: imagen}}
                    />
                    <View style={styles.sucursalinfo}>
                        <Text style={styles.text}>Sucursal: {nombre_sucursal}</Text>
                        <Text style={styles.text}>Direccion: {direccion}</Text>
                    </View>    
                </View>
                
            
        
        
        )
        

    }
    cambio(){
        this.setState({showComponent:false})
        this.componentDidMount().then(()=>{
            this.state({showComponent:true})
        })
    
    }
    /*Refrescar(){
        this.setState({showComponent:true})
        this.componentDidMount().then(()=>{
            this.state({showComponent:false})
        })
    }*/
    async componentDidMount(){
        try{
            const response = await client.get(this.state.absolute_url)
            if(!response.ok){
                this.setState({data:response.data})
                this.setState({showComponent:true})
                console.log("componentDidMount sucursalcard.js",this.state.data)
            }
        }
        catch(error){
            console.log(error)
        }
    }
    async Refrescar(){
        try{
            const response = await client.get(this.state.absolute_url)
            if(!response.ok){
                this.setState({data:response.data})
                this.setState({showComponent:true})
                console.log("componentDidMount actualizarsucursal.js",this.state.data)
            }
        }
        catch(error){
            console.log(error)
        }
    }
    
    
    
}

const styles = StyleSheet.create({
    sucursalcard: {
        flex: 1,
        flexDirection: 'row',
        alignItems: "center",
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: '#F5F5DC',
        marginLeft: 5,
        marginRight: 5,
        marginTop:5,
    },
    sucursalimage: {
        flex: 1,
        width: 80,
        height: 80,
    },
    sucursalinfo: {
        flex: 2,
        //backgroundColor: "#777",
        paddingLeft: 20,
    },
    text: {
        color: "#000",
        fontSize: 16,
    },
})

export default SucursalCard

