import styles from "./Perucontent.module.css";
import { FaAnglesRight } from "react-icons/fa6";
import BoteTarapoto from "./imageTourPeru/Bote-Tarapoto_.webp";
import IslaUros from "./imageTourPeru/Isla-de-Uros.webp";
import CatedralArequipa from "./imageTourPeru/catedral-arequipa.webp";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

export const PeruContent = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }
    return (
        <div className={styles.fullWidthDiv}>
            <div className={styles.horizontalDiv}>
                <div className={styles.textDiv}>
                    <h3 className={styles.title}>TARAPOTO</h3>
                    <ul>
                        <li>
                            <Link className={styles.packageLink} to="/tarapoto-4d-3n">
                                {t("navBar.PeruTitle.subcategories.Tarapoto.tours.tour1")}
                                <FaAnglesRight className={styles.packageLinkIcon} />
                            </Link>
                            <Link className={styles.packageLink} to="/tarapoto-5d-4n">
                                {t("navBar.PeruTitle.subcategories.Tarapoto.tours.tour2")}
                                <FaAnglesRight className={styles.packageLinkIcon} />
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.imageDiv}>
                    <img src={BoteTarapoto} alt="Vista panorámica del lago en Tarapoto" />
                </div>
            </div>

            <div className={styles.horizontalDiv}>
                <div className={styles.textDiv}>
                    <h3 className={styles.title}>AREQUIPA</h3>
                    <ul>
                        <li>
                            <Link className={styles.packageLink} to="/arequipa-5d-4n">
                                {t("navBar.PeruTitle.subcategories.Arequipa.tours.tour1")}
                                <FaAnglesRight className={styles.packageLinkIcon} />
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.packageLink} to="/arequipa-6d-5n">
                                {t("navBar.PeruTitle.subcategories.Arequipa.tours.tour2")}
                                <FaAnglesRight className={styles.packageLinkIcon} />
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.imageDiv}>
                    <img src={CatedralArequipa} alt="Vista panorámica de la catedral de Arequipa" />
                </div>
            </div>

            <div className={styles.horizontalDiv}>
                <div className={styles.textDiv}>
                    <h3 className={styles.title}>PUNO</h3>
                    <ul>
                        <li>
                            <Link className={styles.packageLink} to="/puno-4d-3n">
                                {t("navBar.PeruTitle.subcategories.Puno.tours.tour1")}
                                <FaAnglesRight className={styles.packageLinkIcon} />
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.packageLink} to="/puno-5d-4n">
                                {t("navBar.PeruTitle.subcategories.Puno.tours.tour2")}
                                <FaAnglesRight className={styles.packageLinkIcon} />
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.imageDiv}>
                    <img src={IslaUros} alt="Vista panorámica de la Isla de Uros - Puno" />
                </div>
            </div>
        </div>
    );
}