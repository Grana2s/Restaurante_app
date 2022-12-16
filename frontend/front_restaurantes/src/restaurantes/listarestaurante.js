import React, {Component} from "react"
import DetailRestaurante from "./detailrestaurante"
import axios from 'axios'
import RestauranteForm from "./restauranteform"

class ListaRestaurantes extends Component{
    constructor(props){
        super(props)
        this.state = {
            datosRestaurantes: [],
            detailRestaurante: [],
            showComponents: false,
        }
        this.showDetailRestaurante = this.showDetailRestaurante.bind(this)
        this.getDetailRestaurante = this.getDetailRestaurante.bind(this)
    }

    render(){
        return(
            <div>
                <RestauranteForm/>
                {this.state.datosRestaurantes.map(restaurante =>{
                    return (                       
                        <div style={{color: "#10eaee", border: "1px solid blue", marginBottom:"4px"}}>
                            <h3  
                                p = {restaurante} 
                                key={restaurante.id} 
                                onClick={()=> this.showDetailRestaurante(restaurante)}>
                                {restaurante.nombre}
                            </h3>
                        </div>
                    )

                    })

                }  
                {this.state.showComponents? <DetailRestaurante restaurante = {this.state.detailRestaurante}/> : null }
            </div>
        )
    }
    componentDidMount(){
        console.log(process.env)
        axios.get(process.env.REACT_APP_URL.concat("/restaurante/"))
        .then((response)=>{
            this.setState({datosRestaurantes:response.data})
            //console.log(response)
        })
        .catch(function(error){
            console.log(error)
        })
    }

    showDetailRestaurante(restaurante){
        this.getDetailRestaurante(restaurante)
        this.setState({showComponents: true})
    }

    getDetailRestaurante(restaurante){
        axios.get(process.env.REACT_APP_URL.concat(restaurante.absolute_url))
        .then((response)=>{
            this.setState({detailRestaurante:response.data})
            //console.log(response)
        })
        .catch(function(error){
            console.log(error)
        })
    }
}

export default ListaRestaurantes