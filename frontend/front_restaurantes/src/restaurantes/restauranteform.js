import React, { Component } from "react";
import axios from "axios";

class RestauranteForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            nombre_restaurante: " ",
            descripcion: " ",
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    render(){
        const {
            nombre_restaurante,
            descripcion,} = this.state
        return(
            <form onSubmit={this.handleSubmit}>
                <div style={{color: "#13d30e", border: "1px solid #0f810c", marginBottom:"4px"}}>
                    <div>
                        <h3>Crear Restaurante</h3>
                        Nombre de restaurante:
                        <input 
                            type="text"
                            name="nombre_restaurante"
                            value={nombre_restaurante}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        Descripcion: 
                        <input 
                            type="text"
                            name="descripcion"
                            value={descripcion}
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
        console.log(this.state.nombre_restaurante)
        axios.post(
            "http://localhost:8000/restaurante/create/",{
                nombre: this.state.nombre_restaurante,
                descripcion: this.state.descripcion
            })
            .then((response) => {
                console.log(response)
            })
            .catch(function(error){
                console.log(error)
            })

    }


}

export default RestauranteForm