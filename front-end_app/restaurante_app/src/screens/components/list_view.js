import React, {Component} from "react"
import {StyleSheet,Text,Image,Button,SafeAreaView, FlatList, TouchableOpacity, View} from "react-native";
import client from "./../../api/client"

class ListView extends Component{
  constructor(props){
    super(props)
    this.state = {
      data: [],
    }
  }

  render(){
    const {data} = this.state
    return(
      <SafeAreaView style={styles.centerView}>
        <View style={styles.topBox}>
          <Image style={styles.restauranteImagen}
            source={{
              uri: 
              "https://elblogdeceleste.com/wp-content/uploads/2020/09/la-imagen-de-un-restaurante-mesa.jpg",
            }}
          >
          </Image>
        </View>
        <View style={styles.middleBox}> 
          <Text style={styles.newText}>App en React</Text>
          <Text style={styles.titulo}>ListView</Text>
          <Button title='Lista de elementos, Click para detalles' onPress={() => this.props.navigation.navigate('Detail')}></Button>
        </View>
        <View style={styles.bottomBox}>
                <Text>{data.length} Sucursales</Text>
                <FlatList 
                  data = {data}
                  keyExtractor = {(item) => item.id.toString()}
                  renderItem={({item} )=> {
                    return(
                      <TouchableOpacity
                        onPress={() => {
                          this.props.navigation.navigate("Detail",{
                            objurl: item.absolute_url,
                            hey: "Los mejores restaurantes",
                          })
                        }}
                      >
                        <Text style={styles.itemText}>
                          {item.nombre_sucursal}, {item.direccion}
                        </Text>
                    </TouchableOpacity>
                    )}
                  }
                />
        </View>
      </SafeAreaView>
    )
  }

async componentDidMount(){
  try{
    const response = await client.get("/sucursal/")
    if (!response.ok){
      this.setState({data: response.data})
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
    backgroundColor: '#FFC133',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "column",
  },
  titulo: {
    color: 'gray',
    fontSize: 30,
    textAlign: "center",
    fontStyle: "italic",
  },
  botonlistarElementos:{
    width: 80,
    height: 200,
  },
  container: {
    flex: 1,
    backgroundColor: '#fab',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: 'blue',
    fontSize: 40,
    fontStyle: "italic",
  },
  newText:{
    color: 'green',
    textAlign: "center",
  },
  restauranteImagen: {
    width: 200,
    height: "100%",
  },
  itemText:{
    color: "purple",
    fontSize: 20,
  },
  topBox: {
    flex: 1,
    //backgroundColor: '#FFFFCC',
    paddingTop: "2%",
    },
  middleBox: {
    flex: 1,
    //backgroundColor: '#CCE5FF',
    paddingTop: "5%",
    //paddingTop: "5pt",
    //paddingTop: 5,
    },
  bottomBox: {
    flex: 1,
    //backgroundColor: '#FFFFCC',
    },
  imageFromNetwork: {
    flex: 1,
    alignSelf: 'stretch',
    width: undefined,
    height: undefined,
    }
});

export default ListView