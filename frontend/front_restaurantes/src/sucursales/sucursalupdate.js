import React, { Component } from "react";
import axios from "axios";

class SucursalUpdate extends Component{
    constructor(props){
        super(props)
        this.state = {
            sucursal: this.props.sucursalUpdate,
            nombre_sucursal: this.props.sucursalUpdate.nombre_sucursal,
            direccion: this.props.sucursalUpdate.direccion,
            ciudad: this.props.sucursalUpdate.ciudad,
            telefono: this.props.sucursalUpdate.telefono,
            estado: this.props.sucursalUpdate.estado,
            codigo_postal: this.props.sucursalUpdate.codigo_postal,
            latitud: this.props.sucursalUpdate.latitud,
            longitud: this.props.sucursalUpdate.longitud,
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
            longitud, } = this.state;
        return(
            <div style={{color: "red", border: "1px solid red"}}>
                <form onSubmit={this.handleSubmit}> 
                    <div>
                        <h3>Actualizar Sucursal</h3> 
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
                </form>
            </div>
        )
    } 

    handleChange(event){
        this.setState({[event.target.name]:event.target.value})
    }

    handleSubmit(event){
        event.preventDefault();
        console.log(this.state.nombre_sucursal)
        axios.patch(process.env.REACT_APP_URL.concat(this.state.sucursal.update),{
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

export default SucursalUpdate