import React, { Component } from "react";
import axios from "axios";

class SucursalForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            nombre_sucursal: " ",
            direccion: " ",
            ciudad: " ",
            telefono: " ",
            estado: " ",
            codigo_postal: " ",
            latitud: " ",
            longitud: " ",
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    render(){
        const {
            nombre_sucursal,
            direccion,
            ciudad,
            telefono,
            estado,
            codigo_postal,
            latitud,
            longitud, } = this.state
        return(
            <form onSubmit={this.handleSubmit}>
                <div style={{color: "#13d30e", border: "1px solid #0f810c", marginBottom:"4px"}}>
                    <div>
                        <h3>Crear Sucursal</h3>
                        Nombre de Sucursal:
                        <input 
                            type="text"
                            name="nombre_sucursal"
                            value={nombre_sucursal}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        Direccion: 
                        <input 
                            type="text"
                            name="direccion"
                            value={direccion}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        Ciudad: 
                        <input 
                            type="text"
                            name="ciudad"
                            value={ciudad}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        Telefono: 
                        <input 
                            type="text"
                            name="telefono"
                            value={telefono}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        Estado: 
                        <input 
                            type="text"
                            name="estado"
                            value={estado}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        Codigo Postal: 
                        <input 
                            type="text"
                            name="codigo_postal"
                            value={codigo_postal}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        Latitud: 
                        <input 
                            type="text"
                            name="latitud"
                            value={latitud}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        Longitud: 
                        <input 
                            type="text"
                            name="longitud"
                            value={longitud}
                            onChange={this.handleChange}
                        />
                    </div>
                    <input type="submit" value="Enviar"/>
                </div>
            </form>
        )
    } 

    handleChange(event){
        this.setState({[event.target.name]:event.target.value})
    }

    handleSubmit(event){
        event.preventDefault();
        axios.post(
            "http://localhost:8000/sucursal/create/",{
                nombre_sucursal: this.state.nombre_sucursal,
                direccion: this.state.direccion,
                ciudad: this.state.ciudad,
                telefono: this.state.telefono,
                estado: this.state.estado,
                codigo_postal: this.state.codigo_postal,
                latitud: this.state.latitud,
                longitud: this.state.longitud

            })
            .then((response) => {
                console.log(response)
            })
            .catch(function(error){
                console.log(error)
            })

    }


}

export default SucursalForm