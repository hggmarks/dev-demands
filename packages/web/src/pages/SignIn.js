import React, { useState } from 'react';

export default function SingIn() {
    
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://127.0.0.1:8000/authenticate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                pwd
            })
        }).then((response) => response.json()) //testar sem colchetes dps
          .then((data) => console.log('Success!', data))
    }

    const handleEmailChange = (event) => setEmail(event.target.value);
    const handlePwdChange = (event) => setPwd(event.target.value);

    return(

        <form onSubmit={handleSubmit}>
            <fieldset>
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    id="email" 
                    inputMode="email" 
                    autoComplete="username"
                    value={email}
                    onChange={handleEmailChange}
                />
            </fieldset>
            <fieldset>
                <label htmlFor="password">Senha</label>
                <input 
                    type="password"
                    id="password" 
                    autoComplete="current-password"
                    value={pwd}
                    onChange={handlePwdChange}
                />
            </fieldset>
            <button type="submit">Entrar</button>
        </form>

    );
}
    
    