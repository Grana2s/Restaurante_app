import React, {Component} from "react"
import SucursalUpdate from "./sucursalupdate"
import axios from "axios"

class DetailSucursal extends Component{
    constructor(props){
        super(props)
        this.state = {
           sucursal: this.props.sucursal,
           showComponents: false,
        }
        this.updateSucursalDetails = this.updateSucursalDetails.bind(this)
        this.deleteSucursalDetails = this.deleteSucursalDetails.bind(this)

    }
    render(){
        const sucursal = this.props.sucursal
        return(
            <div>
                <div style={{color: "orange", border: "1px solid yellow", marginBottom:"4px"}}>
                    <h5>{sucursal.id}</h5>
                    <h5>{sucursal.nombre_sucursal}</h5>
                    <h5>{sucursal.direccion}</h5>
                    <h5>{sucursal.ciudad}</h5>
                    <h5>{sucursal.telefono}</h5>
                    <h5>{sucursal.estado}</h5>
                    <h5>{sucursal.codigo_postal}</h5>
                    <h5>{sucursal.latitud}</h5>
                    <h5>{sucursal.longitud}</h5>
                    <button
                            style={{backgroundColor:"green"}}
                            onClick = {() => this.updateSucursalDetails()}>
                            Update    
                    </button>
                    <button
                            style={{backgroundColor:"red"}}
                            onClick = {() => this.deleteSucursalDetails(sucursal)}>
                            Delete    
                    </button>
                </div>
                {this.state.showComponents? <SucursalUpdate sucursalUpdate = {sucursal}/> : null }
            </div>
        )
    }
    updateSucursalDetails(){
        this.setState({showComponents: true})
    }
    deleteSucursalDetails(sucursal){
        axios.delete(process.env.REACT_APP_URL.concat(sucursal.delete))
            .then((response) => {
                console.log(response)
            })
            .catch(function(error){
                console.log(error)
            })
    }
}

export default DetailSucursal