export const getSchemaAboutUs = (lang) => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Machupicchu by World",
    "url": "https://machupicchubyworld.com",
    "logo": "https://machupicchubyworld.com/logo.png",
    "description": lang === "es"
        ? "Machupicchu By World es una agencia de viajes con sede en Cusco, especializada en turismo sostenible y experiencias inolvidables. Ofrecemos tours nacionales e internacionales con un enfoque en la comodidad, seguridad y calidad."
        : "Machupicchu By World is a travel agency based in Cusco, specializing in sustainable tourism and unforgettable experiences. We offer national and international tours focused on comfort, safety, and quality.",
    "foundingDate": "2019",
    "founders": [{
        "@type": "Person",
        "name": "Luis Ángel Rondan Cueva"
    }],
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Cusco",
        "addressCountry": "PE"
    },
    "sameAs": [
        "https://www.facebook.com/machupicchubyworld",
        "https://www.instagram.com/MachuPicchuByWorld",
        "https://www.tripadvisor.com/Attraction_Review-g294314-d25362001-Reviews-Machupicchu_by_World-Cusco_Cusco_Region.html",
        "https://www.tiktok.com/@machupicchubyworld"
    ],
    "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+51 973 310 752",
        "contactType": "customer service",
        "availableLanguage": ["Spanish", "English"]
    }
});
export const getSchemaLicenses = (lang) => ({
    "@context": "https://schema.org",
    "@type": "GovernmentPermit",
    "name": lang === "es" ? "Nuestras Licencias" : "Our Licenses",
    "description": lang === "es"
        ? "En Machu Picchu by World, contamos con todas las certificaciones y licencias necesarias para operar legalmente y garantizar un servicio seguro y confiable."
        : "At Machu Picchu by World, we have all the necessary certifications and licenses to operate legally and ensure a safe and reliable service.",
    "issuedBy": {
        "@type": "GovernmentOrganization",
        "name": "Municipalidad de Cusco"
    },
    "permitType": [
        {
            "@type": "Permit",
            "name": "Certificado emitido por GERCETUR",
            "description": "Licencia oficial otorgada por GERCETUR a Machu Picchu by World Travel Agency."
        },
        {
            "@type": "Permit",
            "name": "Certificado de Inspección Técnica",
            "description": "Certificado de Inspección Técnica emitido por la Municipalidad de Cusco."
        },
        {
            "@type": "Permit",
            "name": "Registro de RUC - SUNAT",
            "description": "Certificado de Información Registrada (CIR) - Datos oficiales de SUNAT."
        },
        {
            "@type": "Permit",
            "name": "Licencia de Funcionamiento",
            "description": "Licencia operativa emitida por la Municipalidad de Cusco."
        }
    ],
    "url": "https://machupicchubyworld.com/our-licenses"
});
export const getSchemaTerms = (lang) => ({
    "@context": "https://schema.org",
    "@type": "TermsOfService",
    "name": lang === "es" ? "Términos y Condiciones" : "Terms and Conditions",
    "description": lang === "es"
        ? "Consulta nuestras políticas y normas para garantizar una experiencia de viaje segura y sin inconvenientes."
        : "Check our policies and regulations to ensure a safe and smooth travel experience.",
    "url": "https://machupicchubyworld.com/terms-conditions",
    "provider": {
        "@type": "TravelAgency",
        "name": "Machu Picchu by World",
        "url": "https://machupicchubyworld.com"
    },
    "offers": {
        "@type": "Offer",
        "name": lang === "es" ? "Servicios turísticos" : "Tourism Services",
        "description": lang === "es"
            ? "Tours y experiencias únicas en Machu Picchu y otras regiones de Perú."
            : "Tours and unique experiences in Machu Picchu and other regions of Peru."
    },
    "termsOfService": [
        {
            "@type": "Text",
            "name": lang === "es" ? "Reservaciones" : "Reservations",
            "description": lang === "es"
                ? "Para confirmar una reserva, se requiere un pago inicial del 50% del precio total del servicio."
                : "To confirm a reservation, an initial payment of 50% of the total service price is required."
        },
        {
            "@type": "Text",
            "name": lang === "es" ? "Pagos y Tarifas" : "Payments and Fees",
            "description": lang === "es"
                ? "Las tarifas están sujetas a modificaciones y los pagos con tarjeta tienen un cargo del 6%."
                : "Rates are subject to changes, and credit card payments have a 6% fee."
        },
        {
            "@type": "Text",
            "name": lang === "es" ? "Cancelaciones y Modificaciones" : "Cancellations and Modifications",
            "description": lang === "es"
                ? "No hay reembolsos por cancelaciones y modificaciones de fecha pueden tener penalidad del 5%."
                : "No refunds for cancellations, and date modifications may have a 5% penalty."
        },
        {
            "@type": "Text",
            "name": lang === "es" ? "Responsabilidades" : "Responsibilities",
            "description": lang === "es"
                ? "La agencia garantiza el cumplimiento del 100% de los servicios contratados. En casos fortuitos, no se hace responsable por eventos fuera de su control."
                : "The agency guarantees 100% fulfillment of contracted services. In unforeseen cases, it is not responsible for events beyond its control."
        }
    ]
});
