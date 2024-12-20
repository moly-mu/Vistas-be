import { Link } from "react-router-dom"; 

const Sregistro = () => {
    return (
      <div>
        <div className="navbar bg-white shadow-md p-6 flex items-center justify-center sticky top-0 z-50">
          <div className="flex items-center justify-between w-full max-w-screen-xl">
            {/* navbar */}
            <h1 className="text-2xl md:text-3xl font-bold text-center">
              <span className="text-[#FFCB00]">U</span>
              <span className="text-[#00102D]">D</span>
              <span className="text-[#FF0000]">C</span>
              <span className="text-[#00102D]">TALENTO</span>
            </h1>

            <div className="flex items-center gap-4 ml-auto">
              <Link to="/Tins">
              <button className="text-sm font-medium text-gray-700 hover:text-blue-500 transition">
                Soy Administrador
              </button>
              </Link>

              <Link to="/Pins">
              <button className="text-sm font-medium text-gray-700 hover:text-blue-500 transition">
                Soy empresa
              </button>
              </Link>

              <Link to="/Sins">
              <button className="px-4 py-2 bg-[#00102D] text-white rounded-lg hover:bg-[#003366]">
                Iniciar Sesión
              </button>
              </Link>
            </div>
          </div>
        </div>
  
        {/*Registro */}
        <div className="min-h-screen flex items-center justify-center p-6 bg-gray-100">
          <div className="w-full max-w-4xl shadow-lg rounded-md bg-[#00102D] p-8">
            {/* formulario registro */}
            <form>
              <div className="mb-6 text-center">
                <h3 className="text-white text-3xl font-extrabold">Registrarse</h3>
                <p className="text-sm mt-4 text-gray-300">
                  ¿Ya tienes cuenta?{" "}
                  <a
                    href="javascript:void(0);"
                    className="text-[#FFCB00] font-semibold hover:underline ml-1">
                    Iniciar sesión aquí
                  </a>
                </p>
              </div>
  
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* primer nombre */}
                <div>
                  <label className="text-gray-300 text-sm block mb-2">
                    Primer Nombre
                  </label>
                  <input
                    name="primerNombre"
                    type="text"
                    required
                    className="w-full text-gray-200 text-sm bg-gray-700 border-b border-gray-500 focus:border-[#FFCB00] focus:bg-transparent px-6 py-3 outline-none rounded-md"
                    placeholder="Introduce tu primer nombre"
                  />
                </div>
  
                {/* segundo nombre */}
                <div>
                  <label className="text-gray-300 text-sm block mb-2">
                    Segundo Nombre (Opcional)
                  </label>
                  <input
                    name="segundoNombre"
                    type="text"
                    className="w-full text-gray-200 text-sm bg-gray-700 border-b border-gray-500 focus:border-[#FFCB00] focus:bg-transparent px-6 py-3 outline-none rounded-md"
                    placeholder="Introduce tu segundo nombre"
                  />
                </div>
  
                {/* primer apellido */}
                <div>
                  <label className="text-gray-300 text-sm block mb-2">
                    Primer Apellido
                  </label>
                  <input
                    name="primerApellido"
                    type="text"
                    required
                    className="w-full text-gray-200 text-sm bg-gray-700 border-b border-gray-500 focus:border-[#FFCB00] focus:bg-transparent px-6 py-3 outline-none rounded-md"
                    placeholder="Introduce tu primer apellido"
                  />
                </div>
  
                {/* segundo apellido */}
                <div>
                  <label className="text-gray-300 text-sm block mb-2">
                    Segundo Apellido (Opcional)
                  </label>
                  <input
                    name="segundoApellido"
                    type="text"
                    className="w-full text-gray-200 text-sm bg-gray-700 border-b border-gray-500 focus:border-[#FFCB00] focus:bg-transparent px-6 py-3 outline-none rounded-md"
                    placeholder="Introduce tu segundo apellido"
                  />
                </div>
  
                {/* tipo de documento */}
                <div>
                  <label className="text-gray-300 text-sm block mb-2">
                    Tipo de Documento
                  </label>
                  <select
                    name="tipoDocumento"
                    required
                    className="w-full text-gray-200 text-sm bg-gray-700 border-b border-gray-500 focus:border-[#FFCB00] focus:bg-transparent px-6 py-3 outline-none rounded-md">
                    <option value="" disabled selected>
                    Selecciona un tipo de documento
                    </option>
                    <option value="cc" className="text-black bg-white">
                    Cédula de Ciudadanía
                    </option>
                    <option value="ti" className="text-black bg-white">
                    Tarjeta de Identidad
                    </option>
                    <option value="ce" className="text-black bg-white">
                    Cédula de Extranjería
                    </option>
                    <option value="pasaporte" className="text-black bg-white">
                    Pasaporte
                    </option>
                  </select>
                </div>
  
                {/* numero de documento */}
                <div>
                  <label className="text-gray-300 text-sm block mb-2">
                    Número de Documento
                  </label>
                  <input
                    name="numeroDocumento"
                    type="text"
                    required
                    className="w-full text-gray-200 text-sm bg-gray-700 border-b border-gray-500 focus:border-[#FFCB00] focus:bg-transparent px-6 py-3 outline-none rounded-md"
                    placeholder="Introduce tu número de documento"
                  />
                </div>
  
                {/* correo */}
                <div>
                  <label className="text-gray-300 text-sm block mb-2">
                    Correo electrónico
                  </label>
                  <input
                    name="correo"
                    type="email"
                    required
                    className="w-full text-gray-200 text-sm bg-gray-700 border-b border-gray-500 focus:border-[#FFCB00] focus:bg-transparent px-6 py-3 outline-none rounded-md"
                    placeholder="Introduce tu correo electrónico"
                  />
                </div>
  
                {/* contraseña */}
                <div>
                  <label className="text-gray-300 text-sm block mb-2">
                    Contraseña
                  </label>
                  <input
                    name="contraseña"
                    type="password"
                    required
                    className="w-full text-gray-200 text-sm bg-gray-700 border-b border-gray-500 focus:border-[#FFCB00] focus:bg-transparent px-6 py-3 outline-none rounded-md"
                    placeholder="Introduce tu contraseña"
                  />
                </div>
              </div>
  
              {/* botones de accion */}
              <div className="mt-8 flex gap-4">
                <Link to="/">
                <button
                  type="button"
                  className="flex-1 shadow-md py-3 px-5 text-base tracking-wide rounded-md text-gray-700 bg-gray-200 hover:bg-gray-300 focus:outline-none">
                  Cancelar
                </button>
                </Link>

                <Link to="/pagusuario">
                <button
                  type="submit"
                  className="flex-1 shadow-md py-3 px-5 text-base tracking-wide rounded-md text-[#00102D] bg-[#FFCB00] hover:bg-[#FFC107] focus:outline-none">
                  Registrarme
                </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default Sregistro;
  