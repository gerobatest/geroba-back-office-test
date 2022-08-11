import React from 'react';
import './Login.scss';

export default function Login() {
  return (
    <div className="login-container">
        
        <h1>Se connecter</h1>
    
        <form>
            <label for="fname">username</label>
            <input type="text" id="userName" name="userName"/>

            <label for="lname">password</label>
            <input type="password" id="psw" name="psw"/>
        
            <input type="submit" value="Se connecter"/>
        </form>

    </div>
  )
}
