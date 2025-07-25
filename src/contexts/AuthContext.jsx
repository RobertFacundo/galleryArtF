import React, { createContext, useState, useEffect, useContext } from 'react';
import authService from '../services/AuthServices.js';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(!!token);

    useEffect(() => {
        const loadUser = async () => {
            if (token) {
                try {
                    const userData = await authService.getCurrentUser();
                    setUser(userData);
                    setIsAuthenticated(true);
                } catch (error) {
                    console.error("Failed to load user with stored token:", error);
                    setToken(null)
                    localStorage.removeItem('token');
                    setUser(null)
                    setIsAuthenticated(false);
                }
            } else {
                setUser(null);
                setIsAuthenticated(false);
            }
            setLoading(false);
        }
        loadUser();
    }, [token]);

    const handleAuthSuccess = (data) => {
        setToken(data.token);
        setUser(data.user || data);
        setIsAuthenticated(true);
        return { success: true, user: data.user || data };
    }

    const handleAuthFailure = (error) => {
        setToken(null);
        localStorage.removeItem('token');
        setUser(null);
        setIsAuthenticated(false);
        throw error;
    }

    const login = async (username, password) => {
        try {
            const data = await authService.login(username, password);
            return handleAuthSuccess(data);
        } catch (error) {
            handleAuthFailure(error);
        }
    };

    const signup = async (username, password, password_confirmation) => {
        try {
            const data = await authService.signup(username, password, password_confirmation);
            return handleAuthSuccess(data);
        } catch (error) {
            handleAuthFailure(error);
        }
    };

    const logout = async () => {
        try {
            await authService.logout();
        } finally {
            setToken(null);
            localStorage.removeItem('token');
            setUser(null);
            setIsAuthenticated(false);
        }
    };

    const value = {
        user,
        isAuthenticated,
        loading,
        login,
        signup,
        logout,
        setUser
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading ? children : <div>Loading authentication...</div>}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export default AuthContext;