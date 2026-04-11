// Carrito recibe 2 PROPS desde App.jsx:
// - items: el arreglo con todos los productos que el usuario ha agregado al carrito
// - onQuitar: la función quitarDelCarrito que viene de App.jsx para eliminar items
function Carrito({ items, onQuitar }) {

    
    // Si el carrito está vacío (0 items), no renderizo nada — retorno null
    // Esto hace que el componente desaparezca completamente del DOM
    if (items.length === 0) return null

    return (
        <div className="carrito">
            <h3 className="carrito-titulo">🛒 Tu Pedido</h3>
            <ul className="carrito-lista">
                {/* Recorro el arreglo "items" con .map() para mostrar cada producto.
                    Por cada item muestro: emoji + nombre + precio + botón para quitar */}


                {items.map((item, i) => (
                    <li key={i} className="carrito-item">
                        <span>{item.emoji} {item.nombre}</span>
                        <div className="carrito-item-right">
                            <span className="carrito-precio">{item.precio}</span>


                            {/* Al hacer clic en ✕, ejecuto onQuitar(i) — la función PROP que
                                viene de App.jsx. Le paso "i" (el índice) para que sepa
                                cuál item eliminar del arreglo */}
                            <button className="carrito-quitar" onClick={() => onQuitar(i)}>✕</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Carrito
