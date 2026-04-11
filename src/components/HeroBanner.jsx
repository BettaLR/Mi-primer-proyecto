// Importo useState y useEffect porque este componente tiene:
// - Estado local (para controlar qué película se muestra en el carrusel y la animación)
// - Un efecto (para cambiar automáticamente la película cada 15 segundos)
import { useState, useEffect } from 'react'

// HeroBanner recibe 2 PROPS:
// - peliculas: el arreglo de películas para mostrar en el carrusel
// - onComprar: la función setPeliculaSeleccionada que viene de App.jsx
function HeroBanner({ peliculas, onComprar }) {
    // Estado para saber qué película estoy mostrando actualmente (su posición/índice en el arreglo)
    const [indice, setIndice] = useState(0)
    // Estado para controlar la animación de transición entre películas
    const [animando, setAnimando] = useState(false)

    // useEffect para el carrusel automático:
    // Cada 15 segundos cambia a la siguiente película automáticamente.
    // Es como un setInterval que se limpia (clearInterval) cuando el componente se desmonta.
    useEffect(() => {
        if (peliculas.length === 0) return // Si no hay películas, no hago nada
        const timer = setInterval(() => {
            // Cambio a la siguiente película. Uso el módulo (%) para volver al inicio
            // cuando llego al final. Ej: si hay 5 películas, 4+1 = 5, 5 % 5 = 0 (vuelve al inicio)
            cambiarPelicula((prev) => (prev + 1) % peliculas.length)
        }, 15000) // 15000ms = 15 segundos
        // Función de limpieza: se ejecuta cuando el componente se desmonta o peliculas cambia
        return () => clearInterval(timer)
    }, [peliculas]) // Se re-ejecuta si el arreglo de películas cambia

    // Función para cambiar la película con animación suave
    const cambiarPelicula = (nuevoIndice) => {
        setAnimando(true) // Activo la animación de salida
        setTimeout(() => {
            // Después de 400ms (la duración de la animación de salida), cambio el índice
            if (typeof nuevoIndice === 'function') {
                setIndice(nuevoIndice) // Si es función, la paso directamente a setIndice
            } else {
                setIndice(nuevoIndice) // Si es número, lo pongo directamente
            }
            // 50ms después, desactivo la animación para que entre la nueva película suavemente
            setTimeout(() => setAnimando(false), 50)
        }, 400)
    }

    // Si no hay películas todavía (están cargando), no renderizo nada
    if (!peliculas || peliculas.length === 0) return null

    // Obtengo la película actual según el índice
    const pelicula = peliculas[indice]

    return (
        // El fondo del hero cambia dinámicamente al color de la película actual
        <section className="hero" style={{ background: pelicula.color }}>
            <div className="hero-overlay"></div>
            {/* Aplico clases CSS de animación según el estado:
                - hero-slide-out: cuando está animando (sale la película actual)
                - hero-slide-in: cuando terminó de animar (entra la nueva película) */}
            <div className={`hero-content ${animando ? 'hero-slide-out' : 'hero-slide-in'}`}>
                <div className="hero-poster" style={{ background: pelicula.color }}>
                    <span className="hero-poster-emoji">{pelicula.emoji}</span>
                </div>
                <div className="hero-info">
                    <span className="hero-badge">⭐ DESTACADA DE LA SEMANA</span>
                    <h1 className="hero-title">{pelicula.titulo}</h1>
                    <p className="hero-genre">{pelicula.genero}</p>
                    <div className="hero-actions">
                        {/* Al hacer clic en "Comprar boletos", ejecuto la prop onComprar
                            pasándole la película actual — esto abre el FormularioCompra en App.jsx */}
                        <button className="btn btn-primary" onClick={() => onComprar(pelicula)}>
                            Comprar boletos
                        </button>
                        <button className="btn btn-outline">Ver tráiler</button>
                    </div>
                </div>
            </div>
            {/* Puntos indicadores (dots) del carrusel.
                Por cada película creo un puntito. El que corresponde a la película actual
                tiene la clase 'active' para que se vea diferente */}
            <div className="hero-dots">
                {peliculas.map((_, i) => (
                    <span
                        key={i}
                        className={`dot ${i === indice ? 'active' : ''}`}
                        onClick={() => { if (i !== indice) cambiarPelicula(i) }}
                    ></span>
                ))}
            </div>
        </section>
    )
}

export default HeroBanner
