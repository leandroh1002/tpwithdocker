import React from 'react'
import styles from "./CardAutos.module.css"

function CardAutos({ autos }) {
  return (
    <div className={styles.container}>
        {autos.map((auto) => (
          <div className={styles.tarjeta} key={auto.id} style={{ border: '1px solid #ddd', padding: '10px', margin: '10px', borderRadius: '5px' }}>
            <div className={styles.imagenAuto}>
            <img src={auto.imagen} alt={auto.marca} />
            </div>
            <div>
            <h1>{auto.marca}</h1>
            <h2>{auto.modelo}</h2>
            <h2>Color: {auto.color}</h2>
            </div>
          </div>
        ))}
      </div>
  )
}

export default CardAutos