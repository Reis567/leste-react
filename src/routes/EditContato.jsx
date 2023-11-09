import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './EditContato.css'


const EditContato = () => {
  const { id } = useParams();
  const navigate = useNavigate();


  const [contato, setContato] = useState({
    first_name: '',
    last_name: '',
    email: '',
    gender: '',
    language: '',
    birthday: '',
    avatar: '',
  });

  useEffect(() => {
    const existingContatos = JSON.parse(localStorage.getItem('contatos')) || [];
    
    const contatoToEdit = existingContatos.find((c) => c.id.toString() === id.toString());
    
    if (contatoToEdit) {
      setContato(contatoToEdit);
    }
  }, [id]);
  

  const updateContato = (e) => {
    e.preventDefault();
    const existingContatos = JSON.parse(localStorage.getItem('contatos')) || [];


    const contatoIndex = existingContatos.findIndex((c) => c.id.toString() === id.toString());

    if (contatoIndex !== -1) {
      existingContatos[contatoIndex] = contato;
      localStorage.setItem('contatos', JSON.stringify(existingContatos));
      navigate('/'); // Redirecionar para a home
    }
  };

  return (
    <div className='edit-contato'>
      <h2>Editar contato</h2>
      <form onSubmit={updateContato}>
        <div className='form-control'>
          <label htmlFor='first_name'>Nome:</label>
          <input
            type='text'
            name='first_name'
            value={contato.first_name}
            onChange={(e) => setContato({ ...contato, first_name: e.target.value })}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='last_name'>Sobrenome:</label>
          <input
            type='text'
            name='last_name'
            value={contato.last_name}
            onChange={(e) => setContato({ ...contato, last_name: e.target.value })}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            name='email'
            value={contato.email}
            onChange={(e) => setContato({ ...contato, email: e.target.value })}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='gender'>Gênero:</label>
          <select
            name='gender'
            value={contato.gender}
            onChange={(e) => setContato({ ...contato, gender: e.target.value })}
          >
            <option value='M'>Masculino</option>
            <option value='F'>Feminino</option>
            <option value='O'>Outro</option>
            <option value='N'>Prefiro não mencionar</option>
          </select>
        </div>
        <div className='form-control'>
          <label htmlFor='language'>Idioma:</label>
          <select
            name='language'
            value={contato.language}
            onChange={(e) => setContato({ ...contato, language: e.target.value })}
          >
            <option value="Ingles">Inglês</option>
            <option value="Espanhol">Espanhol</option>
            <option value="Mandarim">Mandarim</option>
            <option value="Portugues">Português</option>
            <option value="Italiano">Italiano</option>
            <option value="Fijian">Fijian</option>
            <option value="Latvian">Latvian</option>
            <option value="Mongolian">Mongolian</option>
            <option value="Zulu">Zulu</option>
            <option value="Assamese">Assamese</option>
            <option value="Burmese">Burmese</option>
            <option value="Luxembourgish">Luxembourgish</option>
          </select>
        </div>
        <div className='form-control'>
          <label htmlFor='birthday'>Nascimento:</label>
          <input
            type='date'
            name='birthday'
            value={contato.birthday}
            onChange={(e) => setContato({ ...contato, birthday: e.target.value })}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='avatar'>URL do Avatar:</label>
          <input
            type="text"
            name="avatar"
            value={contato.avatar}
            onChange={(e) => setContato({ ...contato, avatar: e.target.value })} 
          />
        </div>
        <input type='submit' value='Salvar' className='btn' />
      </form>
    </div>
  );
};

export default EditContato;
