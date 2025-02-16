import PropTypes from 'prop-types';
import styles from './Extra.module.css'
import { FaCheck } from "react-icons/fa";
//importando la traduccion
import { useTranslation } from 'react-i18next';

const Extra = ({ lista }) => {
  const { t, i18n } = useTranslation('fixed');

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }
  return (
    <div className={styles.Extra}>
      <h3 className={styles.ExtraTitulo}>{t('menuInfo.extra')}</h3>
      <ul>
        {lista.map((servicio, index) => (
          <li className={styles.ExtraLine} key={index}><FaCheck className={styles.IconCheck} style={{
            marginTop: '3px', fontSize: '18px', marginRight: '10px', color: '#62B01D'
          }} /><span>{servicio}</span></li>
        ))}
      </ul>
    </div>
  );
};

// Validación de PropTypes
Extra.propTypes = {
  lista: PropTypes.arrayOf(PropTypes.string),
};

export default Extra;
