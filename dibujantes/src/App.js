import './App.css';
import { Login } from './pages/index/Login';
import { SignIn } from './pages/index/SignIn';
import { Mensajes } from './pages/index/Mensajes';

function App() {
  return (
    <>
      <Login />
      <SignIn />
      <Mensajes />
    </>
  );
}

export default App;
