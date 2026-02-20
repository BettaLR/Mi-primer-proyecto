function Carrito({ items, onQuitar }) {
    if (items.length === 0) return null

    return (
        <div className="carrito">
            <h3 className="carrito-titulo">🛒 Tu Pedido</h3>
            <ul className="carrito-lista">
                {items.map((item, i) => (
                    <li key={i} className="carrito-item">
                        <span>{item.emoji} {item.nombre}</span>
                        <div className="carrito-item-right">
                            <span className="carrito-precio">{item.precio}</span>
                            <button className="carrito-quitar" onClick={() => onQuitar(i)}>✕</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Carrito
