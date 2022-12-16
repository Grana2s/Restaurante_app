import React, {Component} from 'react'
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native'

class ScreenB extends Component{
    render(){
        return(
            <View style={styles.center}>
                <Text style={styles.texto}>Screen B</Text>
                    <ScrollView>
                        <Text>Scroll me por favor!</Text>
                        <Image source={{uri: "https://i0.wp.com/foodandpleasure.com/wp-content/uploads/2021/01/pvrpmci_mezquite-comidas.jpg?fit=1200%2C801&ssl=1", width: 64, height: 64}} />
                        <Image source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4PfqZ0XuOpOZYPd8V6LVoH-uQOAYDYnUU0LQKk5YqiKkZKsPOIE9eIjw92Q4v4Y209Zk&usqp=CAU", width:64, height: 64}} />
                        <Image source={{uri: "https://traveler.marriott.com/es/wp-content/uploads/sites/2/2018/11/SpiceMarket_cDanielAlvarez.jpg", width: 64, height: 64}} />
                        <Image source={{uri: "https://cdn.forbes.com.mx/2020/07/Coronavirus-Restaurantes-Covid-19-alimentos-comedor-comida-39-640x360.jpg", width: 64,height: 64}} />
                        <Image source={{uri: "https://phantom-elmundo.unidadeditorial.es/1ba05970c724713abca7617061a3a743/resize/414/f/jpg/assets/multimedia/imagenes/2021/07/27/16273807770497.jpg", width: 64, height: 64}} />
                        <Image source={{uri: "https://diariodegastronomia.com/wp-content/uploads/2020/04/Bonos-prepago-para-salvar-los-restaurantes-759x500.jpg", width: 64, height: 64}} />
                        <Image source={{uri: "https://www.experimenta.es/wp-content/uploads/2017/10/Restaurant-Bar-Design-Awads-2017-Piccolino-Hachem-experimenta-3-e1511513363350.jpg", width: 64, height: 64}} />
                        <Image source={{uri: "https://mxcity.mx/wp-content/uploads/2022/01/mejores-restaurantes-cdmx-2022-min.png", width: 64, height: 64}} />
                        <Image source={{uri: "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1280/720/90/cdn1.parksmedia.wdprapps.disney.com/media/campaigns/latam/1/media/parks/disneyland/dining/blue-bayou-restaurant-16x9.jpg", width: 64, height: 64}} />
                        <Image source={{uri: "https://d500.epimg.net/cincodias/imagenes/2021/01/07/lifestyle/1610013278_270303_1610013536_noticia_normal.jpg", width: 64, height: 64}} />
                        <Image source={{uri: "https://s1.eestatic.com/2021/01/23/actualidad/553455506_171109708_1706x960.jpg", width: 64, height: 64}} />
                    </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        backgroundColor: '#1f1',
        alignItems: 'center',
        justifyContent: 'center'
    },
    texto: {
        color: '#11f',
        fontSize: 20,
    },
})

export default ScreenB