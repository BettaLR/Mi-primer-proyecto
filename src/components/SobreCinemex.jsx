import { useNavigate } from 'react-router-dom'

// Vista informativa: Sobre Cinemex
function SobreCinemex() {
    const navigate = useNavigate()

    return (
        <section className="vista-info">
            <button className="btn-volver" onClick={() => navigate('/')}>← Volver al inicio</button>

            <h1 className="vista-titulo">Sobre Cinemex</h1>

            <div className="vista-contenido">
                <div className="vista-bloque">
                    <h2>¿Quiénes somos?</h2>
                    <p>
                        Cinemex es una de las cadenas de cines más importantes de México,
                        fundada en 1995. Con más de 300 complejos cinematográficos en todo
                        el país, nos dedicamos a ofrecer la mejor experiencia de
                        entretenimiento para nuestros visitantes.
                    </p>
                </div>

                <div className="vista-bloque">
                    <h2>Nuestra Misión</h2>
                    <p>
                        Proveer experiencias de entretenimiento inolvidables a través de
                        la exhibición de películas con la mejor tecnología, servicio al
                        cliente excepcional y un ambiente cómodo y moderno.
                    </p>
                </div>

                <div className="vista-bloque">
                    <h2>Nuestra Visión</h2>
                    <p>
                        Ser la cadena de cines líder en México y Latinoamérica, reconocida
                        por la innovación tecnológica, la calidad de nuestro servicio y el
                        compromiso con la comunidad cinematográfica.
                    </p>
                </div>

                <div className="vista-bloque">
                    <h2>Formatos de Exhibición</h2>
                    <p>
                        Contamos con una variedad de formatos para todos los gustos:
                    </p>
                    <ul>
                        <li><strong>IMAX:</strong> La pantalla más grande con sonido envolvente de 12 canales para una experiencia inmersiva única.</li>
                        <li><strong>4DX:</strong> Asientos con movimiento, viento, lluvia, niebla y aromas sincronizados con la película.</li>
                        <li><strong>Sala Platino:</strong> Asientos reclinables tipo cama, servicio de alimentos gourmet directo a tu asiento y atención premium.</li>
                        <li><strong>Sala Tradicional:</strong> La experiencia clásica de cine con proyección digital de alta calidad y sonido Dolby.</li>
                        <li><strong>Macro XE:</strong> Pantallas extra grandes con tecnología de proyección láser y audio Dolby Atmos.</li>
                    </ul>
                </div>

                <div className="vista-bloque">
                    <h2>Datos de Contacto</h2>
                    <p>
                        <strong>Atención telefónica:</strong> 55 5257-6969<br />
                        <strong>Horario:</strong> Lunes a Domingo, 10:00 AM - 10:00 PM<br />
                        <strong>Correo:</strong> contacto@cinemex.com<br />
                        <strong>Sitio web:</strong> www.cinemex.com
                    </p>
                </div>
            </div>
        </section>
    )
}

export default SobreCinemex
