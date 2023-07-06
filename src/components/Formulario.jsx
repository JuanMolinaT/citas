

function Formulario() {
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="font-bold text-lg mt-5 text-center mb-10">
        Añade Pacientes y {''}
        <span className="text-indigo-600">
            Administralos
        </span>
      </p>
      <form className="bg-white shadow-md rounded-lg py-10 px-5">
        <div className="mb-5">
            <label htmlFor="mascota" className="block text-gray-700 uppercase font-black">Nombre Mascota</label>
            <input type="text"
            id="mascota"
            placeholder="Nombre de la mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            />
        </div>
        <div className="mb-5">
            <label htmlFor="propietario" className="block text-gray-700 uppercase font-black">Nombre Propietario</label>
            <input type="text"
            id="mascota"
            placeholder="Nombre del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            />
        </div>
        <div className="mb-5">
            <label htmlFor="email" className="block text-gray-700 uppercase font-black">Email</label>
            <input type="text"
            id="email"
            placeholder="correo@correo.com"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            />
        </div>
        <div className="mb-5">
            <label htmlFor="alta" className="block text-gray-700 uppercase font-black">Alta</label>
            <input 
            type="date"
            id="alta"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            />
        </div>
        <div className="mb-5">
            <label htmlFor="sintomas" className="block text-gray-700 uppercase font-black">Síntomas</label>
            <textarea 
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Ingrese los síntomas"
            />
        </div>
      </form>
    </div>
  )
}

export default Formulario;