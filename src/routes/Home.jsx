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
    <div>
      <h1>
        Contatos
      </h1>
      {contatos.length ===0 ? (<p>Carregando...</p>) : (<p>Carregou</p>) }
    </div>
  )
}

export default Home