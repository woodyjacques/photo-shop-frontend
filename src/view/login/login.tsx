import React from "react";
import Header from "../../components/home/header";

function Login() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="flex flex-grow flex-wrap">
        {/* Left Side: Illustration */}
        <div className="w-full md:w-1/2 bg-red-200 flex items-center justify-center p-6">
          <div className="text-center">
            {/* Aquí va tu imagen */}
            <img
              src="/path-to-your-image.png"
              alt="Illustration"
              className="w-3/4 h-auto max-w-md mx-auto"
            />
            <p className="mt-4 text-lg font-bold text-white">
              ¡Hola! Bienvenido nuevamente.
            </p>
          </div>
        </div>

        {/* Right Side: Login Form */}
        <div className="w-full md:w-1/2 bg-white flex items-center justify-center px-6 py-10">
          <div className="w-full max-w-md">
            <h2 className="text-2xl font-bold text-gray-800">Ingresar</h2>
            <p className="text-sm text-gray-600 mt-2">
              Selecciona un método para acceder.
            </p>

            {/* Login Form */}
            <form className="mt-6">
              {/* Email Input */}
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Correo Electrónico
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                    placeholder="Correo Electrónico"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Contraseña
                </label>
                <div className="mt-1 relative">
                  <input
                    type="password"
                    id="password"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                    placeholder="Contraseña"
                  />
                  <a
                    href="#"
                    className="absolute right-2 top-2 text-sm text-gray-500 hover:text-red-500"
                  >
                    Olvidé mi contraseña
                  </a>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-2 px-4 bg-red-500 text-white font-medium rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                Ingresar
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center my-4">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="mx-3 text-sm text-gray-500">o</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            {/* Register Button */}
            <button
              className="w-full py-2 px-4 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Registrarse
            </button>

            {/* Google Login */}
            <button
              className="mt-4 w-full py-2 px-4 flex items-center justify-center bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <img
                src="/google-logo.png"
                alt="Google"
                className="h-5 w-5 mr-2"
              />
              <span>Iniciar sesión con Google</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
