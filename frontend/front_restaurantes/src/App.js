import './App.css';
import ListaRestaurantes from "./restaurantes/listarestaurante";
import ListaSucursal from "./sucursales/listasucursales";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={"logo_restaurante.jpg"} className="App-logo" alt="logo" />
        <p>
          App de Restaurantes
        </p>
        <ListaRestaurantes/>
      </header>
    </div>
  );
}

export default App;
