import { useState } from 'react'

function FoodCard({ item, onAgregar }) {
    const [agregado, setAgregado] = useState(false)

    const handleAgregar = () => {
        onAgregar(item)
        setAgregado(true)
        setTimeout(() => setAgregado(false), 1200)
    }

    return (
        <div className={`food-card ${agregado ? 'food-card-agregado' : ''}`}>
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
                    <button className="btn btn-gold" onClick={handleAgregar}>
                        {agregado ? '✓ Agregado' : 'Agregar'}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FoodCard
