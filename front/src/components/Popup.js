import React from 'react';
import Cashback from './Cashback';
import './styles.css'; // Importando o CSS

const Popup = () => {
    return (
        <div className="card">
            <h1>Cashback Disponível!</h1>
            <p>Visite nossas lojas parceiras e ganhe cashback nas suas compras.</p>
            <Cashback />
        </div>
    );
};

export default Popup;
