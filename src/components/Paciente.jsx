
const Paciente = () => {
    return(
        <div className=" m-3 bg-white rounded-md px-5 py-10 shadow-md">
            <p className=" font-bold mb-3 text-gray-700 uppercase">Nombre de la Mascota:
                <span className="font-normal normal-case"> Juan Calos </span>
            </p>
            <p className=" font-bold mb-3 text-gray-700 uppercase">Propietario:
                <span className="font-normal normal-case"> Juan Molina </span>
            </p>
            <p className=" font-bold mb-3 text-gray-700 uppercase">Email:
                <span className="font-normal normal-case"> juan@email.com </span>
            </p>
            <p className=" font-bold mb-3 text-gray-700 uppercase">Fecha:
                <span className="font-normal normal-case"> 25/05/2023 </span>
            </p>
            <p className=" font-bold mb-3 text-gray-700 uppercase">Síntomas:
                <span className="font-normal normal-case"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid eaque adipisci amet consequuntur, autem repudiandae tenetur, voluptates natus atque quod, nostrum ut repellendus reprehenderit eligendi maxime quidem quasi architecto corporis! </span>
            </p>
        </div>
    )
}

export default Paciente;