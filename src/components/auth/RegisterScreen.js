import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator';


import { useForm } from '../../hooks/userForm';
import { removeError, setError } from '../../actions/uiActions';
import { startRegisterLocal } from '../../actions/authActions';

export const RegisterScreen = () => {

    const dispatch = useDispatch();

    const { msg } = useSelector(state => state.ui);

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { name, email, password, password2 } = formValues;

    const handleRegister = (e) => {
        e.preventDefault();

        if (!isFormValid()) return;

        dispatch( startRegisterLocal( email, password, name ) );

    };

    const isFormValid = () => {

        if (name.trim().length === 0) {
            dispatch(setError('Name cannot be empty'));
            return false;
        } else if (!validator.isEmail(email)) {
            dispatch(setError('Provide a correct email'));
            return false;
        } else if (password !== password2 || password.length < 6) {
            dispatch(setError('Passwords must be equals or at least 5 characters'));
            return false;
        }

        dispatch(removeError())
        return true;
    }

    return (
        <>
            <h3 className="auth__title">Register</h3>

            {
                (msg)
                &&
                (
                    <div className='auth__alert-error'>
                        {msg}
                    </div>
                )

            }

            <form autoComplete='off' onSubmit={handleRegister} className='animate__animated animate__fadeIn animate__faster'>

                <input

                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    value={name}
                    onChange={handleInputChange}
                />

                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    value={email}
                    onChange={handleInputChange}
                />

                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value={password}
                    onChange={handleInputChange}
                />

                <input
                    type="password"
                    placeholder="Confirm password"
                    name="password2"
                    className="auth__input"
                    value={password2}
                    onChange={handleInputChange}
                />


                <button
                    type="submit"
                    className="btn btn-primary btn-block mb-5"
                >
                    Register
                </button>



                <Link
                    to="/auth/login"
                    className="link"
                >
                    Already registered?
                </Link>

            </form>
        </>
    )
}
