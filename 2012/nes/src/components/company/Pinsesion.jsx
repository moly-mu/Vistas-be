import { Link } from "react-router-dom";

const PinSesion = () => {

  return (
    <div>
      {/* barra de navegación */}
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

            <Link to="/Sins">
            <button className="text-sm font-medium text-gray-700 hover:text-blue-500 transition">
              Soy Usuario
            </button>
            </Link>

            <Link to="/Preg">
            <button className="px-4 py-2 bg-[#00102D] text-white rounded-lg hover:bg-[#003366]">
              Registrarme
            </button>
            </Link>
          </div>
        </div>
      </div>

      {/*  inicio de sesión */}
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="grid md:grid-cols-2 items-center gap-4 max-md:gap-8 max-w-6xl max-md:max-w-lg w-full p-4 m-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md">
          {/* formulario  */}
          <div className="md:max-w-md w-full px-4 py-4">
            <form>
              <div className="mb-12">
                <h3 className="text-gray-800 text-3xl font-extrabold">Iniciar Sesión - Empresa</h3>
                <p className="text-sm mt-4 text-gray-800">
                  ¿No tienes cuenta?{" "}
                  <a
                    href="javascript:void(0);"
                    className="text-[#003366] font-semibold hover:underline ml-1 whitespace-nowrap">
                    Registrarme aquí
                  </a>
                </p>
              </div>

              {/* correo */}
              <div>
                <label className="text-gray-800 text-xs block mb-2">Correo electrónico</label>
                <div className="relative flex items-center">
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-[#003366] px-2 py-3 outline-none"
                    placeholder="Introduce tu correo"/>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    className="w-[18px] h-[18px] absolute right-2"
                    viewBox="0 0 682.667 682.667">
                    <defs>
                      <clipPath id="a" clipPathUnits="userSpaceOnUse">
                        <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                      </clipPath>
                    </defs>
                    <g clipPath="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                      <path
                        fill="none"
                        strokeMiterlimit="10"
                        strokeWidth="40"
                        d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                        data-original="#000000"
                      ></path>
                    </g>
                  </svg>
                </div>
              </div>

              {/* contraseña */}
              <div className="mt-8">
                <label className="text-gray-800 text-xs block mb-2">Contraseña</label>
                <div className="relative flex items-center">
                  <input
                    name="password"
                    type="password"
                    required
                    className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-[#003366] px-2 py-3 outline-none"
                    placeholder="Introduce tu contraseña"/>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    className="w-[18px] h-[18px] absolute right-2 cursor-pointer"
                    viewBox="0 0 128 128">
                    <path
                      d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                      data-original="#000000"
                    ></path>
                  </svg>
                </div>
              </div>

              {/* recuerda el usuario y olvido contraseña */}
              <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 shrink-0 text-[#003366] focus:ring-[#003366] border-gray-300 rounded" />
                  <label htmlFor="remember-me" className="ml-3 block text-sm text-gray-800">
                    Recuérdame
                  </label>
                </div>
                <div>
                  <a href="javascript:void(0);" className="text-[#003366] font-semibold text-sm hover:underline">
                    ¿Olvidaste tu contraseña?
                  </a>
                </div>
              </div>

              {/* boton de inicio de sesion */}
              <div className="mt-12">
              <Link to="/pagempresa">
                <button
                  type="submit"
                  className="w-full shadow-xl py-2.5 px-4 text-sm tracking-wide rounded-md text-white bg-[#003366] hover:bg-[#00102D] focus:outline-none">
                  Iniciar sesión
                </button>
                </Link>
              </div>

              {/* redes sociales */}
              <div className="space-x-6 flex justify-center mt-6">
                <button type="button" className="border-none outline-none">
                </button>
                <button type="button" className="border-none outline-none">
                </button>
                <button type="button" className="border-none outline-none">
                </button>
              </div>
            </form>
          </div>

          {/* imagen */}
          <div className="md:h-full rounded-xl lg:p-12 p-8">
            <img
              src="/src/assets/img_user/Global Location 1 (1).png"
              className="w-full h-full object-contain"
              alt="login-image"
            />
          </div>
        </div>
      </div>

    </div>
  );
};

export default PinSesion;
