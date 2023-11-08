import React from 'react'
import './NewContato.css'

const   NewContato = () => {
  return (
    <div className='new-contato'>
        <h2>
          Criar novo contato
        </h2>
        <form>
          <div className='form-control'>

            <label htmlFor="first_name">Nome :</label>
            <input type="text" name='first_name' placeholder='Insira aqui o nome' id='first_name' />
          </div>

          <div className='form-control'>

            <label htmlFor="last_name">Sobrenome :</label>
            <input type="text" name='last_name' placeholder='Insira aqui o sobrenome' id='last_name' />
          </div>

          <div className='form-control'>

            <label htmlFor="email">Email :</label>
            <input type="email" name='email' placeholder='Insira aqui o email' id='email' />
          </div>

          <div className='form-control'>
          <label htmlFor="gender">Gênero :</label>
          <select name='gender' id='genero'>
            <option value="M">Masculino</option>
            <option value="F">Feminino</option>
            <option value="O">Outro</option>
            <option value="N">Prefiro nâo mencionar</option>
          </select>
        </div>

        <div className='form-control'>
          <label htmlFor="language">Idioma :</label>
          <select name='language' id='idioma'>
          <option value="Ingles">Inglês</option>
          <option value="Espanhol">Espanhol</option>
          <option value="Mandarim">Mandarim</option>
          <option value="Portugues">Português</option>
          <option value="Italiano">Italiano</option>
          </select>
        </div>

          <div className='form-control'>

            <label htmlFor="birthday">Nascimento :</label>
            <input type="date" name='birthday' id='nascimento' />
          </div>
          <div className='form-control'>

            <label htmlFor="avatar">Avatar :</label>
            <input type="file" name='birthday'  id='avatar' />
          </div>
          <input type="submit" value="Criar contato" className='btn'/>
        </form>
    </div>
  )
}

export default NewContato