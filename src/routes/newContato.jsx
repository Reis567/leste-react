
import './NewContato.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';

const NewContato = () => {
  const navigate = useNavigate()

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('N');
  const [language, setLanguage] = useState('Portugues');
  const [birthday, setBirthday] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');

  const createContato = async (e) => {
    e.preventDefault();
    const newContato = {
      id: uuidv4(),
      first_name: firstName,
      last_name: lastName,
      email,
      gender,
      language,
      birthday,
      avatar: avatarUrl,
    };


    const existingContatos = JSON.parse(localStorage.getItem('contatos')) || [];


    existingContatos.push(newContato);


    localStorage.setItem('contatos', JSON.stringify(existingContatos));

    navigate('/');
  };

  return (
    <div className='new-contato'>
      <h2>
        Criar novo contato
      </h2>
      <form onSubmit={(e) => createContato(e)}>
        <div className='form-control'>

          <label className='form-label' htmlFor="first_name">Nome :</label>
          <input type="text"
          name='first_name'
          placeholder='Insira aqui o nome' 
          id='first_name' 
          onChange={(e)=>setFirstName(e.target.value)}
          required/>
        </div>

        <div className='form-control'>

          <label className='form-label' htmlFor="last_name">Sobrenome :</label>
          <input type="text" 
          name='last_name' 
          placeholder='Insira aqui o sobrenome' 
          id='last_name' 
          onChange={(e)=>setLastName(e.target.value)}
          required/>
        </div>

        <div className='form-control'>

          <label className='form-label' htmlFor="email">Email :</label>
          <input type="email" 
          name='email' 
          placeholder='Insira aqui o email' 
          id='email' 
          onChange={(e)=>setEmail(e.target.value)}
          required/>
        </div>
      <div className="select-divs">
        <div className='form-select'>
          <label htmlFor="gender">Gênero :</label>
          <select name='gender' id='genero'
          onChange={(e)=>setGender(e.target.value)}>
            <option value="M">Masculino</option>
            <option value="F">Feminino</option>
          </select>
        </div>

        <div className='form-select'>
          <label htmlFor="language">Idioma :</label>
          <select name='language' id='idioma'
          onChange={(e)=>setLanguage(e.target.value)}>
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

      </div>

        <div className='form-control'>

          <label className='form-label' htmlFor="birthday">Nascimento :</label>
          <input type="date" 
          name='birthday' 
          id='nascimento' 
          onChange={(e)=>setBirthday(e.target.value)}
          required
          className='input-data'/>
        </div>
        <div className='form-control'>

        <label className='form-label' htmlFor="avatar">URL do Avatar :</label>
        <input
            type="text"
            name="avatarUrl"
            id="avatarUrl"
            value={avatarUrl}
            onChange={(e) => setAvatarUrl(e.target.value)}
            required
            placeholder='Insira aqui a url de uma imagem'
          />

        </div>
        <input type="submit" value="Criar contato" className='btn' />
      </form>
    </div>
  )
}

export default NewContato