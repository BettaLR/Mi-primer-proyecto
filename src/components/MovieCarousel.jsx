// Importo Swiper y SwiperSlide de la librería swiper/react
// Swiper es el contenedor del carrusel, SwiperSlide es cada "tarjeta" individual
import { Swiper, SwiperSlide } from "swiper/react"

// Módulo de navegación para habilitar las flechas (< >) en el carrusel
import { Navigation } from "swiper/modules"

// Estilos base de Swiper (necesarios para que funcione correctamente)
import "swiper/css"
import "swiper/css/navigation"

// Importo mi componente MovieCard para reutilizarlo dentro de cada slide
import MovieCard from "./MovieCard"

// MovieCarousel recibe 2 PROPS:
// - movies: arreglo de películas a mostrar en el carrusel
// - onComprar: función para manejar la compra (se la paso a cada MovieCard)
function MovieCarousel({ movies, onComprar }) {
    return (
        <Swiper
            modules={[Navigation]}
            navigation
            slidesPerView={4}
            spaceBetween={10}
            breakpoints={{
                // Responsive: en pantallas pequeñas muestro menos slides
                0: { slidesPerView: 1 },
                480: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
            }}
        >
            {movies.map((movie, i) => (
                <SwiperSlide key={movie.id || i}>
                    <MovieCard
                        pelicula={movie}
                        onComprar={onComprar}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default MovieCarousel
