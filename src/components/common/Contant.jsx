import React from 'react';
import './Contactame.css'

const Contant = () => {
    return (
        <div className='contact-card'>
            <h2>Contactame</h2>
            <form>
                <label htmlFor="name">Nombre:</label>
                <input type="text" id='name' name='name' />

                <label htmlFor="email">Correo Electronico.</label>
                <input type="email" id='email' name='email' />

                <label htmlFor="message">Mensaje:</label>
                <textarea name="message" id="message" rows="4"></textarea>

                <button type='submit'>Enviar</button>
            </form>
        </div>
    );
};

export default Contant;