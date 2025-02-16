import PropTypes from 'prop-types';
import styles from './QueLlevar.module.css'
import { FaRegCheckCircle } from "react-icons/fa";
//importando la traduccion
import { useTranslation } from 'react-i18next';

const QueLlevar = ({ lista }) => {
  const { t, i18n } = useTranslation('fixed');

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }
  return (
    <div className={styles.QueLlevar}>
      <h3 className={styles.QueLlevarTitulo}>{t('menuInfo.queLlevar')}</h3>
      <ul>
        {lista.map((servicio, index) => (
          <li className={styles.QueLlevarLine} key={index}><FaRegCheckCircle className={styles.iconCheck} style={{
            marginTop: '3px', fontSize: '18px', marginRight: '10px', color: '#62B01D'
          }} /><span>{servicio}</span></li>
        ))}
      </ul>
    </div>
  );
};

// Validación de PropTypes
QueLlevar.propTypes = {
  lista: PropTypes.arrayOf(PropTypes.string),
};

export default QueLlevar;