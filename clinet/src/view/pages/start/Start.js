import React, { useEffect } from 'react';
import './Start.css';
import axios from 'axios';
import dev from '../../../model/dev';



export default function () {
    useEffect(() => {
        axios.get(dev + '/auth/login')
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.error(error);
            })

    }, [])
    return (
        <div className='page'>
            <div>
                הסבר על המערכת
            </div>
            <div className='loginWrapper'>
                <p>הרשמה</p>
                <form className='loginForm'>
                    <input type='email' placeholder='דוא״ל' />
                    <input type='text' placeholder='סיסמה' />
                    <input type='text' placeholder='הזן פעם שניה את הסיסמה' />
                    <input type='submit' value='הרשמה' />
                </form>
                <p>התחברות</p>
                <form className='loginForm'>
                    <input type='email' placeholder='דוא״ל' />
                    <input type='text' placeholder='סיסמה' />֞
                    <input type='submit' value='התחברות' />
                </form>
            </div>
        </div>)
}