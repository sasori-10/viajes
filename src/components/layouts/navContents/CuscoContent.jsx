import { FaAnglesRight } from "react-icons/fa6";
import PlazaCusco from "./imageTourCusco/Plaza-Cusco.webp";
import MontanaColores from "./imageTourCusco/rainbow-mountain.webp";
import styles from "./CuscoContent.module.css";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

export const CuscoContent = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }
    return (
        <div className={styles.fullWidthDiv}>
            {/* Paquetes Clásicos de Cusco */}
            <div className={styles.horizontalDiv}>
                <div className={styles.horizontalDivContent}>
                    <div className={styles.textDiv}>
                        <h3 className={styles.title}>{t("navBar.CuscoTours.subcategories.PaquetesClasicos.name")}</h3>
                        <ul>
                            <li>
                                <Link className={styles.packageLink} to="/cusco-explendor">
                                    {t("navBar.CuscoTours.subcategories.PaquetesClasicos.tours.tour1")}
                                    <FaAnglesRight className={styles.packageLinkIcon} />
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.packageLink} to="/cusco-clasico">
                                    {t("navBar.CuscoTours.subcategories.PaquetesClasicos.tours.tour2")}
                                    <FaAnglesRight className={styles.packageLinkIcon} />
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.packageLink} to="/cusco-incaico">
                                    {t("navBar.CuscoTours.subcategories.PaquetesClasicos.tours.tour3")}
                                    <FaAnglesRight className={styles.packageLinkIcon} />
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.packageLink} to="/cusco-incaico-puno">
                                    {t("navBar.CuscoTours.subcategories.PaquetesClasicos.tours.tour4")}
                                    <FaAnglesRight className={styles.packageLinkIcon} />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.imageDiv}>
                        <img
                            src={PlazaCusco}
                            alt="Vista nocturna de la Plaza de armas del Cusco"
                            className={styles.image}
                        />
                    </div>
                </div>
            </div>

            {/* Aventura en los Andes */}
            <div className={styles.horizontalDiv}>
                <div className={styles.horizontalDivContent}>
                    <div className={`${styles.textDiv} secondTextDiv`}>
                        <h3 className={styles.title}>{t("navBar.CuscoTours.subcategories.AventuraAndes.name")}</h3>
                        <ul className={styles.specialClass}>
                            <li>
                                <Link className={styles.packageLink} to="/cusco-aventurero">
                                    {t("navBar.CuscoTours.subcategories.AventuraAndes.tours.tour1")}
                                    <FaAnglesRight className={styles.packageLinkIcon} />
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.packageLink} to="/cusco-aventurero-vinicunca">
                                    {t("navBar.CuscoTours.subcategories.AventuraAndes.tours.tour2")}
                                    <FaAnglesRight className={styles.packageLinkIcon} />
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.packageLink} to="/cusco-imperial">
                                    {t("navBar.CuscoTours.subcategories.AventuraAndes.tours.tour3")}
                                    <FaAnglesRight className={styles.packageLinkIcon} />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.imageDiv}>
                        <img
                            src={MontanaColores}
                            alt="Vista panorámica Montaña de colores"
                            className={styles.image}
                        />
                    </div>
                </div>
            </div>

            {/* Experiencias Únicas - Full Day */}
            <div className={styles.horizontalDiv}>
                <div className={styles.textDiv}>
                    <h3 className={styles.title}>{t("navBar.CuscoTours.subcategories.ExperienciasUnicas.name")}</h3>
                    <ul>
                        <li>
                            <Link className={styles.packageLink} to="/montana-colores">
                                {t("navBar.CuscoTours.subcategories.ExperienciasUnicas.tours.tour1")}
                                <FaAnglesRight className={styles.packageLinkIcon} />
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.packageLink} to="/laguna-humantay">
                                {t("navBar.CuscoTours.subcategories.ExperienciasUnicas.tours.tour2")}
                                <FaAnglesRight className={styles.packageLinkIcon} />
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.packageLink} to="/7-lagunas-ausangate">
                                {t("navBar.CuscoTours.subcategories.ExperienciasUnicas.tours.tour3")}
                                <FaAnglesRight className={styles.packageLinkIcon} />
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.packageLink} to="/palcoyo">
                                {t("navBar.CuscoTours.subcategories.ExperienciasUnicas.tours.tour4")}
                                <FaAnglesRight className={styles.packageLinkIcon} />
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.packageLink} to="/tour-cuatrimotos-valle-sagrado">
                                {t("navBar.CuscoTours.subcategories.ExperienciasUnicas.tours.tour5")}
                                <FaAnglesRight className={styles.packageLinkIcon} />
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.packageLink} to="/zip-line-chincheros">
                                {t("navBar.CuscoTours.subcategories.ExperienciasUnicas.tours.tour6")}
                                <FaAnglesRight className={styles.packageLinkIcon} />
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.packageLink} to="/parapente-valle-sagrado">
                                {t("navBar.CuscoTours.subcategories.ExperienciasUnicas.tours.tour7")}
                                <FaAnglesRight className={styles.packageLinkIcon} />
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.packageLink} to="/canotaje-vilcanota">
                                {t("navBar.CuscoTours.subcategories.ExperienciasUnicas.tours.tour8")}
                                <FaAnglesRight className={styles.packageLinkIcon} />
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.packageLink} to="/queswachaca-4lagunas">
                                {t("navBar.CuscoTours.subcategories.ExperienciasUnicas.tours.tour9")}
                                <FaAnglesRight className={styles.packageLinkIcon} />
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.packageLink} to="/waqrapukara">
                                {t("navBar.CuscoTours.subcategories.ExperienciasUnicas.tours.tour10")}
                                <FaAnglesRight className={styles.packageLinkIcon} />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};