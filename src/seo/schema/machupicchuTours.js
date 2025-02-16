export const getHomeSchema = (lang) => ({
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": lang === "es" ? "Bienvenido a Machupicchu By World" : "Welcome to Machupicchu By World",
    "description": lang === "es"
        ? "Descubre la magia de Machu Picchu y otros destinos increíbles con nuestra agencia de viajes."
        : "Discover the magic of Machu Picchu and other incredible destinations with our travel agency.",
    "url": "https://machupicchubyworld.com",
    "mainEntityOfPage": {
        "@type": "WebPage",
        "url": "https://machupicchubyworld.com/"
    },
    "publisher": {
        "@type": "Organization",
        "name": "Machupicchu By World",
        "url": "https://machupicchubyworld.com"
    }
});

export const getSchemaMachuPicchuTren = (lang) => ({
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": lang === "es" ? "Machu Picchu por Tren" : "Machu Picchu by Train",
    "description": lang === "es"
        ? "Explora Machu Picchu en un viaje en tren con todo incluido."
        : "Explore Machu Picchu on an all-inclusive train trip.",
    "touristType": "Adventure Travel",
    "provider": {
        "@type": "TravelAgency",
        "name": "Machupicchu By World",
        "url": "https://machupicchubyworld.com"
    }
});

export const getSchemaMachuPicchuBus = (lang) => ({
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": lang === "es" ? "Machu Picchu por Bus" : "Machu Picchu by Bus",
    "description": lang === "es"
        ? "Vive una experiencia única con el tour Machu Picchu por Bus. Incluye transporte seguro, guías certificados y recorrido por el Valle Sagrado."
        : "Experience a unique journey with the Machu Picchu by Bus tour. Includes safe transport, certified guides, and a Sacred Valley tour.",
    "touristType": "Adventure Travel",
    "provider": {
        "@type": "TravelAgency",
        "name": "Machupicchu By World",
        "url": "https://machupicchubyworld.com"
    }
});

export const getSchemaCaminoInca = (lang) => ({
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": lang === "es" ? "Camino Inca - 2 Días / 1 Noche" : "Inca Trail - 2 Days / 1 Night",
    "description": lang === "es"
        ? "Recorre el legendario Camino Inca en una aventura de 2 días y 1 noche hasta Machu Picchu. Disfruta de paisajes impresionantes, ruinas ancestrales y guías expertos."
        : "Hike the legendary Inca Trail on a 2-day, 1-night adventure to Machu Picchu. Experience stunning landscapes, ancient ruins, and expert-guided tours.",
    "touristType": "Adventure Travel",
    "provider": {
        "@type": "TravelAgency",
        "name": "Machupicchu By World",
        "url": "https://machupicchubyworld.com"
    }
});
