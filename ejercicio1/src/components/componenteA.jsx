import React from 'react';
import PropTypes from 'prop-types';
import { Contacto} from '../models/contact.class'
import ComponenteB from './componenteB';
 


function componenteA({ contacto }) {
    return (
      <div>
        <h2>Nombre: {contacto.nombre}</h2>
        <h3>Apellido: {contacto.apellido}</h3>
        <h4>Email: {contacto.email} </h4>
        <ComponenteB estado={true}/>
        </div>
    )
}


componenteA.propTypes = {
    contacto: PropTypes.instanceOf(Contacto),
  };
  
  export default componenteA;

