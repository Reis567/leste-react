import { useState, useEffect } from "react"
import './Home.css'
import axios from "axios"
import ContatoCard from "../components/ContatoCard"
import Filter from "../components/Filter"


const Home = () => {
  const [contatos, setContatos] = useState([]);
  const [filteredContatos, setFilteredContatos] = useState([]);

  useEffect(() => {
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

          localStorage.setItem("contatos", JSON.stringify(data));
        } catch (error) {
          console.log(error);
        }
      }
    };

    fetchData();
  }, []);

  const applyFilters = ({ gender, language, month }) => {
    // Implemente as funções de filtro com base nos filtros selecionados
    let filteredContatos = contatos;

    if (gender) {
      filteredContatos = filteredContatos.filter((contato) => contato.gender === gender);
    }

    if (language) {
      filteredContatos = filteredContatos.filter((contato) => contato.language === language);
    }

    if (month) {
      filteredContatos = filteredContatos.filter((contato) => {
        const contactMonth = new Date(contato.birthday).getMonth() + 1;
        return contactMonth === Number(month);
      });
    }

    setFilteredContatos(filteredContatos);
  };


  return (
    <div className="home-content">
      <h1 className="home-title">Contatos</h1>
      <Filter onFilter={applyFilters} />
      <div className="contatosgrid">
        {filteredContatos.length === 0 ? (
          <p>Carregando...</p>
        ) : (
          filteredContatos.map((contato) => (
            <ContatoCard key={contato.id} contato={contato} />
          ))
        )}
      </div>
      <Resumo/>
    </div>
  );
};

export default Home;