import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types'; 

import './ContatoCard.css'; 

const ContatoCard = ({ contato,onDelete }) => {
  return (
    <div className="contatocard">
      <button onClick={onDelete} className='delete-btn'>
      <FontAwesomeIcon icon={faTrash} />
      </button>
      <Link to={`/edit/${contato.id}`}>
        <button className='edit-btn'>
          <FontAwesomeIcon icon={faEdit} />
        </button>
      </Link>
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
