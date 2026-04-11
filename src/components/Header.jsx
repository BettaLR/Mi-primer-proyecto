// Importo useState porque este componente tiene su propio estado local
// (controla si el dropdown del carrito está visible o no)
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

// Mi componente Header recibe 3 PROPS desde App.jsx:
// - totalCarrito: un número que indica cuántos items hay en el carrito
// - carrito: el arreglo completo con los items del carrito
// - onQuitar: una función que viene desde App.jsx para quitar items del carrito
//
// La sintaxis { totalCarrito, carrito, onQuitar } se llama DESTRUCTURING.
// Es lo mismo que recibir (props) y luego usar props.totalCarrito, props.carrito, etc.
// pero más limpio y directo.
function Header({ totalCarrito, carrito, onQuitar }) {
    // Estado local para controlar si el dropdown del carrito está visible o no
    // mostrarCarrito = false (oculto), true (visible)
    const [mostrarCarrito, setMostrarCarrito] = useState(false)

    return (
        <header className="header">
            <div className="header-inner">
                {/* Lado izquierdo: Logo + Navegación */}
                <div className="header-left">
                    <div className="header-logo">
                        <span className="logo-icon">🎬</span> Cinemex
                    </div>
                    {/* Links de navegación usando NavLink para rutas */}
                    <nav className="navbar">
                        <NavLink to="/" className="nav-link">Cartelera</NavLink>
                        <NavLink to="/preventas" className="nav-link">Preventas</NavLink>
                        <NavLink to="/sobre" className="nav-link">Sobre Cinemex</NavLink>
                    </nav>
                </div>

                {/* Lado derecho: Carrito + Botón de cine + Usuario */}
                <div className="header-right">
                    <div className="cart-wrapper">
                        {/* Botón del carrito:
                            - Uso un template literal con backticks (`) para agregar la clase 'has-items'
                              solo cuando hay items en el carrito (totalCarrito > 0)
                            - onClick: al hacer clic, cambio el valor de mostrarCarrito al opuesto (!mostrarCarrito)
                              Es decir: si está true lo pongo false, y viceversa (toggle) */}
                        <button
                            className={`header-cart-btn ${totalCarrito > 0 ? 'has-items' : ''}`}
                            onClick={() => setMostrarCarrito(!mostrarCarrito)}
                        >
                            {/* Muestro el emoji del carrito, y solo si hay items (totalCarrito > 0),
                                muestro el número con la bolita roja */}
                            🛒 {totalCarrito > 0 && <span className="cart-count">{totalCarrito}</span>}
                        </button>

                        {/* DROPDOWN del carrito:
                            Solo se renderiza si mostrarCarrito es true (operador &&) */}
                        {mostrarCarrito && (
                            <div className="cart-dropdown">
                                <h4 className="cart-dropdown-title">🛒 Tu Pedido</h4>

                                {/* Renderizado condicional con ternario (condición ? caso_true : caso_false):
                                    - Si el carrito está vacío → muestro mensaje "Tu carrito está vacío"
                                    - Si tiene items → muestro la lista de items */}
                                {carrito.length === 0 ? (
                                    <p className="cart-empty">Tu carrito está vacío</p>
                                ) : (
                                    <>
                                        <ul className="cart-dropdown-list">
                                            {/* Recorro el arreglo carrito con .map() y por cada item
                                                muestro su emoji, nombre, precio y un botón para quitarlo.
                                                Al hacer clic en ✕, llamo a onQuitar(i) — la función que
                                                viene como PROP desde App.jsx */}
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

// Exporto el componente para que App.jsx pueda importarlo
export default Header
