// Importo useState para manejar si los horarios están visibles o no
import { useState } from 'react'

// MovieCard recibe 2 PROPS desde App.jsx:
// - pelicula: un OBJETO con los datos de la película (titulo, genero, emoji, color, horarios)
// - onComprar: una FUNCIÓN que al ejecutarla guarda la película seleccionada en el estado de App.jsx
//              (internamente es setPeliculaSeleccionada)
function MovieCard({ pelicula, onComprar }) {
    // Estado local para mostrar/ocultar los horarios de esta película en particular
    const [mostrarHorarios, setMostrarHorarios] = useState(false)

    return (
        <div className="movie-card">
            {/* Póster de la película: uso style={{}} para aplicar el color de fondo dinámicamente.
                Los dobles {{ }} son porque: el externo es JSX, el interno es el objeto de estilos CSS */}
            <div className="movie-poster" style={{ background: pelicula.color }}>
                {/* Accedo a pelicula.emoji — esto es gracias a la PROP "pelicula" que recibí */}
                <span style={{ fontSize: '4rem', zIndex: 1 }}>{pelicula.emoji}</span>
            </div>
            <div className="movie-info">
                {/* Muestro el título y género accediendo a las propiedades del objeto pelicula */}
                <h3 className="movie-title">{pelicula.titulo}</h3>
                <p className="movie-genre">{pelicula.genero}</p>

                {/* Botón toggle para mostrar/ocultar horarios.
                    El texto del botón cambia según el estado con un ternario:
                    si mostrarHorarios es true → "Ocultar", si es false → "Ver" */}
                <button
                    className="btn-toggle-horarios"
                    onClick={() => setMostrarHorarios(!mostrarHorarios)}
                >
                    {mostrarHorarios ? '▲ Ocultar Horarios' : '▼ Ver Horarios'}
                </button>

                {/* Renderizado condicional: solo muestro los horarios si mostrarHorarios es true */}
                {mostrarHorarios && (
                    <div className="movie-schedule">
                        {/* Recorro el arreglo pelicula.horarios con .map()
                            y por cada horario creo un tag/etiqueta */}
                        {pelicula.horarios.map((horario, i) => (
                            <span key={i} className="schedule-tag">{horario}</span>
                        ))}
                    </div>
                )}

                {/* Botón "Comprar Boletos":
                    Al hacer clic, ejecuto onComprar(pelicula).
                    onComprar es una PROP que me pasaron desde App.jsx — internamente es
                    setPeliculaSeleccionada, así que al ejecutarla le digo a App.jsx:
                    "Oye, el usuario quiere comprar ESTA película" → y App.jsx abre el formulario */}
                <button className="btn btn-primary" onClick={() => onComprar(pelicula)}>
                    Comprar Boletos
                </button>
            </div>
        </div>
    )
}

export default MovieCard
