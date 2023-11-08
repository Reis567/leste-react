import './Resumo.css'
import PropTypes from 'prop-types'; 



const Resumo = ({ contatos }) => {
    // Verifique se contatos está definido antes de calcular as contagens
    if (!contatos) {
      return null;
    }
  
    const countGender = contatos.reduce((acc, contato) => {
      acc[contato.gender] = (acc[contato.gender] || 0) + 1;
      return acc;
    }, {});
  
    const countLanguage = contatos.reduce((acc, contato) => {
      acc[contato.language] = (acc[contato.language] || 0) + 1;
      return acc;
    }, {});
  
    return (
      <div className="resumo">
        <h2>Quantidades</h2>
        <div className='resumos'>

            <div className="resumo-item">
            <h3>Quantidades por gênero</h3>
            <select>

                {Object.keys(countGender).map((gender) => (
                <option key={gender}>
                    {gender} : {countGender[gender]}
                </option>
                ))}
            </select>

            </div>
            <div className="resumo-item">
            <h3>Quantidades por linguagem</h3>
            <select>
                <option value="">Selecione uma linguagem</option>
                {Object.keys(countLanguage).map((language) => (
                <option key={language} value={language}>
                    {language} :  {countLanguage[language]}
                </option>
                ))}
            </select>
            </div>
        </div>
      </div>
    );
  };
Resumo.propTypes = {
    contatos: PropTypes.object.isRequired, 
  };

export default Resumo;
