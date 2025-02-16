import styles from "./InternacionalContent.module.css";  // Importamos los estilos como un objeto
import { FaAnglesRight } from "react-icons/fa6";
/* import Brazil from "./imageTourInternacional/Brazil.webp" */
import Colombia from './imageTourInternacional/Colombia.webp'
import SalarUyuni from "./imageTourInternacional/salar-de-uyuni.webp";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

export const InternacionalContent = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }
    return (
        <div className={styles.fullWidthDiv}>
            <div className={styles.horizontalDiv}>
                <div className={styles.horizontalDivContent}>
                    <div className={styles.textDiv}>
                        <h3 className={styles.title}>COLOMBIA</h3>
                        <ul>
                            <li>
                                <Link className={styles.packageLink} to="/medellin-5d-4n">
                                    {t("navBar.InternationalTitle.subcategories.Colombia.tours.tour1")}
                                    <FaAnglesRight className={styles.packageLinkIcon} />
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.packageLink} to="/cartagena-4d-3n">
                                    {t("navBar.InternationalTitle.subcategories.Colombia.tours.tour2")}
                                    <FaAnglesRight className={styles.packageLinkIcon} />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.imageDiv}>
                        <img src={Colombia} alt="Vista panorámica de la Piedra del Peñon" />
                    </div>
                </div>
            </div>
            <div className={styles.horizontalDiv}>
                <div className={styles.horizontalDivContent}>
                    <div className={styles.textDiv}>
                        <h3 className={styles.title}>BOLIVIA</h3>
                        <ul>
                            <li>
                                <Link className={styles.packageLink} to="/salar-de-uyuni-full-day">
                                    {t("navBar.InternationalTitle.subcategories.Bolivia.tours.tour1")}
                                    <FaAnglesRight className={styles.packageLinkIcon} />
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.packageLink} to="/ica-nazca-cusco-puno-bolivia-la-paz-salar-de-uyuni-13d-12n">
                                    {t("navBar.InternationalTitle.subcategories.Bolivia.tours.tour2")}
                                    <FaAnglesRight className={styles.packageLinkIcon} />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.imageDiv}>
                        <img src={SalarUyuni} alt="Vista panorámica del Salar de Uyuni" />
                    </div>
                </div>
            </div>
        </div>
    );
}