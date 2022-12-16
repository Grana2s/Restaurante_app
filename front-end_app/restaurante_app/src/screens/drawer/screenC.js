import React, {Component} from 'react'
import {StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity, Button, Alert, RefreshControl} from 'react-native'
import SucursalCard from '../card/sucursalcard'
import client from "./../../api/client"
import { NavigationEvents } from 'react-navigation'



class ScreenC extends Component{
  constructor(props){
      super(props)
      this.state = {
        data: [],
        imagenes: [],
        showComponent: false,
        refreshing: false,
      }
      this.getImagen = this.getImagen.bind(this)
      this.showSucursalCards = this.showSucursalCards.bind(this)
     
  }
  
  render(){
      const data = this.state.data
      const imagenes = this.state.imagenes
      let i = -1
      
      return(
          
          //<View style={styles.center}>
              <FlatList 
                  data = {data}
                  
                  keyExtractor = {(item) => item.id.toString()}
                  renderItem={({item})=> {
                      i +=1
                      return(
                        
                          <View>
                              
                              
                              {this.state.showComponent? <SucursalCard
                                      nombre_sucursal = {item.nombre_sucursal}
                                      direccion = {item.direccion}
                                      imagen = {item.imagen}
                                      absolute_url = {item.absolute_url}
                                      navigation = {this.props.navigation}
                                  />: null
                              }

                          </View>
                      )
                  }
                  }
                  refreshControl={
                    <RefreshControl
                    refreshing={this.state.refreshing}
                    onRefresh={this._onRefresh.bind(this)}
                    >
                    </RefreshControl>
                }
              />
         //</View>
      )
  }
  _onRefresh(){
    this.setState({refreshing:true})
    this.componentDidMount().then(()=>{
        this.state({refreshing:false})
    })
}

  async componentDidMount(){
      try{
        const response = await client.get("/sucursal/")
        if (!response.ok){
          this.setState({data: response.data})
          this.showSucursalCards()
          this.setState({refreshing: false})
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

export default ScreenC