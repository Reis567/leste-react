import  { useState } from 'react';
import './Filter.css';
import PropTypes from 'prop-types'; 

const Filter = ({ onFilter }) => {
  const [genderFilter, setGenderFilter] = useState('');
  const [languageFilter, setLanguageFilter] = useState('');
  const [monthFilter, setMonthFilter] = useState('');

  const handleFilter = () => {
    onFilter({
      gender: genderFilter,
      language: languageFilter,
      month: monthFilter,
    });
  };

  return (
    <div className="filter">
      <h2>Filtrar</h2>
      <div className="filters-data">
        <div>
          <label>Gênero:</label>
          <select onChange={(e) => setGenderFilter(e.target.value)}>
            <option value="">All</option>
            <option value="M">Masculino</option>
            <option value="F">Feminino</option>
            <option value="O">Outro</option>
            <option value="N">Prefiro não mencionar</option>
          </select>
        </div>
        <div>
          <label>Language:</label>
          <select onChange={(e) => setLanguageFilter(e.target.value)}>
            <option value="">All</option>
            <option value="Ingles">Inglês</option>
            <option value="Espanhol">Espanhol</option>
            <option value="Mandarim">Mandarim</option>
            <option value="Portugues">Português</option>
            <option value="Italiano">Italiano</option>
          </select>
        </div>
        <div>
          <label>Month of Birthday:</label>
          <select onChange={(e) => setMonthFilter(e.target.value)}>
            <option value="">All</option>
            <option value="1">Janeiro</option>
            <option value="2">Fevereiro</option>
            <option value="3">Março</option>
            <option value="4">Abril</option>
            <option value="5">Maio</option>
            <option value="6">Junho</option>
            <option value="7">Julho</option>
            <option value="8">Agosto</option>
            <option value="9">Setembro</option>
            <option value="10">Outubro</option>
            <option value="11">Novembro</option>
            <option value="12">Dezembro</option>
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
