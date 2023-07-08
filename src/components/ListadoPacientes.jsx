import Paciente from "./Paciente"

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {

  return (
    <div className="md:w-1/2 lg:w-3/5">

      {pacientes && pacientes.length ? 
      <>
        <h2 className=" font-black text-3xl text-center">Listado de Pacientes</h2>
        <p className=" font-bold text-center text-xl mt-5 mb-10">Administra tus
          <span className=" text-indigo-600"> Pacientes y Citas</span>
        </p>
        <div className=" md:h-screen overflow-scroll">
          {
            pacientes.map(paciente=>(
            <Paciente 
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
            ))}
        </div>
      </>
      : (
        <>
        <h2 className=" font-black text-3xl text-center">No hay pacientes registados</h2>
        <p className=" font-bold text-center text-xl mt-5 mb-10">Comienza agregando pacientes 
          <span className=" text-indigo-600"> y apareceran en esta sección</span>
        </p>
        </>
      )}

      
    </div>
  )
}

export default ListadoPacientes

