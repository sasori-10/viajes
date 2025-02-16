import styles from "./MachuPicchuContent.module.css"
import MachuPicchuTren from "./imageTourMachuPicchu/Machu-Picchu-min.webp"
import MachuPicchuBus from "./imageTourMachuPicchu/Machupicchu-Bus.webp"
import CaminoInca from "./imageTourMachuPicchu/Chachabamba-camino-inca.webp"
import { FaAnglesRight } from "react-icons/fa6"
import { Link } from "react-router-dom"
import { useTranslation } from 'react-i18next';

export const TourMachu = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }
    return (
        <div className={styles.fullScreenDiv}>
            <div className={styles.content1}>
                <div className={styles.seccionContent}>
                    <div className={styles.texto}>
                        <h3 className={styles.title}>{t("navBar.MachuPicchuTitle.subcategories.SoloMachuPicchu.name")}</h3>
                        <ul>
                            <li>
                                <Link className={styles.packageLink} to="/machu-picchu-tren">
                                    {t("navBar.MachuPicchuTitle.subcategories.SoloMachuPicchu.tours.tour1")}
                                    <FaAnglesRight className={styles.packageLinkIcon} />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.imageContainer}>
                        <img
                            src={MachuPicchuTren}
                            alt="Machu Picchu en Tren"
                            className={styles.image}
                        />
                    </div>
                </div>
            </div>
            <div className={styles.content2}>
                <div className={styles.seccionContent}>
                    <div className={styles.texto}>
                        <ul>
                            <li>
                                <Link className={styles.packageLink} to="/machu-picchu-bus">
                                    {t("navBar.MachuPicchuTitle.subcategories.SoloMachuPicchu.tours.tour2")}
                                    <FaAnglesRight className={styles.packageLinkIcon} />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.imageContainer}>
                        <img
                            src={MachuPicchuBus}
                            alt="Machu Picchu en Bus"
                            className={styles.image}
                        />
                    </div>
                </div>
            </div>
            <div className={styles.content3}>
                <div className={styles.seccionContent}>
                    <div className={styles.texto}>
                        <h3 className={styles.title}>{t("navBar.MachuPicchuTitle.subcategories.MachuPicchuCaminoInca.name")}</h3>
                        <ul>
                            <li>
                                <Link className={styles.packageLink} to="/camino-inca">
                                    {t("navBar.MachuPicchuTitle.subcategories.MachuPicchuCaminoInca.tours.tour1")}
                                    <FaAnglesRight className={styles.packageLinkIcon} />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.imageContainer}>
                        <img
                            src={CaminoInca}
                            alt="Camino Inca"
                            className={styles.image}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}