import api from "../config/axiosConfig.js";

const authService = {
    login: async (username, password) => {
        try {
            console.log('Attempting login with:', { username, password }); 
            // Loggea la estructura del payload exacto
            console.log('Sending payload:', { user: { username, password } });

            const response = await api.post('login', { user: { username, password } });
            console.log(response, 'log edl service login')

            if (response.data.token) {
                localStorage.setItem('token', response.data.token)
                console.log('Token stored in localStorage');
            }

            return response.data;
        } catch (error) {
            console.error('Login error', error.response?.data || error.message);
            throw error;
        }
    },

    signup: async (username, password, password_confirmation) => {
        try {
            const response = await api.post('/signup', {
                user: {
                    username,
                    password,
                    password_confirmation: password_confirmation
                }
            });

            console.log(response, 'log del signup')

            if (response.data.token) {
                localStorage.setItem('token', response.data.token);
            }
            console.log(response.data, 'log del service sign up')
            return response.data;
        } catch (error) {
            console.error('Signup error:', error.rsponse?.data || error.message);
            throw error;
        }
    },

    logout: async () => {
        try {
            await api.delete('/logout');
            localStorage.removeItem('token');
            return { success: true, message: 'Logged out successfully' };
        } catch (error) {
            console.error('LogOut error:', error.response?.data || error.message);
            localStorage.removeItem('token');
            throw error;
        }
    },

    getCurrentUser: async () => {
        try {
            const response = await api.get('/me');
            console.log(response.data, 'log del service /me');
            return response.data
        } catch (error) {
            console.error('Get Current user error:', error.response?.data || error.message);
            throw error;
        }
    },
};

export default authService;