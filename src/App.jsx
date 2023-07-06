import {useState} from 'react'
import ListadoPacientes from "./components/ListadoPacientes.jsx"
import Header from "./components/headers.jsx"
import Formulario from "./components/Formulario.jsx"

function App() {

  const [pacientes, setPacientes] = useState([]); //arreglo 

  return (
    <div className="container mx-auto mt-16">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario
          pacientes = {pacientes}
          setPacientes={setPacientes}
        />
        <ListadoPacientes />  
      </div>
    </div>
  )
} 

export default App
