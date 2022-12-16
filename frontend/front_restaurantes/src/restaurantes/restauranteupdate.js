import React, { Component } from "react";
import axios from "axios";

class RestauranteUpdate extends Component{
    constructor(props){
        super(props)
        this.state = {
            restaurante: this.props.restauranteUpdate,
            nombre: this.props.restauranteUpdate.nombre,
            descripcion: this.props.restauranteUpdate.descripcion,
            //imagen: this.props.restauranteUpdate.imagen,
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    render(){
        const {nombre, descripcion, imagen,} = this.state;
        return(
            <div style={{color: "red", border: "1px solid red"}}>
                <form onSubmit={this.handleSubmit}>
                    <div>
                     <h3>Actualizar restaurante:</h3>
                        Nombre restaurante
                        <input 
                            type="text"
                            name="nombre"
                            value={nombre}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        Descripcion restaurante
                        <input 
                            type="text"
                            name="descripcion"
                            value={descripcion}
                            onChange={this.handleChange}
                        />
                    </div>  
                    <div>
                        Imagen
                        <input 
                            type="image"
                            name="imagen"
                            value={imagen}
                            onChange={this.handleChange}
                        />
                    </div>               
                    <input type="submit" value="Enviar"/>
                </form>
            </div>
        )
    } 

    handleChange(event){
        //this.setState({nombre:event.target.value, descripcion:event.target.value})
        this.setState({[event.target.name]:event.target.value})
    }

    handleSubmit(event){
        event.preventDefault();
        console.log(this.state.nombre)
        axios.patch(process.env.REACT_APP_URL.concat(this.state.restaurante.update),{
                nombre: this.state.nombre,
                descripcion: this.state.descripcion,
                //imagen: this.state.imagen
            })
            .then((response) => {
                console.log(response)
            })
            .catch(function(error){
                console.log(error)
            })

    }


}

export default RestauranteUpdate