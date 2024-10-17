// src/components/Cashback.js
import React, { useEffect, useState } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const Cashback = () => {
  const [ipAddress, setIpAddress] = useState('');
  const [cookie, setCookie] = useState('');
  const [user, setUser] = useState(null);

  // Função para capturar o IP
  const fetchIpAddress = async () => {
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      setIpAddress(data.ip);
    } catch (error) {
      console.error("Erro ao obter o IP:", error);
    }
  };

  // Função para capturar os cookies
  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  };

  useEffect(() => {
    fetchIpAddress();
    setCookie(getCookie('userSession'));
  }, []);

  const handleGoogleLoginSuccess = (response) => {
    const token = response.credential;
    // Aqui você pode enviar o token para o backend para autenticação
    setUser({ token });
  };

  const handleGoogleLoginFailure = (error) => {
    console.error("Erro na autenticação com Google:", error);
  };

  return (
    <GoogleOAuthProvider clientId="SUA_CLIENT_ID_GOOGLE">
      <div>
        <h1>Cashback</h1>
        <p>Seu endereço IP: {ipAddress}</p>
        <p>Cookie: {cookie}</p>
        {!user ? (
          <GoogleLogin
            onSuccess={handleGoogleLoginSuccess}
            onFailure={handleGoogleLoginFailure}
          />
        ) : (
          <button onClick={() => console.log("Usuário autenticado")}>
            Solicitar Cashback
          </button>
        )}
      </div>
    </GoogleOAuthProvider>
  );
};

export default Cashback;
