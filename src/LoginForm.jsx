// LoginForm.js
import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [formData, setFormData] = useState({
        nationalNumber: '',
        password: '',
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:58468/api/Student/Login', formData);
            console.log('Login successful:', response.message);
            // Handle successful login, e.g., redirect or update state
        } catch (error) {
            setError('Invalid credentials');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="nationalNumber">National Number:</label>
                <input
                    type="text"
                    id="nationalNumber"
                    name="nationalNumber"
                    value={formData.nationalNumber}
                    onChange={handleChange}
                    required
                />
            </div>

            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
            </div>

            {error && <div style={{ color: 'red' }}>{error}</div>}

            <div>
                <button type="submit">Login</button>
            </div>
        </form>
    );
};

export default LoginForm;
