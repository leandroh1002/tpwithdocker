import React from 'react'
import styles from "./Formulario.module.css"


function Form({ handleSubmit, handleInputChange, auto }) {
  return (
    <div className={styles.container}>
        <h1>Mi Aplicación de Autos</h1>
        <div >
        <form className={styles.fomulario} onSubmit={handleSubmit}>
            <div className={styles.labelOrder}>
                <label className={styles.inpValue}>Imagen:<input  type="url" name="imagen" value={auto.imagen} onChange={handleInputChange} required /></label>
                <label className={styles.inpValue}>Color:<input  type="text" name="color" value={auto.color} onChange={handleInputChange} required /></label>
                <label className={styles.inpValue}>Marca:<input type="text" name="marca" value={auto.marca} onChange={handleInputChange} required /></label>
                <label className={styles.inpValue}>Modelo:<input type="text" name="modelo" value={auto.modelo} onChange={handleInputChange} required /></label>
            </div>
            <button type="submit">Agregar Auto</button>
        </form>
        </div>
    </div>
  )
}

export default Form