import portada from "../nosotros/componentsNosotros/FondosNosotros/portada.webp"
import scroll from "../nosotros/componentsNosotros/FondosNosotros/scroll.webp"
import scroll2 from "../nosotros/componentsNosotros/FondosNosotros/scroll2.webp"
import scroll3 from "../nosotros/componentsNosotros/FondosNosotros/scroll3.webp"
import { BannerText } from "./componentsNosotros/BannerText"
import styles from "./Nosotros.module.css"
import { FcConferenceCall, FcLike } from "react-icons/fc";
import { FcGlobe } from "react-icons/fc";
import { HiBadgeCheck, HiOutlineUserGroup } from "react-icons/hi";
import { FaHeartCircleCheck, FaSquareCheck } from "react-icons/fa6";
import { FaHandshakeSimple } from "react-icons/fa6";
import SobreNosotros from "./componentsNosotros/Equipo/prueba1.jpeg";
import Gerente1 from "./componentsNosotros/Equipo/Luis Ángel Rondan Cueva (Gerente General).jpeg"
import Gerente2 from "./componentsNosotros/Equipo/Noemi Conde Yupanqui (Gerente General).svg"
import ventas1 from "./componentsNosotros/Equipo/Miluska Quispe Gallegos (Jefa de Ventas).svg"
import ventas2 from "./componentsNosotros/Equipo/Alvaro Álvarez Taqquiare(Ejecutivo de Reservas).svg"
import ventas3 from "./componentsNosotros/Equipo/Pilar Alahui Quentasi (Jefa de Ventas).svg"
import ventas4 from "./componentsNosotros/Equipo/Ronald Huanca Palacios (Ejecutivo de Ventas).svg"
import marketing from "./componentsNosotros/Equipo/Jhordan Chacon Guerra (Marketing).svg"
import ScrollFijo from "./componentsNosotros/ScrollFijo";
import { HomeRazon } from "../../components/layouts/HomeRazon";
import { HomeInstituciones } from '../../components/layouts/HomeInstituciones';
import Collage from "./componentsNosotros/Collage"
//importando fotos del primer collage
import collageVertical1 from "./componentsNosotros/NuestroLaborSocial/OurWorkVertical1.jpeg"
import collageVertical2 from "./componentsNosotros/NuestroLaborSocial/OurWorkVertical2.jpeg"
import collageHorizontal2 from "./componentsNosotros/NuestroLaborSocial/OurWorkHorizontal2.jpeg"
import collageHorizontal3 from "./componentsNosotros/NuestroLaborSocial/OurWorkHorizontal3.jpeg"
import collageHorizontal4 from "./componentsNosotros/NuestroLaborSocial/OurWorkHorizontal4.jpeg"
import collageHorizontal5 from "./componentsNosotros/NuestroLaborSocial/OurWorkHorizontal5.jpeg"
import collageHorizontal6 from "./componentsNosotros/NuestroLaborSocial/OurWorkHorizontal6.jpeg"
import TripadvisorReviews from "../home/componentsHome/TripadvisorReviews"
import GoogleReviews from "../home/componentsHome/GoogleReviews"
//implementando las traducciones
import { useTranslation } from 'react-i18next';
//importando el seo dinamico
import { Helmet } from "react-helmet-async";
import { getSchemaAboutUs } from "../../seo/schema/nosotrosTours"

