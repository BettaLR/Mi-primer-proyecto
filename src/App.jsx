import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

// Importo todos mis componentes desde la carpeta components/
// Cada uno es un "pedazo" reutilizable de mi interfaz
import Header from './components/Header'
import HeroBanner from './components/HeroBanner'
import MovieCard from './components/MovieCard'
import FoodCard from './components/FoodCard'
import Carrito from './components/Carrito'
import FormularioCompra from './components/FormularioCompra'
import PromoCard from './components/PromoCard'
import MovieCarousel from './components/MovieCarousel'
import SobreCinemex from './components/SobreCinemex'
import Preventas from './components/Preventas'
import Footer from './components/Footer'

// Este es mi componente principal, el "padre" de toda la app.
// Desde aquí controlo toda la lógica y le paso datos a los componentes hijos mediante PROPS.
function App() {
  // ======== ESTADOS (useState) ========
  // Cada useState crea una variable y una función para modificarla.
  // Ejemplo: peliculas = el valor actual, setPeliculas = la función para cambiarlo.

  // Estados para guardar los datos que traigo del JSON (simulando una API)
  const [todasPeliculas, setTodasPeliculas] = useState([]) // TODAS las películas (para el HeroBanner)
  const [peliculas, setPeliculas] = useState([])       // Solo 5 películas aleatorias (para la Cartelera)
  const [bebidas, setBebidas] = useState([])            // Arreglo de bebidas
  const [comestibles, setComestibles] = useState([])    // Arreglo de comestibles
  const [snacks, setSnacks] = useState([])              // Arreglo de snacks
  const [otrosItems, setOtrosItems] = useState([])      // Arreglo de promos/preventas

  const [carrito, setCarrito] = useState([])
  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null)

  // ======== useEffect — CARGA DE DATOS ========
  // useEffect con [] vacío = se ejecuta UNA SOLA VEZ cuando la app se carga por primera vez.
  // Aquí uso fetch() para traer los datos de mis archivos JSON (que están en la carpeta public/).
  useEffect(() => {
    // Traigo las películas: guardo TODAS para el HeroBanner y 5 aleatorias para la Cartelera
    fetch('/peliculas.json')
      .then(res => res.json())
      .then(data => {
        setTodasPeliculas(data) // Guardo TODAS las películas para que el HeroBanner las recorra
        // Math.random() - 0.5 genera un número entre -0.5 y 0.5, lo que mezcla el arreglo aleatoriamente
        const mezcladas = [...data].sort(() => Math.random() - 0.5)
        setPeliculas(mezcladas.slice(0, 5)) // Tomo solo 5 aleatorias para la Cartelera
      })

    // Traigo las bebidas
    fetch('/bebidas.json')
      .then(res => res.json())
      .then(data => setBebidas(data))

    // Traigo los comestibles
    fetch('/comestibles.json')
      .then(res => res.json())
      .then(data => setComestibles(data))

    // Traigo los snacks
    fetch('/snacks.json')
      .then(res => res.json())
      .then(data => setSnacks(data))

    // Traigo los items de la sección "otros" (promos y preventas)
    fetch('/otros.json')
      .then(res => res.json())
      .then(data => setOtrosItems(data))
  }, []) // <-- El arreglo vacío [] significa: ejecuta esto solo al montar el componente

  // ======== FUNCIONES DEL CARRITO ========

  // Función para agregar un item al carrito
  // Uso el spread operator (...) para crear un nuevo arreglo con todo lo que ya tenía + el nuevo item
  const agregarAlCarrito = (item) => {
    setCarrito([...carrito, item])
  }

  // Función para quitar un item del carrito por su posición (index)
  // filter() crea un nuevo arreglo excluyendo el item en la posición indicada
  const quitarDelCarrito = (index) => {
    setCarrito(carrito.filter((_, i) => i !== index))
  }

  return (
    <>
      <Header totalCarrito={carrito.length} carrito={carrito} onQuitar={quitarDelCarrito} />

      <Routes>
        <Route path="/" element={
          <>
            <HeroBanner
              peliculas={todasPeliculas}
              onComprar={setPeliculaSeleccionada}
            />

            <section className="estrenos-section">
              <h2 className="estrenos-title">ESTRENOS</h2>
              <MovieCarousel movies={peliculas} onComprar={setPeliculaSeleccionada} />
            </section>

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

            {peliculaSeleccionada && (
              <FormularioCompra
                pelicula={peliculaSeleccionada}
                onCerrar={() => setPeliculaSeleccionada(null)}
              />
            )}

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

              <Carrito items={carrito} onQuitar={quitarDelCarrito} />
            </section>

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
          </>
        } />

        <Route path="/sobre" element={<SobreCinemex />} />
        <Route path="/preventas" element={<Preventas />} />
      </Routes>

      <Footer />
    </>
  )
}

// export default hace que este componente pueda ser importado desde otros archivos
export default App