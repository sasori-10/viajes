import PropTypes from 'prop-types';
import styles from './Incluye.module.css';
import { FaCheckCircle } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";

export const Incluye = ({ lista = { incluye: [], noIncluye: [] } }) => {
  // Verificamos que lista tenga las propiedades necesarias
  const incluyeItems = lista?.incluye ?? [];
  const noIncluyeItems = lista?.noIncluye ?? [];

  return (
    <div className={styles.contenedor}>
      {/* INCLUYE */}
      <div className={styles.item}>
        <h3 className={styles.titulo}>NUESTROS SERVICIOS INCLUYEN</h3>
        <ul className={styles.lista}>
          {incluyeItems.length > 0 ? (
            incluyeItems.map((item, index) => (
              <li key={index} className={styles.itemIncluye}>
                <FaCheckCircle className={styles.icono}/>{item}
              </li>
            ))
          ) : (
            <li className={styles.itemIncluye}>No hay elementos incluidos</li>
          )}
        </ul>
      </div>

      {/* NO INCLUYE */}
      <div className={styles.item}>
        <h3 className={styles.titulo}>NUESTROS SERVICIOS NO INCLUYEN</h3>
        <ul className={styles.lista}>
          {noIncluyeItems.length > 0 ? (
            noIncluyeItems.map((item, index) => (
              <li key={index} className={styles.itemNoIncluye}>
                <IoMdCloseCircle style={{fontSize:'24px', marginRight:'10px', color:'#F70000'
                }}/>{item}
              </li>
            ))
          ) : (
            <li className={styles.itemNoIncluye}>No hay elementos excluidos</li>
          )}
        </ul>
      </div>
    </div>
  );
};

// PropTypes para validar las propiedades
Incluye.propTypes = {
  lista: PropTypes.shape({
    incluye: PropTypes.arrayOf(PropTypes.string).isRequired,
    noIncluye: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
};
