import { useState } from 'react'

function MovieCard({ pelicula, onComprar }) {
    const [mostrarHorarios, setMostrarHorarios] = useState(false)

    return (
        <div className="movie-card">
            <div className="movie-poster" style={{ background: pelicula.color }}>
                <span style={{ fontSize: '4rem', zIndex: 1 }}>{pelicula.emoji}</span>
            </div>
            <div className="movie-info">
                <h3 className="movie-title">{pelicula.titulo}</h3>
                <p className="movie-genre">{pelicula.genero}</p>

                <button
                    className="btn-toggle-horarios"
                    onClick={() => setMostrarHorarios(!mostrarHorarios)}
                >
                    {mostrarHorarios ? '▲ Ocultar Horarios' : '▼ Ver Horarios'}
                </button>

                {mostrarHorarios && (
                    <div className="movie-schedule">
                        {pelicula.horarios.map((horario, i) => (
                            <span key={i} className="schedule-tag">{horario}</span>
                        ))}
                    </div>
                )}

                <button className="btn btn-primary" onClick={() => onComprar(pelicula)}>
                    Comprar Boletos
                </button>
            </div>
        </div>
    )
}

export default MovieCard
