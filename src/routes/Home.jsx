import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import './Home.css'
import axios from "axios"

const Home = () => {

  const [contatos, setContatos]= useState([])

  const getPosts = async() => {
    try {
      const response = await axios.get('https://my.api.mockaroo.com/lestetelecom/test.json?key=f55c4060')
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getPosts()
  },[])
  return (
    <div>Home</div>
  )
}

export default Home