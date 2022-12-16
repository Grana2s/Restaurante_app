import React, {Component} from 'react'
import { Text, View, Image, TextInput, SafeAreaView, Button, ScrollView, Alert, NativeModules} from 'react-native'
import {ErrorMessage, Formik} from "formik"
import * as Yup from "yup"
import { min } from 'react-native-reanimated'
import styles from './agregarsucursal_styles'
import validationSchema from './agregarsucursal_valid'
import axios from "axios"
import client from "./../../api/client"
//import brook from '../components/assets/brook.webp'


class AgregarSucursal extends Component{
    constructor(props){
        super(props)
        this.state = {
            // imagen: '',
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.alertMensaje = this.alertMensaje.bind(this)
    }

    alertMensaje(){
        console.log('Datos enviados a la API')
        Alert.alert('¡Datos enviados!')
    }

    async handleSubmit(values){
        // const datos = new FormData()
        // datos.append("nombre_sucursal", values.nombre_sucursal)
        // datos.append("direccion", values.direccion)
        // datos.append("ciudad", values.ciudad)
        // datos.append("estado", values.estado)
        // datos.append("telefono", values.telefono)
        // datos.append("codigo_postal", values.codigo_postal)
        // datos.append("latitud", values.latitud)
        // datos.append("longitud", values.longitud)
        client.post('sucursal/create/',
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
        return(
            <Formik style={styles.center} initialValues={{
                    nombre_sucursal: '',
                    direccion: '',
                    ciudad: '',
                    estado: '',
                    telefono: '',
                    codigo_postal: '',
                    latitud: '',
                    longitud: '',
                }}
                onSubmit={this.handleSubmit}
                validationSchema={validationSchema}>
                    {({handleChange, handleSubmit, values, errors}) => (
                        <SafeAreaView>
                            <ScrollView>
                            {/* {<SelectImage imagen={""} validadImagen ={(imagen) =>{
                                    values.imagen = imagen
                                }}></SelectImage>} */}
                                <TextInput 
                                    style={styles.textbox}
                                    value={values.nombre_sucursal}
                                    placeholder= 'Nombre Sucursal'
                                    autoCapitalize= 'words'
                                    autoCorrect= {false}
                                    onChangeText = {handleChange('nombre_sucursal')}>
                                </TextInput>
                                <Text style={styles.error}>{errors.nombre_sucursal}</Text>
                                <TextInput 
                                    style={styles.textbox}
                                    value={values.direccion}
                                    placeholder= 'Direccion'
                                    autoCapitalize= 'words'
                                    autoCorrect= {false}
                                    onChangeText = {handleChange('direccion')}>
                                </TextInput>
                                <Text style={styles.error}>{errors.direccion}</Text>
                                <TextInput 
                                    style={styles.textbox}
                                    value={values.ciudad}
                                    placeholder= 'Ciudad'
                                    autoCapitalize= 'words'
                                    autoCorrect= {false}
                                    onChangeText = {handleChange('ciudad')}>
                                </TextInput>
                                <Text style={styles.error}>{errors.ciudad}</Text>
                                <TextInput 
                                    style={styles.textbox}
                                    value={values.estado}
                                    placeholder= 'Estado'
                                    autoCapitalize= 'words'
                                    autoCorrect= {false}
                                    onChangeText = {handleChange('estado')}>
                                </TextInput>
                                <Text style={styles.error}>{errors.estado}</Text>
                                <TextInput 
                                    style={styles.textbox} 
                                    value={values.telefono}
                                    placeholder= 'Telefono'
                                    autoCapitalize= 'words'
                                    autoCorrect= {false}
                                    keyboardType = {'phone-pad'}
                                    onChangeText = {handleChange('telefono')}>
                                </TextInput>
                                <Text style={styles.error}>{errors.telefono}</Text>
                                <TextInput 
                                    style={styles.textbox} 
                                    value={values.codigo_postal}
                                    placeholder= 'C.P.'
                                    autoCapitalize= 'words'
                                    autoCorrect= {false}
                                    onChangeText = {handleChange('codigo_postal')}>
                                </TextInput>
                                <Text style={styles.error}>{errors.codigo_postal}</Text>
                                <TextInput 
                                    style={styles.textbox}
                                    value={values.latitud}
                                    placeholder= 'Latitud'
                                    autoCapitalize= 'words'
                                    autoCorrect= {false}
                                    keyboardType = 'numeric'
                                    onChangeText = {handleChange('latitud')}>
                                </TextInput>
                                <Text style={styles.error}>{errors.latitud}</Text>
                                <TextInput 
                                    style={styles.textbox} 
                                    value={values.longitud}
                                    placeholder= 'Longitud'
                                    autoCapitalize= 'words'
                                    autoCorrect= {false}
                                    keyboardType = 'numeric'
                                    onChangeText = {handleChange('longitud')}>
                                </TextInput>
                                <Text style={styles.error}>{errors.longitud}</Text>
                                <Button onPress={handleSubmit} title='Enviar' style={styles.addbutton}></Button>
                                
                            </ScrollView>
                        </SafeAreaView>
                    )}
            </Formik>                   
        )
    }
}

export default AgregarSucursal
//<Image style={styles.imageFromNetwork} source={brook}></Image>