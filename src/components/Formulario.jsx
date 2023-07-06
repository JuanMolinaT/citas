import {useState, useEffect} from 'react';
import Error from './Error';

function Formulario({ pacientes, setPacientes }) {
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [alta, setAlta] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false);

  const handleSubmit =(e) =>{
    e.preventDefault();
    //Validación del formulario
    if ([nombre, propietario, email, alta, sintomas].includes('')) {
      setError(true)
      return;
    }
    setError(false)

    //Objeto Paciente
    const objetoPaciente = {
      nombre, 
      propietario, 
      email, 
      alta, 
      sintomas
    }
    setPacientes([...pacientes, objetoPaciente]);

    //Vaciar las variables
    setAlta('')
    setEmail('')
    setNombre('')
    setSintomas('')
    setPropietario('')
  }

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="font-bold text-xl mt-5 text-center mb-10">
        Añade Pacientes y {''}
        <span className="text-indigo-600">
            Administralos
        </span>
      </p>
      <form 
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 font-bold">
          {
            error && <Error>Existe campos vacios</Error>          }

        <div className="mb-5">
            <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
            <input type="text"
            id="mascota"
            placeholder="Nombre de la mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={(e)=> setNombre(e.target.value)}
            />
        </div>
        <div className="mb-5">
            <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre Propietario</label>
            <input type="text"
            id="mascota"
            placeholder="Nombre del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={propietario}
            onChange={(e)=> setPropietario(e.target.value)}
            />
        </div>
        <div className="mb-5">
            <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email</label>
            <input type="text"
            id="email"
            placeholder="correo@correo.com"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            />
        </div>
        <div className="mb-5">
            <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Alta</label>
            <input 
            type="date"
            id="alta"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={alta}
            onChange={(e)=> setAlta(e.target.value)}
            />
        </div>
        <div className="mb-5">
            <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Síntomas</label>
            <textarea 
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Ingrese los síntomas"
            value={sintomas}
            onChange={(e)=> setSintomas(e.target.value)}
            />
        </div>
        <input 
        type="submit"
        className="b bg-indigo-600 w-full p-3 text-white uppercase font-bold rounded-md
         hover:bg-indigo-700 cursor-pointer"
        value="Agregar Paciente"
        />
      </form>
    </div>
  )
}

export default Formulario;