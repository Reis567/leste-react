import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import './Home.css'
import axios from "axios"

const Home = () => {

  const [contatos, setContatos]= useState([])

  const getPosts = async() => {
    try {
      const response = await axios.get('https://my.api.mockaroo.com/lestetelecom/test.json?key=f55c4060')
      const data = response.data;
      setContatos(data);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getPosts()
  },[])
  return (
    <div className="home-content">
      <h1 className="home-title">
        Contatos
      </h1>
      <div className="contatosgrid">

      {contatos.length ===0 ? (<p>Carregando...</p>) : (
        contatos.map((contato)=>(
          <div className="contatocard" key={contato.id}>
            <img src={contato.avatar} alt="" />
            <h2>
              {contato.first_name}-
              {contato.last_name}
            </h2>
            <p>
              {contato.email}
            </p>
            <p>
              {contato.gender}
              
            </p>
            <p>
              {contato.language}
            </p>
            <p>
              {contato.birthday}
            </p>
          </div>
        ))
      ) }
      </div>
    </div>
  )
}

export default Home