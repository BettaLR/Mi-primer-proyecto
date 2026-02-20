import { useState, useEffect } from 'react'

function HeroBanner({ peliculas, onComprar }) {
    const [indice, setIndice] = useState(0)
    const [animando, setAnimando] = useState(false)

    // Cambia la película cada cierto tiempo
    useEffect(() => {
        if (peliculas.length === 0) return
        const timer = setInterval(() => {
            cambiarPelicula((prev) => (prev + 1) % peliculas.length)
        }, 15000)
        return () => clearInterval(timer)
    }, [peliculas])

    const cambiarPelicula = (nuevoIndice) => {
        setAnimando(true)
        setTimeout(() => {
            if (typeof nuevoIndice === 'function') {
                setIndice(nuevoIndice)
            } else {
                setIndice(nuevoIndice)
            }
            setTimeout(() => setAnimando(false), 50)
        }, 400)
    }

    if (!peliculas || peliculas.length === 0) return null

    const pelicula = peliculas[indice]

    return (
        <section className="hero" style={{ background: pelicula.color }}>
            <div className="hero-overlay"></div>
            <div className={`hero-content ${animando ? 'hero-slide-out' : 'hero-slide-in'}`}>
                <div className="hero-poster" style={{ background: pelicula.color }}>
                    <span className="hero-poster-emoji">{pelicula.emoji}</span>
                </div>
                <div className="hero-info">
                    <span className="hero-badge">⭐ DESTACADA DE LA SEMANA</span>
                    <h1 className="hero-title">{pelicula.titulo}</h1>
                    <p className="hero-genre">{pelicula.genero}</p>
                    <div className="hero-actions">
                        <button className="btn btn-primary" onClick={() => onComprar(pelicula)}>
                            Comprar boletos
                        </button>
                        <button className="btn btn-outline">Ver tráiler</button>
                    </div>
                </div>
            </div>
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
