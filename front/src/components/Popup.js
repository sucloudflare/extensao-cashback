import React from 'react';
import CashBack from './Cashback.js';

const Popup = () => {
    return (
        <div style={{ padding: '10px', width: '200px', fontFamily: 'Arial, sans-serif' }}>
            <h1>Cashback Disponível!</h1>
            <p>Visite nossas lojas parceiras e ganhe cashback nas suas compras.</p>
            <CashBack />
        </div>
    );
};

export default Popup;
