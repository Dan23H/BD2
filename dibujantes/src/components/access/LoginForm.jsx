import useLoginForm from '../../hooks/useLoginForm';
import styles from './Logeo.module.css';
import logo from '../../assets/7T.png';
import google from "../../assets/google.png"
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { startGoogleAuth } from '../../actions/auth';
import { firebase } from "../../firebase/firebaseConfig"

export const LoginForm = () => {
  const { usuario, contraseña, tomarUsuario, tomarContraseña, handleLogin, credencialesInvalidas } = useLoginForm();
  const dispatch = useDispatch()

  const handleGoogleAuth = async () => {
    dispatch(startGoogleAuth())

  }
  setTimeout(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        window.location = '/home'; //After successful login, user will be redirected to home
      }
    })
  }, 200)
  
  return (
    <>
      <body>
        <div className={styles.loginFormContainer}>
          <div className={styles.formGroup}>
            <img src={logo} alt='logo' className={styles.logo} />
            <input
              className={styles.input}
              type='text'
              placeholder='Ingrese su nombre de usuario'
              onChange={(evt) => tomarUsuario(evt)}
            />
          </div>
          <div className={styles.formGroup}>
            <input
              className={styles.input}
              type='password'
              placeholder='Ingrese su contraseña'
              onChange={(evt) => tomarContraseña(evt)}
            />
          </div>
          {credencialesInvalidas && (
            <p className={styles.errorMessage}>
              Credenciales inválidas, por favor intente de nuevo.
            </p>
          )}
          <div className={styles.buttonsContainer}>
            <button
              className={styles.logInButton}
              type='button'
              onClick={(e) => handleLogin(e)}
            >
              Acceder
            </button>
            <Link to='/register'>
              <button className={styles.signInButton} type='button'>
                Registro
              </button>
            </Link>

          </div>
          <div>
            <button onClick={handleGoogleAuth} style={{ borderRadius: "100px", padding: "5px" }}>{<img style={{ height: "20px" }} src={google} alt="google" />}</button>
          </div>
        </div>
      </body>
    </>
  );
};


