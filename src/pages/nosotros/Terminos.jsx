import portada from "./componentsTerminos/portada.webp"
import { BannerText } from "./componentsNosotros/BannerText"
//Importando imagenes de las licencias de la empresa
import styles from "./Terminos.module.css"
import { HomeRazon } from "../../components/layouts/HomeRazon"
import { HomeInstituciones } from "../../components/layouts/HomeInstituciones"
import { useTranslation } from 'react-i18next';
//importando el seo dinamico
import { Helmet } from "react-helmet-async";
import { getSchemaTerms } from "../../seo/schema/nosotrosTours"

export const Terminos = () => {
    const { t, i18n } = useTranslation('aboutUs');

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }
    const seoData = t("terminos.seo", { returnObjects: true });
    const schemaData = getSchemaTerms(i18n.language)
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
            <BannerText src={portada} titulo={t('terminos.title')} subtitulo={t('terminos.subtitle')} />
            <div className={styles.TerminosContent}>
                <h1 className={styles.TerminosTitulo}>{t('terminos.title')}</h1>
                <ol className={styles.TerminosList}>
                    <li>{t('terminos.listContent.list1')}</li>
                    <li>{t('terminos.listContent.list2')}</li>
                    <li>{t('terminos.listContent.list3')}</li>
                    <li>{t('terminos.listContent.list4')}</li>
                    <li>{t('terminos.listContent.list5')}</li>
                    <li>{t('terminos.listContent.list6')}</li>
                    <li>{t('terminos.listContent.list7')}</li>
                    <li>{t('terminos.listContent.list8')}</li>
                    <li>{t('terminos.listContent.list9')}</li>
                    <li>{t('terminos.listContent.list10')}</li>
                    <li>{t('terminos.listContent.list11')}</li>
                    <li>{t('terminos.listContent.list12')}</li>
                    <li>{t('terminos.listContent.list13')}</li>
                    <li>{t('terminos.listContent.list14')}</li>
                    <li>{t('terminos.listContent.list15')}</li>
                    <li>{t('terminos.listContent.list16')}</li>
                    <li>{t('terminos.listContent.list17')}</li>
                </ol>
            </div>
            <div className={styles.NosotrosRazon}>
                <HomeRazon />
            </div>
            <HomeInstituciones />
        </>
    )
}
