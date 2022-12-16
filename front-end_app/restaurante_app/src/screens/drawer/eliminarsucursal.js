import React, {Component} from 'react'
import { Text, View, Image, TextInput, SafeAreaView, Button, ScrollView, Alert, NativeModules} from 'react-native'
import {ErrorMessage, Formik} from "formik"
import * as Yup from "yup"
import { min } from 'react-native-reanimated'
import styles from './agregarsucursal_styles'
import validationSchema from './agregarsucursal_valid'
import axios from "axios"
import client from "../../api/client"
//import brook from '../components/assets/brook.webp'


class EliminarSucursal extends Component{
    constructor(props){
        super(props)
        this.state = {
            // imagen: '',
            data: [],
            absolute_url: this.props.route.params.absolute_url,
            showComponent: false,
            navigation: this.props.navigation,

        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.alertMensaje = this.alertMensaje.bind(this)
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
            }, this.state.navigation.navigate("ScreenC",{
                absolute_url: this.state.absolute_url,
                
              })
        )
        .then(this.alertMensaje())
        .catch(function(error){
            console.log(error)

        })
    }

    render(){
        const data = this.state.data
        return(
            this.state.showComponent?
            <Formik style={styles.center} initialValues={{
                    nombre_sucursal: data.nombre_sucursal,
                    direccion: data.direccion,
                    ciudad: data.ciudad,
                    estado: data.estado,
                    telefono: data.telefono,
                    codigo_postal: data.codigo_postal,
                    latitud: "45.0",
                    longitud: parseInt(data.longitud),
                }}
                onSubmit={this.handleSubmit}
                validationSchema={validationSchema}>
                    {({handleSubmit}) => (
                        <View style={styles.center}>
                            
                            <Text style={styles.delete}>Seguro que quieres eliminar esta Sucursal</Text>
                                <Button onPress={handleSubmit} title='Delete' style={styles.addbuttonelim}></Button>
                                
                                
                            
                        </View>
                    )}
            </Formik> 
            :null                  
        )
    }
    async componentDidMount(){
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

export default EliminarSucursal
