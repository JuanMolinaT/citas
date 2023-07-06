import ListadoPacientes from "./components/ListadoPacientes.jsx"
import Header from "./components/headers.jsx"
import Formulario from "./components/Formulario.jsx"

function App() {

  return (
    <div className="container mx-auto mt-16">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario/>
        <ListadoPacientes />  
      </div>
    </div>
  )
} 

export default App
