
const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
    const {nombre, propietario, email, alta, sintomas, id} = paciente;

    const handleEliminar= () => {
        const respuesta = confirm('Deseas eliminar este paciente?')
        if (respuesta) {
            eliminarPaciente(id)
        }
    }
    return(
        <div className=" m-3 bg-white rounded-md px-5 py-10 shadow-md">
            <p className=" font-bold mb-3 text-gray-700 uppercase">Nombre de la Mascota:
                <span className="font-normal normal-case"> {nombre} </span>
            </p>
            <p className=" font-bold mb-3 text-gray-700 uppercase">Propietario:
                <span className="font-normal normal-case"> {propietario} </span>
            </p>
            <p className=" font-bold mb-3 text-gray-700 uppercase">Email:
                <span className="font-normal normal-case"> {email} </span>
            </p>
            <p className=" font-bold mb-3 text-gray-700 uppercase">Fecha:
                <span className="font-normal normal-case"> {alta} </span>
            </p>
            <p className=" font-bold mb-3 text-gray-700 uppercase">Síntomas:
                <span className="font-normal normal-case">{sintomas} </span>
            </p>

            <div className=" flex justify-around">
                <button
                    type="button"
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white fond-bold uppercase rounded-md"
                    onClick={()=>setPaciente(paciente)}
                >
                    Editar
                </button>
                <button
                    type="button"
                    className="py-2 px-10 bg-red-500 hover:bg-red-600 text-white fond-bold uppercase rounded-md"
                    onClick={handleEliminar}
                >
                    Eliminar
                </button>
            </div>
        </div>
    )
}

export default Paciente;