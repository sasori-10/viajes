import { useEffect } from 'react';

const FacebookWidget = () => {
    useEffect(() => {
        // Carga del SDK de Facebook solo una vez
        if (!window.FB) {
            const script = document.createElement("script");
            script.async = true;
            script.defer = true;
            script.crossOrigin = "anonymous";
            script.src = "https://connect.facebook.net/es_ES/sdk.js#xfbml=1&version=v21.0";
            script.onload = () => {
                if (window.FB) {
                    window.FB.XFBML.parse(); // Renderizar los plugins de Facebook
                }
            };
            document.body.appendChild(script);
        } else {
            // Si ya existe FB, renderiza los plugins
            window.FB.XFBML.parse();
        }
    }, []);

    return (
        <div>
            {/* Este div será el contenedor del widget de la página de Facebook */}
            <div id="fb-root"></div>
            <div
                className="fb-page"
                data-href="https://www.facebook.com/machupicchubyworld"
                data-tabs="timeline"
                data-width="320"
                data-height=""
                data-small-header="false"
                data-adapt-container-width="false"
                data-hide-cover="false"
                data-show-facepile="true"
            >
                <blockquote
                    cite="https://www.facebook.com/machupicchubyworld"
                    className="fb-xfbml-parse-ignore"
                >
                    <a href="https://www.facebook.com/machupicchubyworld">Machupicchu by World</a>
                </blockquote>
            </div>
        </div>
    );
};
export default FacebookWidget;
