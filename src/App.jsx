import './App.css'

/* ===== DATOS ===== */
const peliculas = [
  {
    titulo: "El Padrino",
    genero: "Drama / Crimen",
    horarios: ["14:30", "17:00", "20:30"],
    color: "linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)",
    emoji: "🎬"
  },
  {
    titulo: "Baby Driver",
    genero: "Acción / Música",
    horarios: ["15:00", "18:30", "21:00"],
    color: "linear-gradient(135deg, #e4002b, #b8001f, #8b0000)",
    emoji: "🏎️"
  },
  {
    titulo: "Dune: Parte Dos",
    genero: "Ciencia Ficción",
    horarios: ["13:00", "16:45", "20:00"],
    color: "linear-gradient(135deg, #c2956a, #8b6914, #5c4033)",
    emoji: "🏜️"
  },
  {
    titulo: "Spider-Man: No Way Home",
    genero: "Acción / Aventura",
    horarios: ["14:00", "17:30", "21:30"],
    color: "linear-gradient(135deg, #b71c1c, #1565c0, #0d47a1)",
    emoji: "🕷️"
  },
  {
    titulo: "Intensamente 2",
    genero: "Animación / Comedia",
    horarios: ["12:30", "15:00", "17:30"],
    color: "linear-gradient(135deg, #ff8f00, #f9a825, #ffcc02)",
    emoji: "😊"
  }
]

const bebidas = [
  { nombre: "Refresco Grande", descripcion: "Coca-Cola, Sprite o Fanta de 946ml", precio: "$89", emoji: "🥤", color: "linear-gradient(135deg, #b71c1c, #d32f2f)" },
  { nombre: "ICEE", descripcion: "Bebida congelada de cereza o uva", precio: "$75", emoji: "🧊", color: "linear-gradient(135deg, #1565c0, #42a5f5)" },
  { nombre: "Café Latte", descripcion: "Café caliente con leche espumosa", precio: "$65", emoji: "☕", color: "linear-gradient(135deg, #4e342e, #795548)" },
]

const comestibles = [
  { nombre: "Palomitas Grandes", descripcion: "Palomitas de maíz con mantequilla extra", precio: "$120", emoji: "🍿", color: "linear-gradient(135deg, #f9a825, #fdd835)" },
  { nombre: "Hot Dog Clásico", descripcion: "Hot dog con salchicha premium y aderezo", precio: "$95", emoji: "🌭", color: "linear-gradient(135deg, #e65100, #ff8f00)" },
  { nombre: "Nachos con Queso", descripcion: "Nachos crujientes bañados en queso cheddar", precio: "$110", emoji: "🧀", color: "linear-gradient(135deg, #ff8f00, #ffa726)" },
]

const snacks = [
  { nombre: "M&M's", descripcion: "Chocolates de colores con cacahuate", precio: "$55", emoji: "🍫", color: "linear-gradient(135deg, #4a148c, #7b1fa2)" },
  { nombre: "Gomitas Haribo", descripcion: "Ositos de goma suaves y deliciosos", precio: "$45", emoji: "🍬", color: "linear-gradient(135deg, #c62828, #ef5350)" },
]

const otrosItems = [
  {
    tipo: "Promoción",
    titulo: "2x1 en Martes",
    descripcion: "Todos los martes compra 2 boletos por el precio de 1. Aplica para todas las funciones y formatos disponibles.",
    badge: "badge-red",
    emoji: "🎉",
    bannerColor: "linear-gradient(135deg, #e4002b, #ff1a45)"
  },
  {
    tipo: "Membresía",
    titulo: "Club Cinemex",
    descripcion: "Acumula puntos en cada compra y obtén boletos gratis, descuentos exclusivos y acceso a preventas especiales.",
    badge: "badge-gold",
    emoji: "⭐",
    bannerColor: "linear-gradient(135deg, #ffd700, #ff8f00)"
  },
  {
    tipo: "Preventa",
    titulo: "Capitán América: Brave New World",
    descripcion: "Asegura tus boletos antes que nadie. Disponible en formatos IMAX, 4DX y salas tradicionales.",
    badge: "badge-blue",
    emoji: "🎟️",
    bannerColor: "linear-gradient(135deg, #1565c0, #42a5f5)"
  }
]

/* ===== COMPONENTES ===== */

function Header() {
  return (
    <header className="header">
      <div className="header-top">
        <div className="header-logo">
          CINE<span>MEX</span>
        </div>
      </div>
      <nav className="navbar">
        <ul className="nav-list">
          <li><a href="#cartelera" className="nav-link active">Cartelera</a></li>
          <li><a href="#alimentos" className="nav-link">Alimentos</a></li>
          <li><a href="#otros" className="nav-link">Otros</a></li>
        </ul>
      </nav>
    </header>
  )
}

