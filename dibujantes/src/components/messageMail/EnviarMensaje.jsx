import React from 'react'
import styles from './EnviarMensaje.module.css'

export const EnviarMensaje = () => {
  return (
    <div className={styles["enviar-mensaje-container"]}>
      <form className={styles["enviar-mensaje-form"]}>
        <div className={styles["enviar-mensaje-form-group"]}>
          <input type="text" id="destinatario" name="destinatario" placeholder="Para: " />
        </div>
        <div className={styles["enviar-mensaje-form-group"]}>
          <input type="text" id="asunto" name="asunto" placeholder="Asunto: " />
        </div>
        <div className={styles["enviar-mensaje-form-group"]}>
          <textarea id="mensaje" name="mensaje" placeholder="Descripción: "></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}

