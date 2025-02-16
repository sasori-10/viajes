import styles from "./Trekking.module.css";  // Importamos los estilos como un objeto
import { FaAnglesRight } from "react-icons/fa6";
import Salkantay from "./imageTrekking/salkantay.webp"
import CaminoInca from "./imageTrekking/caminoInca.webp"
import IncaJungle from "./imageTrekking/incaJungle.webp"
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

export const TrekkingContent = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }
    return (
        <div className={styles.fullWidthDiv}>
            <div className={styles.horizontalDiv}>
                <div className={styles.horizontalDivContent}>
                    <div className={styles.textDiv}>
                        <h3 className={styles.title}>SALKANTAY TREK</h3>
                        <ul>
                            <li>
                                <Link className={styles.packageLink} to="/salkantay-4d-3n">
                                    {/* Salkantay Trek (4 Días / 3 Noches) */}
                                    {t("navBar.TrekkingTitle.subcategories.SalkantayTrek.tours.tour1")}
                                    <FaAnglesRight className={styles.packageLinkIcon} />
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.packageLink} to="/salkantay-5d-4n">
                                    {t("navBar.TrekkingTitle.subcategories.SalkantayTrek.tours.tour2")}
                                    <FaAnglesRight className={styles.packageLinkIcon} />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.imageDiv}>
                        <img src={Salkantay} alt="Vista panorámica de la montaña Salkantay" />
                    </div>
                </div>
            </div>

            <div className={styles.horizontalDiv}>
                <div className={styles.horizontalDivContent}>
                    <div className={styles.textDiv}>
                        <h3 className={styles.title}>{t("navBar.TrekkingTitle.subcategories.CaminoInca.name")}</h3>
                        <ul>
                            <li>
                                <Link className={styles.packageLink} to="/inka-trail-2d-1n">
                                    {t("navBar.TrekkingTitle.subcategories.CaminoInca.tours.tour1")}
                                    <FaAnglesRight className={styles.packageLinkIcon} />
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.packageLink} to="/inka-trail-4d-3n">
                                    {t("navBar.TrekkingTitle.subcategories.CaminoInca.tours.tour2")}
                                    <FaAnglesRight className={styles.packageLinkIcon} />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.imageDiv}>
                        <img src={CaminoInca} />
                    </div>
                </div>
            </div>

            <div className={styles.horizontalDiv}>
                <div className={styles.horizontalDivContent}>
                    <div className={styles.textDiv}>
                        <h3 className={styles.title}>INCA JUNGLE TREK</h3>
                        <ul>
                            <li>
                                <Link className={styles.packageLink} to="/inka-jungle-4d-3n">
                                    {t("navBar.TrekkingTitle.subcategories.IncaJungleTrek.tours.tour1")}
                                    <FaAnglesRight className={styles.packageLinkIcon} />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.imageDiv}>
                        <img src={IncaJungle} alt="Vista panorámica de un camino del la ciudadela de Machu Picchu" />
                    </div>
                </div>
            </div>
        </div>
    );
}