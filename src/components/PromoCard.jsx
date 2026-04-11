// PromoCard recibe 1 PROP:
// - item: un objeto con los datos de la promoción (emoji, bannerColor, tipo, badge, titulo, descripcion)
//
// Este componente es el más sencillo: solo recibe datos y los muestra.
// No tiene estado local (no usa useState) porque no necesita ninguna interacción.
// Tampoco recibe funciones como prop porque no modifica nada en App.jsx.
function PromoCard({ item }) {
    return (
        <div className="promo-card">
            {/* Banner superior con color de fondo dinámico y emoji */}
            <div className="promo-banner" style={{ background: item.bannerColor }}>
                <span className="promo-icon">{item.emoji}</span>
            </div>
            <div className="promo-content">
                {/* Badge con clase dinámica: item.badge puede ser 'badge-promo' o 'badge-preventa'
                    para que tenga diferente color según el tipo */}
                <span className={`promo-badge ${item.badge}`}>{item.tipo}</span>
                <h3 className="promo-title">{item.titulo}</h3>
                <p className="promo-description">{item.descripcion}</p>
                <button className="btn btn-primary">Ver más</button>
            </div>
        </div>
    )
}

export default PromoCard
