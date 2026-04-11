// Importo useState para controlar la animación de "Agregado" temporalmente
import { useState } from 'react'

// FoodCard recibe 2 PROPS:
// - item: un objeto con los datos del producto (nombre, precio, emoji, color, descripcion)
// - onAgregar: una función que viene de App.jsx (agregarAlCarrito) para agregar este item al carrito
function FoodCard({ item, onAgregar }) {


    // Estado local para controlar la animación visual cuando agrego un producto
    // Cuando es true, la tarjeta se pone verde brevemente como feedback visual
    const [agregado, setAgregado] = useState(false)

    // Función que se ejecuta cuando el usuario hace clic en "Agregar"
    const handleAgregar = () => {

        // Llamo a la función onAgregar que me pasaron como PROP — esto agrega el item al carrito en App.jsx
        onAgregar(item)

        // Cambio el estado a true para mostrar la animación de "Agregado ✓"
        setAgregado(true)
        
        // Después de 1.2 segundos (1200ms), regreso el estado a false para quitar la animación
        setTimeout(() => setAgregado(false), 1200)
    }

    return (
        // Agrego la clase 'food-card-agregado' condicionalmente para la animación CSS
        <div className={`food-card ${agregado ? 'food-card-agregado' : ''}`}>

            {/* Imagen/fondo del producto con su color y emoji */}
            <div className="food-image" style={{ background: item.color }}>
                <span>{item.emoji}</span>
            </div>
            <div className="food-info">
                <div>
                    {/* Nombre y descripción del producto — vienen del objeto "item" (la PROP) */}
                    <h4 className="food-name">{item.nombre}</h4>
                    <p className="food-description">{item.descripcion}</p>
                </div>
                <div>
                    {/* Precio del producto */}
                    <p className="food-price">{item.precio}</p>

                    {/* Botón de agregar — cambia su texto según el estado "agregado" */}
                    <button className="btn btn-gold" onClick={handleAgregar}>
                        {agregado ? '✓ Agregado' : 'Agregar'}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FoodCard