export const Nosotros = () => {
    const { t, i18n } = useTranslation('aboutUs');

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }
    const images = [
        { src: collageHorizontal2, alt: "Foto de los niños de la comunidad de Rosaspata" },
        { src: collageVertical1, alt: "Foto de los animadores de la actividad benefica" },
        { src: collageVertical2, alt: "Foto de niña de la comunidad de Rosaspata" },
        { src: collageHorizontal3, alt: "Foto de pobladores de la comunidad de Rosaspata, junto al equipo de Machu Picchu By World" },
        { src: collageHorizontal4, alt: "Foto de niña de la comunidad de Rosaspata" },
        { src: collageHorizontal5, alt: "Foto de los niños de la comunidad de Rosaspata" },
        { src: collageHorizontal6, alt: "Foto de los niños de la comunidad de Rosaspata" },
    ];
    const seoData = t("aboutUs.seo", { returnObjects: true });
    const schemaData = getSchemaAboutUs(i18n.language)
    return (
        <>
            <Helmet>
                <title>{seoData.title}</title>
                <meta name="description" content={seoData.meta_description} />
                <meta name="keywords" content={seoData.keywords.join(", ")} />
                <link rel="canonical" href={seoData.canonical_url} />

                {/* Open Graph */}
                <meta property="og:title" content={seoData.open_graph.title} />
                <meta property="og:description" content={seoData.open_graph.description} />
                <meta property="og:image" content={seoData.open_graph.image} />
                <meta property="og:url" content={seoData.open_graph.url} />
                <meta property="og:type" content={seoData.open_graph.type} />
                <script type="application/ld+json">
                    {JSON.stringify(schemaData)}
                </script>
            </Helmet>
            <BannerText src={portada} alt={"Imagen panoramica de la ciudad del Cusco"} titulo={t('aboutUs.imageHeader.title')} subtitulo={t('aboutUs.imageHeader.subtitle')} />
            <div className={styles.SobreNosotros}>
                <div className={styles.SobreNosotrosContent}>
                    <div className={styles.contentContainer}>
                        <div className={styles.textSection}>
                            <div className={styles.SobreNosotrosContentTitulo}>
                                <h2 className={styles.titulo}>{t('aboutUs.textSeccion.title')} <br /><span>Machu Picchu by World</span></h2>
                            </div>
                            <p>
                                {t('aboutUs.textSeccion.descripcion')}
                            </p>
                        </div>
                        <div className={styles.imageSection}>
                            <img src={SobreNosotros} alt="Sobre Nosotros" />
                        </div>
                    </div>
                </div>
                <div className={styles.PropositoWrapper}>
                    <div className={styles.Proposito}>
                        <div className={styles.Vision}>
                            <h3><FcConferenceCall className={styles.icon} />{t('aboutUs.values.vision.name')}</h3>
                            <p>
                                {t('aboutUs.values.vision.content1')}
                            </p>
                            <p>
                                {t('aboutUs.values.vision.content2')}
                            </p>
                        </div>
                        <div className={styles.Valores}>
                            <h3><FcLike className={styles.icon} />{t('aboutUs.values.valores.name')}</h3>
                            <p>{t('aboutUs.values.valores.subtitle')}</p>
                            <ul className={styles.listUnstyled}>
                                <li className={styles.ValoresList}><HiBadgeCheck className={styles.ListIcon} />{t('aboutUs.values.valores.text1')}</li>
                                <li className={styles.ValoresList}><HiBadgeCheck className={styles.ListIcon} />{t('aboutUs.values.valores.text2')}</li>
                                <li className={styles.ValoresList}><HiBadgeCheck className={styles.ListIcon} />{t('aboutUs.values.valores.text3')}</li>
                                <li className={styles.ValoresList}><HiBadgeCheck className={styles.ListIcon} />{t('aboutUs.values.valores.text4')}</li>
                                <li className={styles.ValoresList}><HiBadgeCheck className={styles.ListIcon} />{t('aboutUs.values.valores.text5')}</li>
                            </ul>
                        </div>
                        <div className={styles.Mision}>
                            <h3><FcGlobe className={styles.icon} />{t('aboutUs.values.mission.name')}</h3>
                            <p>
                                {t('aboutUs.values.mission.content1')}
                            </p>
                            <p>
                                {t('aboutUs.values.mission.content2')}
                            </p>
                        </div>
                    </div>
                </div>
                <ScrollFijo className={styles.ScrollFijo} imageUrl={scroll} height={"45vh"}>
                    <div className={styles.ScrollContent}>
                        <HiOutlineUserGroup className={styles.iconScroll} />
                        <h1 className={styles.TextoScroll}>{t('aboutUs.scroll1.title')}</h1>
                        <p className={styles.TextoScrollSubtitulo}>{t('aboutUs.scroll1.subtitle')}</p>
                    </div>
                </ScrollFijo>
                <div className={styles.GerenteContainer}>
                    <div className={styles.GerenteImageSection}>
                        <img src={Gerente1} alt={t('aboutUs.team.manager.imageAlt')} />
                    </div>
                    <div className={styles.GerenteTextSection}>
                        <h2 className={styles.GerenteTextSectionTitulo}>LUIS ANGEL RONDAN CUEVA</h2>
                        <h3>{t('aboutUs.team.manager.position')}</h3>
                        <p>
                            {t('aboutUs.team.manager.description')}
                        </p>
                    </div>
                </div>
                <div className={styles.EquipoContent}>
                    <div className={styles.Integrante}>
                        <div className={styles.IntegranteImage}>
                            <img src={Gerente2} alt={t('aboutUs.team.teamMembers.member1.imageAlt')} />
                            <p className={styles.IntegrantePuesto}>{t('aboutUs.team.teamMembers.member1.position')}</p>
                        </div>
                    </div>
                    <div className={styles.Integrante}>
                        <div className={styles.IntegranteImage}>
                            <img src={ventas1} alt={t('aboutUs.team.teamMembers.member2.imageAlt')} />
                            <p className={styles.IntegrantePuesto}>{t('aboutUs.team.teamMembers.member2.position')}</p>
                        </div>
                    </div>
                    <div className={styles.Integrante}>
                        <div className={styles.IntegranteImage}>
                            <img src={ventas2} alt={t('aboutUs.team.teamMembers.member3.imageAlt')} />
                            <p className={styles.IntegrantePuesto}>{t('aboutUs.team.teamMembers.member3.position')}</p>
                        </div>
                    </div>
                    <div className={styles.Integrante}>
                        <div className={styles.IntegranteImage}>
                            <img src={ventas3} alt={t('aboutUs.team.teamMembers.member4.imageAlt')} />
                            <p className={styles.IntegrantePuesto}>{t('aboutUs.team.teamMembers.member4.position')}</p>
                        </div>
                    </div>
                    <div className={styles.Integrante}>
                        <div className={styles.IntegranteImage}>
                            <img src={ventas4} alt={t('aboutUs.team.teamMembers.member5.imageAlt')} />
                            <p className={styles.IntegrantePuesto}>{t('aboutUs.team.teamMembers.member5.position')}</p>
                        </div>
                    </div>
                    <div className={styles.Integrante}>
                        <div className={styles.IntegranteImage}>
                            <img src={marketing} alt={t('aboutUs.team.teamMembers.member6.imageAlt')} />
                            <p className={styles.IntegrantePuesto}>{t('aboutUs.team.teamMembers.member6.position')}</p>
                        </div>
                    </div>
                </div>
                <ScrollFijo height={"45vh"} imageUrl={scroll3}>
                    <div className={styles.ScrollContent}>
                        <FaHandshakeSimple className={styles.iconScroll} />
                        <h1 className={styles.TextoScroll}>"{t('aboutUs.scroll2.title')}</h1>
                        <p className={styles.TextoScrollSubtitulo}>{t('aboutUs.scroll2.subtitle')}</p>
                    </div>
                </ScrollFijo>
                <div className={styles.OurWork}>
                    <div className={styles.OurWorkText}>
                        <h2>"{t('aboutUs.ourWork.title1')}<span> Rosaspata</span>: {t('aboutUs.ourWork.title2')}"</h2>
                        <p>{t('aboutUs.ourWork.subtitle')}</p>
                    </div>
                    <div className={styles.OurWorkCollage}>
                        <Collage images={images} />
                    </div>
                </div>
                <ScrollFijo height={"45vh"} imageUrl={scroll2}>
                    <div className={styles.ScrollContent}>
                        <FaHeartCircleCheck className={styles.iconScroll} />
                        <h1 className={styles.TextoScroll}>{t('aboutUs.scroll3.title')}</h1>
                        <p className={styles.TextoScrollSubtitulo}>{t('aboutUs.scroll3.subtitle')}</p>
                    </div>
                </ScrollFijo>
                <TripadvisorReviews />
                <GoogleReviews />
                <div className={styles.NosotrosRazon}>
                    <HomeRazon />
                </div>
                <HomeInstituciones />
            </div>
        </>
    )
}
