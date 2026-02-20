import { useState } from 'react'

function Header({ totalCarrito, carrito, onQuitar }) {
    const [mostrarCarrito, setMostrarCarrito] = useState(false)

    return (
        <header className="header">
            <div className="header-inner">
                <div className="header-left">
                    <div className="header-logo">
                        <span className="logo-icon">🎬</span> Cinemex
                    </div>
                    <nav className="navbar">
                        <a href="#cartelera" className="nav-link">Cartelera</a>
                        <a href="#alimentos" className="nav-link">Dulcería</a>
                        <a href="#otros" className="nav-link">Preventas</a>
                        <a href="#otros" className="nav-link">IMAX</a>
                    </nav>
                </div>
                <div className="header-right">
                    <div className="cart-wrapper">
                        <button
                            className={`header-cart-btn ${totalCarrito > 0 ? 'has-items' : ''}`}
                            onClick={() => setMostrarCarrito(!mostrarCarrito)}
                        >
                            🛒 {totalCarrito > 0 && <span className="cart-count">{totalCarrito}</span>}
                        </button>

                        {mostrarCarrito && (
                            <div className="cart-dropdown">
                                <h4 className="cart-dropdown-title">🛒 Tu Pedido</h4>
                                {carrito.length === 0 ? (
                                    <p className="cart-empty">Tu carrito está vacío</p>
                                ) : (
                                    <>
                                        <ul className="cart-dropdown-list">
                                            {carrito.map((item, i) => (
                                                <li key={i} className="cart-dropdown-item">
                                                    <span>{item.emoji} {item.nombre}</span>
                                                    <div className="cart-dropdown-right">
                                                        <span className="cart-dropdown-precio">{item.precio}</span>
                                                        <button className="cart-dropdown-quitar" onClick={() => onQuitar(i)}>✕</button>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </>
                                )}
                            </div>
                        )}
                    </div>
                    <button className="header-btn">Cambiar cine ▾</button>
                    <span className="header-user">👤</span>
                </div>
            </div>
        </header>
    )
}

export default Header
