import React, { useState, useEffect } from 'react';
import './cookieConsent.css'; // Estilos para o banner

const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'accepted');
        setIsVisible(false);
        // Aqui você pode definir os cookies conforme necessário
    };

    const handleDecline = () => {
        localStorage.setItem('cookieConsent', 'declined');
        setIsVisible(false);
        // Aqui você pode remover cookies ou não configurá-los
    };

    return (
        isVisible && (
            <div className="cookie-consent-banner">
                <p>Este site utiliza cookies para melhorar sua experiência. Você aceita?</p>
                <button onClick={handleAccept}>Aceitar</button>
                <button onClick={handleDecline}>Recusar</button>
            </div>
        )
    );
};

export default CookieConsent;
