import  { useState } from 'react';
import './Filter.css';
import PropTypes from 'prop-types'; 

const Filter = ({ onFilter }) => {
  const [genderFilter, setGenderFilter] = useState('');
  const [languageFilter, setLanguageFilter] = useState('');
  const [monthFilter, setMonthFilter] = useState('');
  const [ageFilter, setAgeFilter] = useState('');

  const contatos = JSON.parse(localStorage.getItem('contatos'));

  const extractUniqueLanguages = (contatos) => {
    const uniqueLanguages = new Set();
    contatos.forEach((contato) => {
      uniqueLanguages.add(contato.language);
    });
    return Array.from(uniqueLanguages);
  };
  const extractUniqueMonths = (contatos) => {
    const uniqueMonths = new Set();
    contatos.forEach((contato) => {
      const contactMonth = new Date(contato.birthday).getMonth() + 1;
      uniqueMonths.add(contactMonth);
    });
    return Array.from(uniqueMonths).sort((a, b) => a - b);
  };

  const handleFilter = () => {
    onFilter({
      gender: genderFilter,
      language: languageFilter,
      month: monthFilter,
      age: ageFilter,
    });
  };

  const uniqueLanguages = extractUniqueLanguages(contatos);
  const uniqueMonths = extractUniqueMonths(contatos);

  return (
    <div className="filter">
      <h2>Filtrar</h2>
      <div className="filters-data">
        <div className='margin-inline10'>
          <label>Gênero:</label>
          <select onChange={(e) => setGenderFilter(e.target.value)}>
            <option value="">Todos</option>
            <option value="M">Masculino</option>
            <option value="F">Feminino</option>
          </select>
        </div>
        <div  className='margin-inline10'>
          <label>Idioma:</label>
          <select onChange={(e) => setLanguageFilter(e.target.value)}>
            <option value="">Todos</option>
            {uniqueLanguages.map((language) => (
              <option key={language} value={language}>
                {language}
              </option>
            ))}
          </select>
        </div>
        <div className="margin-inline10">
          <label>Mês de aniversário:</label>
          <select onChange={(e) => setMonthFilter(e.target.value)}>
            <option value="">Todos</option>
            {uniqueMonths.map((month) => (
              <option key={month} value={month}>
                {new Date(0, month - 1).toLocaleString('pt-BR', { month: 'long' })}
              </option>
            ))}
          </select>
        </div>
        <div  className='margin-inline10'>
          <label>Idade:</label>
          <select onChange={(e) => setAgeFilter(e.target.value)}>
            <option value="">Todas</option>
            <option value="18-25">18-25</option>
            <option value="26-40">26-40</option>
            <option value="41-55">41-55</option>
            <option value="56+">56+</option>
          </select>
        </div>
      </div>
        <button onClick={handleFilter} className='btn-green'>Aplicar Filtros</button>
    </div>
  );
};
Filter.propTypes = {
    onFilter: PropTypes.object.isRequired, 
  };

export default Filter;
