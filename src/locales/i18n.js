import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
//importando la seccion en ingles
import HomeEn from './en/HomeEn.json'
import AboutUsEn from './en/AboutUsEn.json'
//importando la seccion en espanol
import HomeEs from './es/Home.json'
import AboutUsEs from './es/AboutUs.json'
//importando la seccion de paquetes turisticos 
import MachuPicchuToursEs from './es/MachuPicchuTours.json'
import MachuPicchuToursEn from './en/MachuPicchuToursEn.json'
//importando las secciones fijas del layout de los paquetes 
import FixedEs from "./es/Fixed.json"
import FixedEn from "./en/FixedEn.json"
//importando traducciones de los paquetes de Cusco
import CuscoToursEs from "./es/CuscoTours.json"
import CuscoToursEn from "./en/CuscoToursEn.json"
//importando traducciones de los full days
import CuscoFullDayEs from "./es/CuscoFullDay.json"
import CuscoFullDayEn from "./en/CuscoFullDayEn.json"
//importando traducciones de los tours en peru
import PeruToursEs from "./es/PeruTours.json"
import PeruToursEn from "./en/PeruToursEn.json"
//importando las traducciones de la seccion de internacionales 
import InterToursEs from "./es/InterTours.json"
import InterToursEn from "./en/InterToursEn.json"
//importando las seccion de trekking
import TrekkingEs from "./es/Trekking.json"
import TrekkingEn from "./en/TrekkingEn.json"


i18n
    .use(initReactI18next) // Conecta i18n con React
    .init({
        resources: {
            en: {
                home: HomeEn,
                aboutUs: AboutUsEn,
                fixed: FixedEn,
                machuPicchuTours: MachuPicchuToursEn,
                cuscoTours: CuscoToursEn,
                cuscoFullDay: CuscoFullDayEn,
                peruTours: PeruToursEn,
                interTours: InterToursEn,
                trekking: TrekkingEn
            },
            es: {
                home: HomeEs,
                aboutUs: AboutUsEs,
                fixed: FixedEs,
                machuPicchuTours: MachuPicchuToursEs,
                cuscoTours: CuscoToursEs,
                cuscoFullDay: CuscoFullDayEs,
                peruTours: PeruToursEs,
                interTours: InterToursEs,
                trekking: TrekkingEs
            },
        },
        lng: 'es',
        fallbackLng: 'en',
        ns: ['home', 'aboutUs', 'fixed', 'machuPicchuTours', 'cuscoTours', 'cuscoFullDay', 'peruTours', 'interTours', 'trekking'],
        defaultNS: 'home',
        interpolation: {
            escapeValue: false,
        },
    });
// Función para cambiar el idioma
const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem('language', language); // Guarda el idioma seleccionado
};

export { changeLanguage };

export default i18n;
