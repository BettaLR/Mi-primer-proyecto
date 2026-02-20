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

export default PromoCard
