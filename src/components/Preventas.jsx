import { useNavigate } from 'react-router-dom'

// Vista informativa: Preventas
// Este componente muestra información sobre los próximos estrenos y preventas.
function Preventas() {
    const navigate = useNavigate()

    return (
        <section className="vista-info">
            <button className="btn-volver" onClick={() => navigate('/')}>← Volver al inicio</button>

            <h1 className="vista-titulo">Preventas</h1>

            <div className="vista-contenido">
                <div className="vista-bloque">
                    <h2>¿Qué son las Preventas?</h2>
                    <p>
                        Las preventas de Cinemex te permiten asegurar tus boletos para los
                        estrenos más esperados antes de que lleguen a cartelera. Sé de los
                        primeros en ver las películas más anticipadas del año y elige los
                        mejores asientos.
                    </p>
                </div>

                <div className="vista-bloque">
                    <h2>Próximos Estrenos</h2>
                    <div className="preventas-grid">
                        <div className="preventa-item">
                            <span className="preventa-emoji">🦸</span>
                            <h3>Avengers: Secret Wars</h3>
                            <p className="preventa-fecha">📅 Mayo 2026</p>
                            <p>La batalla definitiva del multiverso Marvel. Los héroes más poderosos se unen para enfrentar la amenaza más grande jamás vista.</p>
                        </div>
                        <div className="preventa-item">
                            <span className="preventa-emoji">🧙</span>
                            <h3>El Señor de los Anillos: La Guerra de Rohirrim</h3>
                            <p className="preventa-fecha">📅 Junio 2026</p>
                            <p>La historia animada de Helm Hammerhand, el legendario rey de Rohan, y la épica batalla que dio nombre al Abismo de Helm.</p>
                        </div>
                        <div className="preventa-item">
                            <span className="preventa-emoji">🏎️</span>
                            <h3>Rápidos y Furiosos 11</h3>
                            <p className="preventa-fecha">📅 Julio 2026</p>
                            <p>Dom Toretto y su familia enfrentan su última misión. Más acción, más velocidad y un final épico para la saga.</p>
                        </div>
                        <div className="preventa-item">
                            <span className="preventa-emoji">🧟</span>
                            <h3>28 Años Después</h3>
                            <p className="preventa-fecha">📅 Agosto 2026</p>
                            <p>La secuela de la icónica película de terror. Décadas después del brote original, el virus regresa con más fuerza que nunca.</p>
                        </div>
                    </div>
                </div>

                <div className="vista-bloque">
                    <h2>Beneficios de la Preventa</h2>
                    <ul>
                        <li><strong>Asientos garantizados:</strong> Elige los mejores lugares antes que nadie.</li>
                        <li><strong>Funciones exclusivas:</strong> Accede a funciones de preestreno y eventos especiales.</li>
                        <li><strong>Promociones especiales:</strong> Descuentos y combos exclusivos al comprar en preventa.</li>
                        <li><strong>Experiencia VIP:</strong> Funciones midnight y maratones temáticos con otros fans.</li>
                    </ul>
                </div>

                <div className="vista-bloque">
                    <h2>¿Cómo Comprar en Preventa?</h2>
                    <p>
                        1. Visita nuestra página web o la app de Cinemex.<br />
                        2. Selecciona la película en preventa que deseas ver.<br />
                        3. Elige tu cine, formato de sala y horario preferido.<br />
                        4. Selecciona tus asientos y realiza tu pago.<br />
                        5. ¡Listo! Recibirás tu confirmación por correo electrónico.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Preventas
