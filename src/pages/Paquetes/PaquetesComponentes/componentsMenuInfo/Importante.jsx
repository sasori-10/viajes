import PropTypes from 'prop-types';
import styles from './Importante.module.css'
import { MdLabelImportant } from "react-icons/md";
//importando la traduccion
import { useTranslation } from 'react-i18next';

const Importante = ({ lista }) => {
  const { t, i18n } = useTranslation('fixed');

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }
  return (
    <div className={styles.Important}>
      <h3 className={styles.ImportantTitulo}>{t('menuInfo.important')}</h3>
      <ul>
        {lista.map((servicio, index) => (
          <li className={styles.ImportantLine} key={index}><MdLabelImportant style={{
            marginTop: '3px', fontSize: '20px', marginRight: '10px', color: '#FDC318'
          }} /><span>{servicio}</span></li>
        ))}
      </ul>
    </div>
  );
};

// Validación de PropTypes
Importante.propTypes = {
  lista: PropTypes.arrayOf(PropTypes.string),
};

export default Importante;

