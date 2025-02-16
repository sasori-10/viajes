import styles from './ItinerarioCompleto.module.css';
import { MdOutlineCheckCircle } from "react-icons/md";
import { FiXCircle } from "react-icons/fi";
import PropTypes from 'prop-types';
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { useTranslation } from 'react-i18next';

const ItinerarioCompleto = ({ itinerario = [] }) => {
    const { t, i18n } = useTranslation('fixed');
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }

    // Estado para controlar qué sección está abierta
    const [openSection, setOpenSection] = useState({ incluye: null, noIncluye: null });

    const toggleIncluye = (index) => {
        setOpenSection(prevState => ({
            ...prevState,
            incluye: prevState.incluye === index ? null : index,
            noIncluye: null // Cierra la sección "No Incluye" al abrir "Incluye"
        }));
    };

    const toggleNoIncluye = (index) => {
        setOpenSection(prevState => ({
            ...prevState,
            noIncluye: prevState.noIncluye === index ? null : index,
            incluye: null // Cierra la sección "Incluye" al abrir "No Incluye"
        }));
    };

    if (itinerario.length === 0) {
        return <p>No hay información disponible sobre los días del tour.</p>;
    }

    return (
        <div className={styles.ItinerarioCompletoPrincipal}>
            <h2 className={styles.ItinerarioCompletoTituloPrincipal}>{t('menuInfo.itinerario.name')}</h2>
            {itinerario.map(({ dia, titulo, descripcion = [], incluye = [], noIncluye = [] }, index) => (
                <div className={styles.ItinerarioCompletoContent} key={index}>
                    <div className={styles.ItinerarioCompletoTitulo}>
                        <h3 className={styles.IconDay}>{t('menuInfo.itinerario.day')} {dia}</h3>
                        {titulo && <p className={styles.ItinerarioCompletoSubtitulo}>{titulo}</p>}
                    </div>
                    {/* Texto del itinerario */}
                    {descripcion.length > 0 && (
                        <div className={styles.ItinerarioCompletoText}>
                            <ul>
                                {descripcion.map((texto, textIndex) => (
                                    <li className={styles.ItinerarioLista} key={textIndex}>
                                        <ReactMarkdown
                                            children={texto}
                                            rehypePlugins={[rehypeRaw]}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {/* Incluye */}
                    <div className={styles.BotonDesplegable}>
                        {incluye.length > 0 && (
                            <div className={styles.ItinerarioCompletoIncluye}>
                                <button
                                    className={styles.TituloIncluye}
                                    onClick={() => toggleIncluye(index)}
                                    style={{ backgroundColor: openSection.incluye === index ? '#F5F5F5' : 'transparent' }}
                                >
                                    {t('menuInfo.itinerario.incluye')} <FaChevronDown />
                                </button>
                                {openSection.incluye === index && (
                                    <ul className={styles.ListaIncluye}>
                                        {incluye.map((item, includeIndex) => (
                                            <li key={includeIndex}>
                                                <MdOutlineCheckCircle style={{ color: "#2DCC70", marginRight: "0.5rem" }} />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        )}
                        {/*---------------------------------- No Incluye */}
                        {noIncluye.length > 0 && (
                            <div className={styles.ItinerarioCompletoNoIncluye}>
                                <button
                                    className={styles.TituloIncluye}
                                    onClick={() => toggleNoIncluye(index)}
                                >
                                    {t('menuInfo.itinerario.noIncluye')} <FaChevronDown />
                                </button>
                                {openSection.noIncluye === index && (
                                    <ul className={styles.ListaIncluye}>
                                        {noIncluye.map((item, excludeIndex) => (
                                            <li key={excludeIndex}>
                                                <FiXCircle style={{ color: "#ED1B24", marginRight: "0.5rem" }} />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        )}
                    </div>
                    <div className={styles.ItinerarioCompletoSeparador}></div>
                </div>
            ))}
        </div>
    );
};

ItinerarioCompleto.propTypes = {
    itinerario: PropTypes.arrayOf(
        PropTypes.shape({
            dia: PropTypes.number.isRequired,
            titulo: PropTypes.string,
            descripcion: PropTypes.arrayOf(PropTypes.string),
            incluye: PropTypes.arrayOf(PropTypes.string),
            noIncluye: PropTypes.arrayOf(PropTypes.string),
        })
    ),
};

export default ItinerarioCompleto;
export { ItinerarioCompleto };
