// src/components/Cashback.js
import React, { useEffect, useState } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const Cashback = () => {
  const [ipAddress, setIpAddress] = useState('');
  const [cookie, setCookie] = useState('');
  const [user, setUser] = useState(null);
  const [cashbackAmount, setCashbackAmount] = useState(0); // Adicionando estado para armazenar cashback

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

  const handleRequestCashback = async () => {
    if (!user) {
      console.log("Usuário não autenticado.");
      return;
    }

    // Aqui você pode implementar a lógica para solicitar cashback
    const data = {
      ip: ipAddress,
      cookie,
      userToken: user.token,
    };

    try {
      const response = await fetch('http://localhost:5000/api/cashback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`, // Incluindo o token no cabeçalho
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        setCashbackAmount(result.amount); // Supondo que o backend retorna a quantia de cashback
        console.log("Cashback solicitado com sucesso:", result);
      } else {
        console.error("Erro ao solicitar cashback:", response.statusText);
      }
    } catch (error) {
      console.error("Erro ao conectar ao servidor:", error);
    }
  };

  const handleDeleteCookie = () => {
    document.cookie = "userSession=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setCookie('');
    setUser(null); // Limpa o usuário ao deletar o cookie
    console.log("Cookie deletado.");
  };

  return (
    <GoogleOAuthProvider clientId="SUA_CLIENT_ID_GOOGLE">
      <div className="container">
        <h1>Cashback</h1>
        <p>Seu endereço IP: {ipAddress}</p>
        <p>Cookie: {cookie}</p>
        {cashbackAmount > 0 && <p>Seu Cashback: R$ {cashbackAmount.toFixed(2)}</p>} {/* Exibe o valor do cashback */}
        {!user ? (
          <div className="google-login">
            <GoogleLogin
              onSuccess={handleGoogleLoginSuccess}
              onFailure={handleGoogleLoginFailure}
            />
          </div>
        ) : (
          <>
            <button onClick={handleRequestCashback}>
              Solicitar Cashback
            </button>
            <button onClick={handleDeleteCookie}>
              Deletar Cookie
            </button>
          </>
        )}
      </div>
    </GoogleOAuthProvider>
  );
};

export default Cashback;
