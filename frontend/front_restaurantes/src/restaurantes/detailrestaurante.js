import React, {Component} from "react"
import RestauranteUpdate from "./restauranteupdate"
import axios from "axios"

class DetailRestaurante extends Component{
    constructor(props){
        super(props)
        this.state = {
           restaurante: this.props.restaurante,
           showComponents: false,
        }
        this.updateRestauranteDetails = this.updateRestauranteDetails.bind(this)
        this.deleteRestauranteDetails = this.deleteRestauranteDetails.bind(this)
    }
    render(){
        const restaurante = this.props.restaurante
        return(
            <div>
                <div style={{color: "orange", border: "1px solid yellow", marginBottom:"4px"}}>
                    <h5>{restaurante.id}</h5>
                    <h5>{restaurante.nombre}</h5>
                    <h5>{restaurante.descripcion}</h5>
                    <button
                        style={{backgroundColor:"green"}}
                        onClick = {() => this.updateRestauranteDetails()}>
                        Update    
                    </button>
                    <button
                        style={{backgroundColor:"red"}}
                        onClick = {() => this.deleteRestauranteDetails(restaurante)}>
                        Delete    
                    </button>
                </div>
                {this.state.showComponents? <RestauranteUpdate restauranteUpdate = {restaurante}/> : null }
            </div>
        )
    }
    updateRestauranteDetails(){
        this.setState({showComponents: true})
    }
    deleteRestauranteDetails(restaurante){
        axios.delete(process.env.REACT_APP_URL.concat(restaurante.delete))
            .then((response) => {
                console.log(response)
            })
            .catch(function(error){
                console.log(error)
            })
    }
}

export default DetailRestaurante

    //1:20:22