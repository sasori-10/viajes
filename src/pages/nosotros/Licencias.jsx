import portada from "./componentsLicencias/portada.webp"
import VistaDocument from "./componentsLicencias/VistaDocument"
import { BannerText } from "./componentsNosotros/BannerText"
//Importando imagenes de las licencias de la empresa
import LicenciaGercetur from "./componentsLicencias/ImageLicencias/CONSTANCIA-GERCETUR.jpg"
import InspeccionTecnica from "./componentsLicencias/ImageLicencias/CERTIFICADO-DE-INSPECCION-TECNICA.jpg"
import FichaRuc from "./componentsLicencias/ImageLicencias/Ficha-Ruc.jpg"
import LicenciaFuncionamiento from "./componentsLicencias/ImageLicencias/Licencia-de-Funcionamiento-MACHUPICCHU-BY-WORLD.jpg"
import styles from "./Licencias.module.css"
import { HomeRazon } from "../../components/layouts/HomeRazon"
import { HomeInstituciones } from "../../components/layouts/HomeInstituciones"
import { useTranslation } from 'react-i18next';
//importando el seo dinamico
import { Helmet } from "react-helmet-async";
import { getSchemaLicenses } from "../../seo/schema/nosotrosTours"

export const Licencias = () => {
    const { t, i18n } = useTranslation('aboutUs');

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }
    const seoData = t("ourLicenses.seo", { returnObjects: true });
    const schemaData = getSchemaLicenses(i18n.language)
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
            <BannerText src={portada} titulo={t('ourLicenses.title')} subtitulo={t('ourLicenses.subtitle')} />
            <div className={styles.LicenciasContent}>
                <div className={styles.LicenciaGercetur}>
                    <VistaDocument titulo={t('ourLicenses.text1.name')} src={LicenciaGercetur} alt={t('ourLicenses.text1.alt')} />
                </div>
                <div className={styles.InspeccionTecnica}>
                    <VistaDocument titulo={t('ourLicenses.text2.name')} src={InspeccionTecnica} alt={t('ourLicenses.text2.alt')} />
                </div>
                <div className={styles.FichaRuc}>
                    <VistaDocument titulo={t('ourLicenses.text3.name')} src={FichaRuc} alt={t('ourLicenses.text3.alt')} />
                </div>
                <div className={styles.LicenciaFuncionamiento}>
                    <VistaDocument titulo={t('ourLicenses.text4.name')} src={LicenciaFuncionamiento} alt={t('ourLicenses.text4.alt')} />
                </div>
            </div>
            <div className={styles.NosotrosRazon}>
                <HomeRazon />
            </div>
            <HomeInstituciones />
        </>
    )
}
