import { useState, useEffect } from "react"
import './Home.css'
import axios from "axios"
import ContatoCard from "../components/ContatoCard"
import Filter from "../components/Filter"
import Resumo from "../components/Resumo"
import useStateWithCallback from "../components/UseStateWithCallback"


const Home = () => {
  const [contatos, setContatos] = useStateWithCallback([]);
  const [filteredContatos, setFilteredContatos] = useState([]);
  useEffect(() => {

    fetchData();
  }, []);

  const fetchData = async () => {
    const cachedData = localStorage.getItem("contatos");

    if (cachedData) {
      setContatos(JSON.parse(cachedData));
    } else {
      try {
        const response = await axios.get(
          'https://my.api.mockaroo.com/lestetelecom/test.json?key=f55c4060'
        );
        const data = response.data;
        setContatos(data);
        console.log('Pegou na API')

        localStorage.setItem("contatos", JSON.stringify(data));
      } catch (error) {
        console.log(error);
      }
    }
  };
  const applyFilters = ({ gender, language, month }) => {
    let filteredContacts = [...contatos]; 
  
    if (gender) {
      filteredContacts = filteredContacts.filter((contato) => contato.gender === gender);
    }
  
    if (language) {
      filteredContacts = filteredContacts.filter((contato) => contato.language === language);
    }
  
    if (month) {
      filteredContacts = filteredContacts.filter((contato) => {
        const contactMonth = new Date(contato.birthday).getMonth() + 1;
        return contactMonth === Number(month);
      });
    }
  
    setFilteredContatos(filteredContacts);
  };

  const deleteContato = (contatoId) => {
    const updatedContatos = contatos.filter((contato) => contato.id !== contatoId);

    setContatos(updatedContatos);
    setFilteredContatos(updatedContatos);

    localStorage.setItem('contatos', JSON.stringify(updatedContatos));
  };


  return (
    <div className="home-content">
      <h1 className="home-title">Leste Contact</h1>
      <Filter onFilter={applyFilters} />
      <Resumo contatos={ contatos} />
      <div className="contatosgrid">
      {filteredContatos.length > 0 ? (
        filteredContatos.map((contato) => (
          <ContatoCard key={contato.id} contato={contato} onDelete={() => deleteContato(contato.id)} />
        ))
      ) : (
        contatos.map((contato) => (
          <ContatoCard key={contato.id} contato={contato} onDelete={() => deleteContato(contato.id)} />
        ))
      )}
      </div>
    </div>
  );
}
export default Home;