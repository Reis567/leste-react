import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import PropTypes from 'prop-types'; 

import './ContatoCard.css'; 

const ContatoCard = ({ contato,onDelete }) => {
  return (
    <div className="contatocard">
      <button onClick={onDelete} className='delete-btn'>
      <FontAwesomeIcon icon={faTrash} />
      </button>
      <img src={contato.avatar} alt="" />
      <div className="name">
        <h2>{contato.first_name}</h2>
        <h2>{contato.last_name}</h2>
      </div>
      <p>{contato.email}</p>
      <p>{contato.gender}</p>
      <p>{contato.language}</p>
      <p>{contato.birthday}</p>
    </div>
  );
};


ContatoCard.propTypes = {
  contato: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContatoCard;
