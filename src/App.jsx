import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './MainLayout';
import { HomePrincipal } from './pages/home/HomePrincipal';
import { MachuPicchuTren } from './pages/Paquetes/TourMachuPicchu/MachuPicchuTren';
import { MachuPicchuBus } from './pages/Paquetes/TourMachuPicchu/MachuPicchuBus';
import { CaminoInca } from './pages/Paquetes/TourMachuPicchu/CaminoInca';
import { CuscoClasico } from './pages/Paquetes/TourCusco/CuscoClasico';
import { CuscoAventurero } from './pages/Paquetes/TourCusco/CuscoAventurero';
import { CuscoAventureroVinicunca } from './pages/Paquetes/TourCusco/CuscoAventureroVinicunca';
import { CuscoImperial } from './pages/Paquetes/TourCusco/CuscoImperial';
import { CuscoIncaico } from './pages/Paquetes/TourCusco/CuscoIncaico';
import { CuscoIncaicoPuno } from './pages/Paquetes/TourCusco/CuscoIncaicoPuno';
import { MontanaColores } from './pages/Paquetes/TourCusco/MontanaColores';
import { LagunaHumantay } from './pages/Paquetes/TourCusco/LagunaHumantay';
import { Ausangate } from './pages/Paquetes/TourCusco/Ausangate';
import { Palcoyoc } from './pages/Paquetes/TourCusco/Palcoyoc';
import { TourCuatrimotos } from './pages/Paquetes/TourCusco/Cuatrimotos';
import { ZipLineChincheros } from './pages/Paquetes/TourCusco/ZipLineChincheros';
import { Nosotros } from './pages/nosotros/Nosotros';
import { Licencias } from './pages/nosotros/Licencias';
import { Terminos } from './pages/nosotros/Terminos';
import { CuscoExplendor } from './pages/Paquetes/TourCusco/CuscoExplendor';
import { ParapenteValleSagrado } from './pages/Paquetes/TourCusco/ParapenteValleSagrado';
import { Canotaje } from './pages/Paquetes/TourCusco/Canotaje';
import { Queswachaca } from './pages/Paquetes/TourCusco/Queswachaca';
import { Waqrapukara } from './pages/Paquetes/TourCusco/Waqrapukara';
import { TarapotoClasico } from './pages/Paquetes/TourPeru/TarapotoClasico';
import { Arequipa5dias } from './pages/Paquetes/TourPeru/Arequipa-5dias';
import { Arequipa6dias } from './pages/Paquetes/TourPeru/Arequipa-6dias';
import { Tarapoto5dias } from './pages/Paquetes/TourPeru/Tarapoto-5dias';
import { PunoMagico } from './pages/Paquetes/TourPeru/PunoMagico';
import { Puno5dias } from './pages/Paquetes/TourPeru/Puno5dias';
import { Medellin } from './pages/Paquetes/TourInternacionales/Medellin';
import { Cartagena } from './pages/Paquetes/TourInternacionales/Cartagena';
import { SalarDeUyuni } from './pages/Paquetes/TourInternacionales/UyuniFullDay';
import { Tour13dias } from './pages/Paquetes/TourInternacionales/Tour-13dias';
import { Salkantay4dias } from './pages/Paquetes/TourTrekking/Salkantay4dias';
import { Salkantay5dias } from './pages/Paquetes/TourTrekking/Salkantay5dias';
import { InkaTrail2dias } from './pages/Paquetes/TourTrekking/InkaTrail2dias';
import { InkaTrail4dias } from './pages/Paquetes/TourTrekking/InkaTrail4dias';
import { InkaJungle } from './pages/Paquetes/TourTrekking/InkaJungle';
import { WhatsappButton } from './pages/home/componentsHome/WhatsappButton';
//importando el seo dinamico
import { HelmetProvider } from "react-helmet-async";

export const App = () => {
    return (
        <HelmetProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainLayout />}>
                        <Route index element={<HomePrincipal />} />
                        {/* Rutas para los paquetes turísticos en machu picchu*/}
                        <Route path="machu-picchu-tren" element={<MachuPicchuTren />} />
                        {/* Fin de zona de pruebas */}
                        <Route path="machu-picchu-bus" element={<MachuPicchuBus />} />
                        <Route path="camino-inca" element={<CaminoInca />} />
                        {/* Rutas para los paquetes en cusco */}
                        <Route path='cusco-explendor' element={<CuscoExplendor />} />
                        <Route path='cusco-clasico' element={<CuscoClasico />} />
                        <Route path='cusco-aventurero' element={<CuscoAventurero />} />
                        <Route path='cusco-aventurero-vinicunca' element={<CuscoAventureroVinicunca />} />
                        <Route path='cusco-imperial' element={<CuscoImperial />} />
                        <Route path='cusco-incaico' element={<CuscoIncaico />} />
                        <Route path='cusco-incaico-puno' element={<CuscoIncaicoPuno />} />
                        <Route path='montana-colores' element={<MontanaColores />} />
                        <Route path='laguna-humantay' element={<LagunaHumantay />} />
                        <Route path='7-lagunas-ausangate' element={<Ausangate />} />
                        <Route path='palcoyo' element={<Palcoyoc />} />
                        <Route path='tour-cuatrimotos-valle-sagrado' element={<TourCuatrimotos />} />
                        <Route path='zip-line-chincheros' element={<ZipLineChincheros />} />
                        <Route path='parapente-valle-sagrado' element={<ParapenteValleSagrado />} />
                        <Route path='canotaje-vilcanota' element={<Canotaje />} />
                        <Route path='queswachaca-4lagunas' element={<Queswachaca />} />
                        <Route path='waqrapukara' element={<Waqrapukara />} />
                        {/* Seccion de tours Peru */}
                        <Route path='tarapoto-4d-3n' element={<TarapotoClasico />} />
                        <Route path='tarapoto-5d-4n' element={<Tarapoto5dias />} />
                        <Route path='arequipa-5d-4n' element={<Arequipa5dias />} />
                        <Route path='arequipa-6d-5n' element={<Arequipa6dias />} />
                        <Route path='puno-4d-3n' element={<PunoMagico />} />
                        <Route path='puno-5d-4n' element={<Puno5dias />} />
                        {/*Seccion internacionales */}
                        <Route path='medellin-5d-4n' element={<Medellin />} />
                        <Route path='cartagena-4d-3n' element={<Cartagena />} />
                        <Route path='salar-de-uyuni-full-day' element={<SalarDeUyuni />} />
                        <Route path='ica-nazca-cusco-puno-bolivia-la-paz-salar-de-uyuni-13d-12n' element={<Tour13dias />} />
                        {/* Seccion de trekking */}
                        <Route path='salkantay-4d-3n' element={<Salkantay4dias />} />
                        <Route path='salkantay-5d-4n' element={<Salkantay5dias />} />
                        <Route path='inka-trail-2d-1n' element={<InkaTrail2dias />} />
                        <Route path='inka-trail-4d-3n' element={<InkaTrail4dias />} />
                        <Route path='inka-jungle-4d-3n' element={<InkaJungle />} />
                        {/* Seccion de sobre nosotros */}
                        <Route path='about-us' element={<Nosotros />} />
                        <Route path='our-licenses' element={<Licencias />} />
                        <Route path='terms-conditions' element={<Terminos />} />
                    </Route>
                </Routes>
                <WhatsappButton />
            </BrowserRouter>
        </HelmetProvider>
    );
};
