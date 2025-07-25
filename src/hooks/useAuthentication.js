import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

const useAuthentication = (isLoginMode) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const { login, signup } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        try {
            if (isLoginMode) {
                await login(username, password);
            } else {
                if (password !== passwordConfirmation) {
                    setError('No Matching passwords');
                    setLoading(false);
                    return { success: false, error: 'No matching passwords' };
                }
                await signup(username, password, passwordConfirmation);
            }
            return { success: true };
        } catch (error) {
            const errorMessage = error.response?.data?.error || error.response?.data?.errors?.join(', ') || 'Unexpected error ocurred.';
            setError(errorMessage);

            return { success: false, error: errorMessage }
        }finally{
            setLoading(false);
        }
    };

    return {
        username,
        setUsername,
        password,
        setPassword,
        passwordConfirmation,
        setPasswordConfirmation,
        error,
        loading,
        handleSubmit,
    };
};

export default useAuthentication;