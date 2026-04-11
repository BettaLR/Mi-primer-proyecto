// Importo useState para manejar los campos del formulario como "inputs controlados"
import { useState } from 'react'

// FormularioCompra recibe 2 PROPS:
// - pelicula: el objeto de la película que el usuario seleccionó para comprar
// - onCerrar: una función que al ejecutarla cierra este modal (pone peliculaSeleccionada en null en App.jsx)
function FormularioCompra({ pelicula, onCerrar }) {
    // Estados para cada campo del formulario — esto es lo que se llama "INPUTS CONTROLADOS"
    // En React, el valor del input está ligado al estado, y cada vez que el usuario escribe,
    // se actualiza el estado con onChange, lo que a su vez actualiza el valor del input.
    const [nombre, setNombre] = useState('')        // Campo: nombre del usuario
    const [email, setEmail] = useState('')          // Campo: correo electrónico
    const [horario, setHorario] = useState('')      // Campo: horario seleccionado
    const [confirmacion, setConfirmacion] = useState(null)  // Datos de confirmación (null = aún no se ha enviado)

    // Función que se ejecuta cuando el usuario envía el formulario (onSubmit)
    const handleSubmit = (e) => {
        // e.preventDefault() evita que la página se recargue al enviar el formulario
        // (comportamiento por defecto de los formularios HTML)
        e.preventDefault()
        // Guardo los datos del formulario en el estado "confirmacion"
        // Esto provoca que el componente se re-renderice y muestre la pantalla de confirmación
        setConfirmacion({ nombre, email, horario, pelicula: pelicula.titulo })
    }

    // ======== PANTALLA DE CONFIRMACIÓN ========
    // Si confirmacion no es null (ya se envió el formulario), muestro el mensaje de éxito
    if (confirmacion) {
        return (

            // Modal overlay — al hacer clic fuera del modal, se cierra (ejecuta onCerrar)
            <div className="modal-overlay" onClick={onCerrar}>

                {/* e.stopPropagation() evita que el clic dentro del modal lo cierre */}
                <div className="modal" onClick={(e) => e.stopPropagation()}>
                    <div className="confirmacion">
                        <span className="confirmacion-icon">✅</span>
                        <h3>¡Compra Confirmada!</h3>
                        <div className="confirmacion-datos">

                            {/* Muestra los datos que el usuario ingresó */}
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

    // ======== PANTALLA DEL FORMULARIO ========
    // Si confirmacion es null, muestro el formulario para que el usuario lo llene
    return (
        <div className="modal-overlay" onClick={onCerrar}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <button className="modal-cerrar" onClick={onCerrar}>✕</button>
                <h3 className="modal-titulo">

                    {/* Accedo a pelicula.titulo — esta es la PROP que me pasaron desde App.jsx */}
                    🎟️ Comprar Boletos — {pelicula.titulo}
                </h3>

                {/* Formulario con onSubmit — cuando el usuario da clic en "Confirmar Compra"
                    se ejecuta handleSubmit */}
                <form className="formulario" onSubmit={handleSubmit}>
                    
                    {/* Campo de nombre — INPUT CONTROLADO:
                        value={nombre} liga el valor al estado
                        onChange actualiza el estado cada vez que el usuario escribe */}
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

                    {/* Campo de email — también input controlado */}
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

                    {/* Select de horarios — input controlado con opciones dinámicas.
                        Las opciones vienen de pelicula.horarios (la PROP),
                        las recorro con .map() para generar cada <option> */}
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

                    {/* Botón submit — al hacer clic se ejecuta onSubmit del form → handleSubmit */}
                    <button type="submit" className="btn btn-primary">
                        Confirmar Compra
                    </button>
                </form>
            </div>
        </div>
    )
}

export default FormularioCompra
