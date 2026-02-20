import { useState, useEffect } from 'react'
import './App.css'

// Componentes
import Header from './components/Header'
import HeroBanner from './components/HeroBanner'
import MovieCard from './components/MovieCard'
import FoodCard from './components/FoodCard'
import Carrito from './components/Carrito'
import FormularioCompra from './components/FormularioCompra'
import PromoCard from './components/PromoCard'
import Footer from './components/Footer'

function App() {
  // Estado para datos dinámicos (fetch -> desde JSON)
  const [peliculas, setPeliculas] = useState([])
  const [bebidas, setBebidas] = useState([])
  const [comestibles, setComestibles] = useState([])
  const [snacks, setSnacks] = useState([])
  const [otrosItems, setOtrosItems] = useState([])

  // Estado para interacciones dinámicas
  const [carrito, setCarrito] = useState([])
  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null)

  // useEffect — Carga de datos desde archivos JSON externos
  useEffect(() => {
    fetch('/peliculas.json')
      .then(res => res.json())
      .then(data => {
        // Selecciona 5 películas aleatorias de las 10 del JSON
        const mezcladas = data.sort(() => Math.random() - 0.5)
        setPeliculas(mezcladas.slice(0, 5))
      })

    fetch('/bebidas.json')
      .then(res => res.json())
      .then(data => setBebidas(data))

    fetch('/comestibles.json')
      .then(res => res.json())
      .then(data => setComestibles(data))

    fetch('/snacks.json')
      .then(res => res.json())
      .then(data => setSnacks(data))

    fetch('/otros.json')
      .then(res => res.json())
      .then(data => setOtrosItems(data))
  }, [])

  // Funciones del carrito (onClick)
  const agregarAlCarrito = (item) => {
    setCarrito([...carrito, item])
  }

  const quitarDelCarrito = (index) => {
    setCarrito(carrito.filter((_, i) => i !== index))
  }

  return (
    <>
      <Header totalCarrito={carrito.length} carrito={carrito} onQuitar={quitarDelCarrito} />

      {/* Hero Banner — Carrusel de Películas */}
      <HeroBanner
        peliculas={peliculas}
        onComprar={setPeliculaSeleccionada}
      />

      {/* Sección Cartelera */}
      <section id="cartelera" className="section">
        <div className="section-header">
          <h2 className="section-title">🎬 <span>Cartelera</span></h2>
          <a href="#cartelera" className="section-link">Ver cartelera ↓</a>
        </div>
        <div className="movies-grid">
          {peliculas.map((pelicula, i) => (
            <MovieCard
              key={i}
              pelicula={pelicula}
              onComprar={setPeliculaSeleccionada}
            />
          ))}
        </div>
      </section>

      {/* Modal del Formulario de Compra (onSubmit + onChange) */}
      {peliculaSeleccionada && (
        <FormularioCompra
          pelicula={peliculaSeleccionada}
          onCerrar={() => setPeliculaSeleccionada(null)}
        />
      )}

      {/* Sección Alimentos / Dulcería */}
      <section id="alimentos" className="section alimentos-section">
        <div className="section-header">
          <h2 className="section-title">🍿 <span>Dulcería</span></h2>
        </div>

        <div className="food-category">
          <h3 className="category-title">🥤 Bebidas</h3>
          <div className="food-grid">
            {bebidas.map((item, i) => (
              <FoodCard key={i} item={item} onAgregar={agregarAlCarrito} />
            ))}
          </div>
        </div>

        <div className="food-category">
          <h3 className="category-title">🌭 Comestibles</h3>
          <div className="food-grid">
            {comestibles.map((item, i) => (
              <FoodCard key={i} item={item} onAgregar={agregarAlCarrito} />
            ))}
          </div>
        </div>

        <div className="food-category">
          <h3 className="category-title">🍬 Snacks y Dulces</h3>
          <div className="food-grid">
            {snacks.map((item, i) => (
              <FoodCard key={i} item={item} onAgregar={agregarAlCarrito} />
            ))}
          </div>
        </div>

        {/* Carrito de alimentos */}
        <Carrito items={carrito} onQuitar={quitarDelCarrito} />
      </section>

      {/* Sección Otros */}
      <section id="otros" className="section">
        <div className="section-header">
          <h2 className="section-title">✨ <span>Promociones y Preventas</span></h2>
        </div>
        <div className="otros-grid">
          {otrosItems.map((item, i) => (
            <PromoCard key={i} item={item} />
          ))}
        </div>
      </section>

      <Footer />
    </>
  )
}

export default App