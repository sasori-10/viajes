import logoFooter from "../../assets/images/logo-blanco.webp";
import styles from "./Footer.module.css";
import { LiaFacebookF } from "react-icons/lia";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTikTok } from "react-icons/ai";
import { LiaTripadvisor } from "react-icons/lia";
import ImageFooter from "../../assets/images/footer.png"
import FacebookWidget from "./FacebookWidget";
import PayMethod from "../../assets/images/Metodos-pago-visa.webp"
//implementando las traducciones
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

export const Footer = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }
    return (
        <footer className={styles.footer}>
            <div className={styles.ImgContainer}>
                <img src={ImageFooter} alt={t('footer.imageAlt')} />
            </div>
            <div className={styles.footerContent}>
                <div className={styles.footerPart1}>
                    <div className={styles.logoFooter}>
                        <img src={logoFooter} alt={t('footer.logoAlt')} />
                    </div>
                    <div className={styles.infoFooter}>
                        <div className={styles.footerRazon}>
                            <p className={styles.footerEncabezado}>{t('footer.sections.part1.socialReason.header')}</p>
                            <p>MACHUPICCHU BY WORLD TRAVEL AGENCY E.I.R.L.</p>
                        </div>
                        <div className={styles.footerRuc}>
                            <p className={styles.footerEncabezado}>RUC</p>
                            <p>20609245558</p>
                        </div>
                    </div>
                    <div className={styles.footerFollowUs}>
                        <p className={styles.footerEncabezado}>{t('footer.sections.part1.followUs.header')}</p>
                        <ul className={styles.socialLinks}>
                            <li>
                                <a href="https://www.facebook.com/machupicchubyworld" target="_blank" rel="noopener noreferrer">
                                    <LiaFacebookF className={styles.icon} style={{ color: 'white', fontSize: "45px" }} />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/machupicchubyworld/?hl=es" target="_blank" rel="noopener noreferrer">
                                    <AiOutlineInstagram className={styles.icon} style={{ color: 'white', fontSize: "45px" }} />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.tiktok.com/@machupicchubyworld" target="_blank" rel="noopener noreferrer">
                                    <AiOutlineTikTok className={styles.icon} style={{ color: 'white', fontSize: "45px" }} />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.tripadvisor.com.pe/Attraction_Review-g294314-d25362001-Reviews-Machupicchu_by_World-Cusco_Cusco_Region.html" target="_blank" rel="noopener noreferrer">
                                    <LiaTripadvisor className={styles.icon} style={{ color: 'white', fontSize: "48px" }} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.footerPart2}>
                    <p className={styles.footerEncabezado}>{t('footer.sections.part2.header')}</p>
                    <ul>
                        <li><Link to="/about-us" onClick={() => window.scrollTo(0, 0)}>{t('footer.sections.part2.links.text1')}</Link></li>
                        <li><Link to="/about-us" onClick={() => window.scrollTo(0, 0)}>{t('footer.sections.part2.links.text2')}</Link></li>
                        <li><Link to="/our-licenses" onClick={() => window.scrollTo(0, 0)}>{t('footer.sections.part2.links.text3')}</Link></li>
                        <li><Link to="/terms-conditions" onClick={() => window.scrollTo(0, 0)}>{t('footer.sections.part2.links.text4')}</Link></li>
                    </ul>
                    <img className={styles.ImagePayMethod} src={PayMethod} alt="Métodos de pago" />
                </div>
                <div className={styles.footerPart3}>
                    <div className={styles.contactenosInfo}>
                        <p className={styles.footerEncabezado}>{t('footer.sections.part3.header')}</p>
                        <ul>
                            <li><a href="https://maps.app.goo.gl/1QJKzwduBC5dZizM8" target="_blank">{t('footer.sections.part3.contactInfo.text1')}</a></li>
                            <li>{t('footer.sections.part3.contactInfo.text2')} </li>
                            <li>{t('footer.sections.part3.contactInfo.text3')} </li>
                            <li>{t('footer.sections.part3.contactInfo.text4')}<br />{t('footer.sections.part3.contactInfo.text5')}</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.footerPart4}>
                    <div className={styles.informacionUtilInfo}>
                        <FacebookWidget className={styles.facebookWidget} />
                    </div>
                </div>
            </div>
            <div className={styles.copyrightContent}>
                <hr className={styles.footerLine} />
                <p className={styles.copyrightText}>{t('footer.copyright.text')}</p>
            </div>
        </footer>
    );
};
