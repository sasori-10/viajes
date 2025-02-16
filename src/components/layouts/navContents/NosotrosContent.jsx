import styles from "./NosotrosContent.module.css"
import { FaAnglesRight } from "react-icons/fa6"
import { Link } from "react-router-dom"
import { useTranslation } from 'react-i18next';

export const NosotrosContent = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }
    return (
        <div className={styles.fullScreenDiv}>
            <div className={styles.NosotrosContent}>
                <div className={styles.content1}>
                    <div className={styles.texto}>
                        <ul>
                            <li>
                                <Link className={styles.packageLink} to="/about-us">
                                    {/* Acerca De Nosotros */}
                                    {t("navBar.NosotrosTitle.subcategories.SobreNosotros.name")}
                                    <FaAnglesRight className={styles.packageLinkIcon} />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.content2}>
                    <div className={styles.texto}>
                        <ul>
                            <li>
                                <Link className={styles.packageLink} to="/our-licenses">
                                    {t("navBar.NosotrosTitle.subcategories.Licencias.name")}
                                    <FaAnglesRight className={styles.packageLinkIcon} />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.content3}>
                    <div className={styles.texto}>
                        <ul>
                            <li>
                                <Link className={styles.packageLink} to="/terms-conditions">
                                    {t("navBar.NosotrosTitle.subcategories.TerminosCondiciones.name")}
                                    <FaAnglesRight className={styles.packageLinkIcon} />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}