// src/components/SignUpLogin.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import useAuthentication from '../hooks/useAuthentication';

const SignUpLogin = () => {
    const [isLogin, setIsLogin] = useState(true);

    const {
        username,
        setUsername,
        password,
        setPassword,
        passwordConfirmation,
        setPasswordConfirmation,
        error,
        loading,
        handleSubmit: handleFormSubmit,
    } = useAuthentication(isLogin);

    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/home');
        }
    }, [isAuthenticated, navigate]);

    if (isAuthenticated) {
        return null;
    }

    return (
        // Contenedor principal: centra el contenido vertical y horizontalmente.
        // min-h-screen: asegura que ocupe al menos toda la altura de la ventana.
        // p-4: padding para pantallas pequeñas.
        // bg-black bg-opacity-50: añade un overlay oscuro semi-transparente para que el formulario blanco destaque.
        <div className="flex flex-col items-center justify-center min-h-screen p-4  bg-opacity-50">
            {/* Título del formulario */}
            <h2 className="text-4xl font-extrabold text-yellow-500 drop-shadow-lg">
                Welcome
            </h2>

            {/* Mensaje de error */}
            {error && (
                <p className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6 w-full max-w-sm text-center">
                    {error}
                </p>
            )}

            {/* Formulario principal */}
            {/* px-8 py-16: padding horizontal de 2rem y vertical de 4rem para más altura. */}
            {/* max-w-xs: limita el ancho máximo a 20rem (320px) para una forma más compacta. */}
             <form onSubmit={handleFormSubmit} className="bg-white px-8 py-12 rounded-xl mt-8 shadow-2xl w-full max-w-sm border border-gray-200">
                <div className="mb-6"> {/* Mantiene el margen inferior para separar los campos */}
                    <label htmlFor="username" className="block text-gray-700 text-sm font-semibold mb-3">
                        Username:
                    </label>
                    <input
                        type='text'
                        id='username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        className="shadow-sm appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-200"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block text-gray-700 text-sm font-semibold mb-3">
                        Password:
                    </label>
                    <input
                        type="password"
                        id='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="shadow-sm appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-200"
                    />
                </div>
                {!isLogin && (
                    <div className="mb-6">
                        <label htmlFor="passwordConfirmation" className="block text-gray-700 text-sm font-semibold mb-3">
                            Confirm Password:
                        </label>
                        <input
                            type="password"
                            id='passwordConfirmation'
                            value={passwordConfirmation}
                            onChange={(e) => setPasswordConfirmation(e.target.value)}
                            required
                            className="shadow-sm appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-200"
                        />
                    </div>
                )}
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                    {loading ? 'Processing...' : (isLogin ? 'Login' : 'Sign Up')}
                </button>
            </form>


            {/* Botón para alternar entre Login y Sign Up */}
            <button
                onClick={() => setIsLogin(!isLogin)}
                className="mt-6 px-4 py-2 border border-yellow-300 text-yellow-300 rounded-lg hover:bg-yellow-300 hover:text-white transition duration-800 ease-in-out cursor-pointer"
            >
                {isLogin ? 'Need an account? Sign up' : 'Already have an account? Login'}
            </button>
        </div>
    );
};

export default SignUpLogin;