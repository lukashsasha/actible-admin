// import * as React from 'react';
// import {useState} from 'react';
// import {useLogin, useNotify} from 'react-admin';
//
// const MyLoginPage = ({theme}: any) => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const login = useLogin();
//     const notify = useNotify();
//
//     const handleSubmit = (e: any) => {
//         e.preventDefault();
//         login({email, password}).catch(() =>
//             notify('Invalid email or password')
//         );
//     };
//
//     // testadmin@actible.tk
//     // testadmin321
//
//     return (
//         <>
//         <form id="auth" onSubmit={handleSubmit}>
//             <input
//                 name="email"
//                 type="email"
//                 placeholder="Введите email"
//                 value={email}
//                 onChange={e => setEmail(e.target.value)}
//             />
//             <input
//                 name="password"
//                 type="password"
//                 placeholder="Введите пароль"
//                 value={password}
//                 onChange={e => setPassword(e.target.value)}
//             />
//         </form>
//     <button form="auth" style={{width:"100px", height:"20px"}}/>
//     </>
//     );
// };
//
// export default MyLoginPage;

import React, { useState } from 'react';
import { useLogin, useNotify, useRedirect } from 'react-admin';
import './Login.css';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const login = useLogin();
    const notify = useNotify();
    const redirect = useRedirect();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            await login({ email, password });
            redirect('/');
        } catch (err:any) {
            setError(err.message);
            notify('Неверный емейл или пароль', { variant: 'warning' });
        }
    };

    return (
        <div className="login-form-container">
            <div >{error}</div>
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label htmlFor="email">Емейл</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="input-container">
                    <label htmlFor="password">Пароль</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="submit-button">
                    Войти
                </button>
            </form>
        </div>
    );
};

export default Login;