import React from 'react'
import './NewContato.css'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const NewContato = () => {
  const navigate = useNavigate()

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('N');
  const [language, setLanguage] = useState('Portugues');
  const [birthday, setBirthday] = useState('');
  const [avatar, setAvatar] = useState('');

  const createContato = (e) => {
    e.preventDefault();

  };

  const getPosts = async () => {
    try {
      const response = await axios.get('https://my.api.mockaroo.com/lestetelecom/test.json?key=f55c4060')
      const data = response.data;
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='new-contato'>
      <h2>
        Criar novo contato
      </h2>
      <form onSubmit={(e) => createContato(e)}>
        <div className='form-control'>

          <label htmlFor="first_name">Nome :</label>
          <input type="text"
          name='first_name'
          placeholder='Insira aqui o nome' 
          id='first_name' 
          onChange={(e)=>setFirstName(e.target.value)}/>
        </div>

        <div className='form-control'>

          <label htmlFor="last_name">Sobrenome :</label>
          <input type="text" 
          name='last_name' 
          placeholder='Insira aqui o sobrenome' 
          id='last_name' 
          onChange={(e)=>setLastName(e.target.value)}/>
        </div>

        <div className='form-control'>

          <label htmlFor="email">Email :</label>
          <input type="email" 
          name='email' 
          placeholder='Insira aqui o email' 
          id='email' 
          onChange={(e)=>setEmail(e.target.value)}/>
        </div>

        <div className='form-control'>
          <label htmlFor="gender">Gênero :</label>
          <select name='gender' id='genero'
          onChange={(e)=>setGender(e.target.value)}>
            <option value="M">Masculino</option>
            <option value="F">Feminino</option>
            <option value="O">Outro</option>
            <option value="N">Prefiro nâo mencionar</option>
          </select>
        </div>

        <div className='form-control'>
          <label htmlFor="language">Idioma :</label>
          <select name='language' id='idioma'
          onChange={(e)=>setLanguage(e.target.value)}>
            <option value="Ingles">Inglês</option>
            <option value="Espanhol">Espanhol</option>
            <option value="Mandarim">Mandarim</option>
            <option value="Portugues">Português</option>
            <option value="Italiano">Italiano</option>
          </select>
        </div>

        <div className='form-control'>

          <label htmlFor="birthday">Nascimento :</label>
          <input type="date" 
          name='birthday' 
          id='nascimento' 
          onChange={(e)=>setBirthday(e.target.value)}/>
        </div>
        <div className='form-control'>

        <label htmlFor="avatar">Avatar :</label>
        <input
          type="file"
          name="avatar"
          id="avatar"
          onChange={(e) => setAvatar(e.target.files[0])}
        />

        </div>
        <input type="submit" value="Criar contato" className='btn' />
      </form>
    </div>
  )
}

export default NewContato