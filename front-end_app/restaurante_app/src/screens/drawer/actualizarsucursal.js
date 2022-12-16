import React, {Component} from 'react'
import { Text, View, Image, TextInput, SafeAreaView, Button, ScrollView, Alert, NativeModules, TouchableHighlightBase} from 'react-native'
import {ErrorMessage, Formik} from "formik"
import * as Yup from "yup"
import { min } from 'react-native-reanimated'
import styles from './agregarsucursal_styles'
import validationSchema from './agregarsucursal_valid'
import axios from "axios"
import client from "./../../api/client"
//import brook from '../components/assets/brook.webp'


class ActualizarSucursal extends Component{
    constructor(props){
        super(props)
        this.state = {
            // imagen: '',
            absolute_url: this.props.route.params.absolute_url,
            showComponent: false,
            navigation: this.props.navigation,

        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.alertMensaje = this.alertMensaje.bind(this)
        
    }

    alertMensaje(){
        console.log('Datos enviados a la API')
        Alert.alert('¡Datos enviados!')
    }
    

    async handleSubmit(values){
        
        client.put(this.state.data.update, 
            {
                'nombre_sucursal':values.nombre_sucursal,
                'direccion':values.direccion,
                'ciudad':values.ciudad,
                'estado':values.estado,
                'telefono':values.telefono,
                'codigo_postal':values.codigo_postal,
                'latitud':values.latitud,
                'longitud':values.longitud,
            }, 
            this.state.navigation.navigate("swipgestures",{
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
                    {({handleChange, handleSubmit, values, errors}) => (
                        <SafeAreaView>
                            <ScrollView>
                            {/* {<SelectImage imagen={""} validadImagen ={(imagen) =>{
                                    values.imagen = imagen
                                }}></SelectImage>} */}
                                <Image
                                        style={styles.imageFromNetwork}
                                        source={{uri: "https://i0.wp.com/foodandpleasure.com/wp-content/uploads/2021/01/pvrpmci_mezquite-comidas.jpg?fit=1200%2C801&ssl=1"}}/>
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
                                <Button 
                                showComponent={this.state.showComponent}
                                Refrescar={this.Refrescar.bind(this)}
                                onPress={handleSubmit}
                                
                                title='Update' style={styles.addbutton}></Button>
                                
                                
                            </ScrollView>
                        </SafeAreaView>
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

export default ActualizarSucursal
//<Image style={styles.imageFromNetwork} source={brook}></Image>