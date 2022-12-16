import { StyleSheet } from "react-native"
import { color } from "react-native-reanimated"
const styles = StyleSheet.create({
    center: {
        flex: 1,
        //backgroundColor: '#f11',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#040504',
    },
    texto: {
        color: '#1f1',
        fontSize: 20,
    },
    imageFromNetwork: {
        flex: 1,
        //alignSelf: 'stretch',
        width: 100,
        height: 100,
        marginLeft: 20,
    },
    textbox: {
        marginTop: 20,
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginRight: 20,
        marginLeft: 20,
        fontSize: 20,
        //marginBottom: 10,
    },
    form: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    error: {
        color: "red",
        //marginRight: 90,
    },
    addbutton: {
        borderWidth: 1,
        borderColor: "#0043A2",
        backgroundColor: "green",
        padding: 15,
    },
    addbuttonelim: {
        borderWidth: 1,
        borderColor: "#0043A2",
        backgroundColor: "red",
        padding: 15,
        paddingVertical: 72,
        paddingHorizontal: 92,
        elevation: 3,
    },
    delete: {
        //marginTop: 180,
        height: 120,
        borderColor: "gray",
        borderWidth: 1,
        marginRight: 50,
        marginLeft: 50,
        fontSize: 30,
        textAlign: 'center',
        backgroundColor: '#d4ff25',
        color: "red"
    },
    centerView: {
        flex: 1,
        backgroundColor: '#CEFF33',
        alignItems: 'center',
        justifyContent: 'center'
    },
})
export default styles