import { useState } from 'react'

function FormularioCompra({ pelicula, onCerrar }) {
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [horario, setHorario] = useState('')
    const [confirmacion, setConfirmacion] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        setConfirmacion({ nombre, email, horario, pelicula: pelicula.titulo })
    }

    if (confirmacion) {
        return (
            <div className="modal-overlay" onClick={onCerrar}>
                <div className="modal" onClick={(e) => e.stopPropagation()}>
                    <div className="confirmacion">
                        <span className="confirmacion-icon">✅</span>
                        <h3>¡Compra Confirmada!</h3>
                        <div className="confirmacion-datos">
                            <p><strong>Película:</strong> {confirmacion.pelicula}</p>
                            <p><strong>Nombre:</strong> {confirmacion.nombre}</p>
                            <p><strong>Email:</strong> {confirmacion.email}</p>
                            <p><strong>Horario:</strong> {confirmacion.horario}</p>
                        </div>
                        <p className="confirmacion-mensaje">Se envió la confirmación a tu correo 📧</p>
                        <button className="btn btn-primary" onClick={onCerrar}>Cerrar</button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="modal-overlay" onClick={onCerrar}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <button className="modal-cerrar" onClick={onCerrar}>✕</button>
                <h3 className="modal-titulo">
                    🎟️ Comprar Boletos — {pelicula.titulo}
                </h3>
                <form className="formulario" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="nombre">Nombre completo</label>
                        <input
                            id="nombre"
                            type="text"
                            placeholder="Ej: Juan Pérez"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Correo electrónico</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Ej: juan@correo.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="horario">Horario</label>
                        <select
                            id="horario"
                            value={horario}
                            onChange={(e) => setHorario(e.target.value)}
                            required
                        >
                            <option value="">Selecciona un horario</option>
                            {pelicula.horarios.map((h, i) => (
                                <option key={i} value={h}>{h} hrs</option>
                            ))}
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Confirmar Compra
                    </button>
                </form>
            </div>
        </div>
    )
}

export default FormularioCompra
