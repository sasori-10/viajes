import { useTranslation } from 'react-i18next';
import logo from '../../assets/images/logo-color-2.webp';
import { BsFillTelephoneFill } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
// Importar banderas
import flagEs from '../../assets/images/flag-es.svg';
import flagUs from '../../assets/images/flag-us.svg';

export const Header = () => {
    const { t, i18n } = useTranslation();

    const savedLanguage = localStorage.getItem('language') || 'es';
    if (i18n.language !== savedLanguage) {
        i18n.changeLanguage(savedLanguage);
    }

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem('language', lng);
    };
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link to="/">
                    <img src={logo} alt="Logo MachuPicchuByworld" />
                </Link>
            </div>
            <nav>
                <ul className={styles.navLinks}>
                    <li className={styles.headerCorreo}>
                        <a href="mailto:reservasmapibyworld@gmail.com" className={styles.linkCorreo}>
                            <FiMail className={styles.icon} />
                            reservasmapibyworld@gmail.com
                        </a>
                    </li>
                    <li className={styles.headerTelefono}>
                        <a href="https://wa.me/51940842722" className={styles.linkTelefono}>
                            <BsFillTelephoneFill className={styles.icon} />
                            +51 940 842 722
                        </a>
                        <a href="https://wa.me/51973310752" className={styles.linkTelefono}>
                            <BsFillTelephoneFill className={styles.icon} />
                            +51 973 310 752
                        </a>
                    </li>
                </ul>

            </nav>

            {/* Botones para cambiar de idioma */}
            <div className={styles.languageSwitcher}>
                <button onClick={() => changeLanguage('en')} className={styles.languageButton}>
                    <img src={flagUs} alt="United State Flag" className={styles.flagIcon} />English
                </button>
                <button onClick={() => changeLanguage('es')} className={styles.languageButton}>
                    <img src={flagEs} alt="Spanish Flag" className={styles.flagIcon} />Español
                </button>
            </div>
        </header>
    );
};
