import React from 'react';

export default function SingIn() 

    return(
        <form action="/authenticate" method="POST">
            <fieldset>
                <label for="email">Emaail</label>
                <input type="email" id="email" name="email" inputmode="email" autocomplete="username" />
            </fieldset>
            <fieldset>
                <label for="password">Senha</label>
                <input type="password" id="password" name="password" autocomplete="current-password" />
            </fieldset>
            <button type="submit">Entrar</button>
        </form>

    );
}
    
    