import { useState } from "react";
import { Album, Navbar } from "../components";
import "../components/home/album.css";

export const Home = () => {
  const [commentsVisible, setCommentsVisible] = useState(false);
  const onCommentsClose = (e) => {
    setCommentsVisible(false);
  };
  const onCommentsOpen = (datos) => {
    setCommentsVisible(true);
  };

  let postsPrueba = [
    {
      msg: "Hola Mundo",
      img: "https://www.uao.edu.co/wp-content/uploads/2020/05/Vive-la-UAO-745x410.jpg",
    },
    {
      msg: "Castro",
      img: "https://www.uao.edu.co/wp-content/uploads/2020/05/UAO-logo-acreditacion.png",
    },
    {
      msg: "A",
      img: "https://conceptodefinicion.de/wp-content/uploads/2019/06/letras-1.jpg",
    },
    {
      msg: "Hola Mundo",
      img: "https://www.uao.edu.co/wp-content/uploads/2020/05/Vive-la-UAO-745x410.jpg",
    },
    {
      msg: "Castro",
      img: "https://www.uao.edu.co/wp-content/uploads/2020/05/UAO-logo-acreditacion.png",
    },
    {
      msg: "A",
      img: "https://conceptodefinicion.de/wp-content/uploads/2019/06/letras-1.jpg",
    },
    {
      msg: "Hola Mundo",
      img: "https://www.uao.edu.co/wp-content/uploads/2020/05/Vive-la-UAO-745x410.jpg",
    },
    {
      msg: "Castro",
      img: "https://www.uao.edu.co/wp-content/uploads/2020/05/UAO-logo-acreditacion.png",
    },
    {
      msg: "A",
      img: "https://conceptodefinicion.de/wp-content/uploads/2019/06/letras-1.jpg",
    },
    {
      msg: "Hola Mundo",
      img: "https://www.uao.edu.co/wp-content/uploads/2020/05/Vive-la-UAO-745x410.jpg",
    },
    {
      msg: "Castro",
      img: "https://www.uao.edu.co/wp-content/uploads/2020/05/UAO-logo-acreditacion.png",
    },
    {
      msg: "A",
      img: "https://conceptodefinicion.de/wp-content/uploads/2019/06/letras-1.jpg",
    },
  ];

  return (
    <>
      <Navbar
        searchBar={true}
        current="interfaz-usuario"
        item1="Subir Imagen"
        item2="Mensajeria"
        item3="Perfil"
        item4="Tienda"
      />
      <div className="banner"></div>
      <div>
        <Album posts={postsPrueba} onComments={onCommentsOpen} />
      </div>
    </>
  );
};
