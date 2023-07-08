import {useState, useEffect} from 'react'
import ListadoPacientes from "./components/ListadoPacientes.jsx"
import Header from "./components/headers.jsx"
import Formulario from "./components/Formulario.jsx"

function App() {

  //const [pacientes, setPacientes] = useState([]); //arreglo 
  const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? []); //arreglo 
  const [paciente, setPaciente] = useState({}); //objeto por eso {}
  

  // Almacena en el local Storage para conservar los datos al recargar la pagina
  useEffect(()=>{
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  },[pacientes])

  const eliminarPaciente = (id) =>{
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id)
    setPacientes(pacientesActualizados)
  }
  return (
    <div className="container mx-auto mt-16">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario
          pacientes = {pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes = {pacientes}
          setPaciente={setPaciente}
          paciente = {paciente}
          eliminarPaciente = {eliminarPaciente}
        />  
      </div>
    </div>
  )
} 

export default App
