import React, {Component} from "react"
import DetailSucursal from "./detailsucursal"
import axios from 'axios'
import SucursalForm from "./sucursalform"

class ListaSucursal extends Component{

    constructor(props){
        super(props)
        this.state = {
            datosSucursales: [],
            detailSucursal: [],
            showComponents: false,
        }
        this.showDetailSucursal = this.showDetailSucursal.bind(this)
        this.getDetailSucursal = this.getDetailSucursal.bind(this)
    }

    render(){
        return(
            <div>
                <SucursalForm/>
                {this.state.datosSucursales.map(sucursal => {
                    return (
                            <div style={{color: "#10eaee", border: "1px solid blue", marginBottom:"4px"}}>
                                <h3  
                                    p = {sucursal} 
                                    key={sucursal.id} 
                                    onClick={()=> this.showDetailSucursal(sucursal)}>
                                    {sucursal.nombre_sucursal} - {sucursal.direccion}
                                </h3>
                            </div>
                            )

                    })

                }
                {this.state.showComponents? <DetailSucursal sucursal = {this.state.detailSucursal}/> : null }
            </div>
        )
    }

    componentDidMount(){
        axios.get(process.env.REACT_APP_URL.concat("/sucursal/"))
        .then((response)=>{
            this.setState({datosSucursales:response.data})
            //console.log(response)
        })
        .catch(function(error){
            console.log(error)
        })
    }

    showDetailSucursal(sucursal){
        this.getDetailSucursal(sucursal)
        this.setState({showComponents: true})
    }

    getDetailSucursal(sucursal){
        axios.get(process.env.REACT_APP_URL.concat(sucursal.absolute_url))
        .then((response)=>{
            this.setState({detailSucursal:response.data})
            //console.log(response)
        })
        .catch(function(error){
            console.log(error)
        })
    }
}

export default ListaSucursal