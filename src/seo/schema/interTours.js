export const getSchemaMedellin = (lang) => ({
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": lang === "es" ? "MEDELLÍN" : "MEDELLÍN 5 DAYS",
    "description": lang === "es"
        ? "Explora Medellín y sus alrededores en 5 días, visitando lugares icónicos como la Comuna 13, la Plaza de Botero, el Parque Explora y pintorescos pueblos como Guatapé y Santa Fe de Antioquia."
        : "Explore Medellín and its surroundings in 5 days, visiting iconic places like Comuna 13, Plaza de Botero, Parque Explora, and picturesque towns like Guatapé and Santa Fe de Antioquia.",
    "touristType": ["Cultural Travel", "Nature Travel", "Adventure Travel"],
    "provider": {
        "@type": "TravelAgency",
        "name": "Machupicchu By World",
        "url": "https://machupicchubyworld.com"
    }
});
export const getSchemaCartagena = (lang) => ({
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": lang === "es" ? "CARTAGENA" : "CARTAGENA 4 DAYS",
    "description": lang === "es"
        ? "Descubre Cartagena en 4 días, explorando su colorido centro histórico, la Playa Blanca, las Salinas Rosadas y el Volcán del Totumo. Vive la magia de las Islas del Rosario y disfruta de sus playas."
        : "Discover Cartagena in 4 days, exploring its colorful historic center, Playa Blanca, the Pink Salt Flats, and Totumo Volcano. Experience the magic of the Rosario Islands and enjoy their beaches.",
    "touristType": ["Beach Vacation", "Cultural Travel", "Nature Travel"],
    "provider": {
        "@type": "TravelAgency",
        "name": "Machupicchu By World",
        "url": "https://machupicchubyworld.com"
    }
});
export const getSchemaUyuni = (lang) => ({
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": lang === "es" ? "SALAR DE UYUNI - BOLIVIA" : "SALAR DE UYUNI - BOLIVIA FULL DAY",
    "description": lang === "es"
        ? "Disfruta de un día completo en el Salar de Uyuni, explorando lugares icónicos como la Escalera al Cielo, la Isla Incahuasi y el Cementerio de Trenes, con almuerzo y un atardecer único."
        : "Enjoy a full day at the Uyuni Salt Flats, exploring iconic places like the Stairway to Heaven, Incahuasi Island, and the Train Cemetery, with lunch and a unique sunset.",
    "touristType": ["Nature Travel", "Adventure Travel", "Photography Tour"],
    "provider": {
        "@type": "TravelAgency",
        "name": "Machupicchu By World",
        "url": "https://machupicchubyworld.com"
    }
});
export const getSchema13Dias = (lang) => ({
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": lang === "es" ? "Ica, Nazca, Cusco, Puno, Bolivia - La Paz, Salar De Uyuni" : "Ica, Nazca, Cusco, Puno, Bolivia - La Paz, Salar De Uyuni 13 Days",
    "description": lang === "es"
        ? "¡Vive 13 días de aventura por Perú y Bolivia! Desde Lima hasta Machupicchu, pasando por el desierto de Ica, las líneas de Nazca, el Valle Sagrado, la Laguna Humantay y el Salar de Uyuni."
        : "Live 13 days of adventure through Peru and Bolivia! From Lima to Machu Picchu, passing by the Ica desert, Nazca lines, Sacred Valley, Humantay Lagoon, and Uyuni Salt Flats.",
    "touristType": ["Cultural Travel", "Nature Travel", "Adventure Tour"],
    "provider": {
        "@type": "TravelAgency",
        "name": "Machupicchu By World",
        "url": "https://machupicchubyworld.com"
    }
});
