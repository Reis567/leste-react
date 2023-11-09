import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types'; 

import './ContatoCard.css'; 

const formatDate = (date) => {
  const d = new Date(date);
  const day = d.getDate().toString().padStart(2, '0');
  const month = (d.getMonth() + 1).toString().padStart(2, '0'); // Mês começa em 0 (janeiro é 0)
  const year = d.getFullYear();
  return `${day}/${month}/${year}`;
};

const ContatoCard = ({ contato,onDelete }) => {
  const formattedBirthday = formatDate(contato.birthday);
  const generoExibido = contato.gender === "F" ? "Feminino" : contato.gender === "M" ? "Masculino" : contato.gender;
  return (
    <div className="contatocard">
      <img src={contato.avatar} alt="avatar image" />
      <div className="name">
        <h2>{contato.first_name}</h2>
        <h2>{contato.last_name}</h2>
      </div>
      <p className='email'>{contato.email}</p>
      <p>Gênero : <span className='genero'>{generoExibido}</span></p>
      <p>Idioma : <span className="idioma">{contato.language}</span></p>
      <p>Data de Nascimento: <span className="aniversario">{formattedBirthday}</span></p>
      <hr style={{ width: '100%', color: '#333', borderStyle: 'solid',opacity:'40%' }} />

      <div className='buttons'>

      <button onClick={onDelete} className='delete-btn'>
        Apagar 
      <FontAwesomeIcon icon={faTrash} />
      </button>
      <Link to={`/edit/${contato.id}`}>
        <button className='edit-btn'>
          Editar
          <FontAwesomeIcon icon={faEdit} />
        </button>
      </Link>
      </div>
    </div>
  );
};


ContatoCard.propTypes = {
  contato: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContatoCard;
