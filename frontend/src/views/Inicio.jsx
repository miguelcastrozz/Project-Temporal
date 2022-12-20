import "../stylesheets/app.css";
import Container from "react-bootstrap/Container";
import Botones from "../components/Botones";
import Titulo from "../components/Titulo";
import Subtitulo from "../components/Subtitulo";
import Vinculos from "../components/Vinculos";
import { useNavigate } from "react-router-dom";

export default function Inicio() {

  const navigate = useNavigate();


  function redirection(){
      navigate("/login")
  }

  return (
    <>
      <Container className="Inicio">
        <Container className="Inicio-arriba">
          <Titulo width={20}>Bienvenido a Chatu</Titulo>
          <Subtitulo>Donde las opiniones convergen</Subtitulo>
        </Container>
        <Container className="Inicio-medio">
          <Botones className="Inicio-boton" onClick = {redirection()} width={25}>Iniciar sesión</Botones>
        </Container>
        <Container className="Inicio-abajo">
          <p>¿Eres nuevo en Chatu?</p>
          <Vinculos direccion="register" > Clickea aquí</Vinculos>
        </Container>
      </Container>
    </>
  );
}
