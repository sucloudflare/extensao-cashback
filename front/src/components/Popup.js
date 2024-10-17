import React from 'react';
import Cashback from './Cashback';
import './styles.css'; // Importando o CSS

const Popup = () => {
    return (
        <div className="popup-container">
            <div className="popup-card">
                <img 
                    src="/mtrek.png" // Caminho correto para acessar a imagem na pasta public
                    alt="Cashback"
                    className="cashback-image" 
                    width={40} // Remover 'px' e usar apenas o número
                />
                <h1>Cashback Disponível!</h1>
                <p>Visite nossas lojas parceiras e ganhe cashback nas suas compras.</p>
                <Cashback />
                <button className="action-button">Ver Ofertas</button>
            </div>
        </div>
    );
};

export default Popup;