function MovieCard({ pelicula }) {
  return (
    <div className="movie-card">
      <div className="movie-poster" style={{ background: pelicula.color }}>
        <span style={{ fontSize: '4rem', zIndex: 1 }}>{pelicula.emoji}</span>
      </div>
      <div className="movie-info">
        <h3 className="movie-title">{pelicula.titulo}</h3>
        <p className="movie-genre">{pelicula.genero}</p>
        <div className="movie-schedule">
          {pelicula.horarios.map((horario, i) => (
            <span key={i} className="schedule-tag">{horario}</span>
          ))}
        </div>
        <button className="btn btn-primary">Comprar Boletos</button>
      </div>
    </div>
  )
}

function FoodCard({ item }) {
  return (
    <div className="food-card">
      <div className="food-image" style={{ background: item.color }}>
        <span>{item.emoji}</span>
      </div>
      <div className="food-info">
        <div>
          <h4 className="food-name">{item.nombre}</h4>
          <p className="food-description">{item.descripcion}</p>
        </div>
        <div>
          <p className="food-price">{item.precio}</p>
          <button className="btn btn-gold">Agregar</button>
        </div>
      </div>
    </div>
  )
}

function PromoCard({ item }) {
  return (
    <div className="promo-card">
      <div className="promo-banner" style={{ background: item.bannerColor }}>
        <span className="promo-icon">{item.emoji}</span>
      </div>
      <div className="promo-content">
        <span className={`promo-badge ${item.badge}`}>{item.tipo}</span>
        <h3 className="promo-title">{item.titulo}</h3>
        <p className="promo-description">{item.descripcion}</p>
        <button className="btn btn-primary">Ver más</button>
      </div>
    </div>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Cinemex</h4>
          <p>Tu mejor experiencia de cine en México. Disfruta de las mejores películas con la mejor tecnología.</p>
        </div>
        <div className="footer-section">
          <h4>Navegación</h4>
          <ul>
            <li><a href="#cartelera">Cartelera</a></li>
            <li><a href="#alimentos">Alimentos</a></li>
            <li><a href="#otros">Promociones</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Formatos</h4>
          <ul>
            <li>IMAX</li>
            <li>4DX</li>
            <li>Sala Platino</li>
            <li>Sala tradicional</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contacto</h4>
          <ul>
            <li>contacto@cinemex.com</li>
            <li>Tel: 800-100-2000</li>
            <li>Atención: Lun-Dom 10-22h</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Cinemex — Todos los derechos reservados</p>
      </div>
    </footer>
  )
}

/* ===== APP PRINCIPAL ===== */
function App() {
  return (
    <>
      <Header />

      {/* Sección Cartelera */}
      <section id="cartelera" className="section">
        <div className="section-divider"></div>
        <h2 className="section-title">🎬 <span>Cartelera</span></h2>
        <p className="section-subtitle">Las mejores películas disponibles hoy en Cinemex</p>
        <div className="movies-grid">
          {peliculas.map((pelicula, i) => (
            <MovieCard key={i} pelicula={pelicula} />
          ))}
        </div>
      </section>

      {/* Sección Alimentos */}
      <section id="alimentos" className="section alimentos-section">
        <div className="section-divider"></div>
        <h2 className="section-title">🍿 <span>Alimentos</span></h2>
        <p className="section-subtitle">Complementa tu experiencia de cine con nuestros deliciosos alimentos</p>

        <div className="food-category">
          <h3 className="category-title">🥤 Bebidas</h3>
          <div className="food-grid">
            {bebidas.map((item, i) => (
              <FoodCard key={i} item={item} />
            ))}
          </div>
        </div>

        <div className="food-category">
          <h3 className="category-title">🌭 Comestibles</h3>
          <div className="food-grid">
            {comestibles.map((item, i) => (
              <FoodCard key={i} item={item} />
            ))}
          </div>
        </div>

        <div className="food-category">
          <h3 className="category-title">🍬 Snacks y Dulces</h3>
          <div className="food-grid">
            {snacks.map((item, i) => (
              <FoodCard key={i} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Sección Otros */}
      <section id="otros" className="section">
        <div className="section-divider"></div>
        <h2 className="section-title">✨ <span>Otros</span></h2>
        <p className="section-subtitle">Promociones, membresías y preventas exclusivas</p>
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