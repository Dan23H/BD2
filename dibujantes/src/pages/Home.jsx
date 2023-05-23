import { useEffect, useState } from "react";
import { Album, Navbar } from "../components";
import "../components/home/album.css";
import {postsPrueba1, postsPrueba2} from "../components/fake-data/album-data"

export const Home = () => {
    /*const [images, setImages] = useState([]);
    const imagenId = "646d31d16196e66d3454b0bd"

    useEffect(() => {
        fetch(`http://localhost:4000/verimagen/${imagenId}`)
          .then((response) => response.json())
          .then((data) => {
            setImages(data.imagenes);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      }, []);*/

    return (
        <>
            <Navbar
                searchBar={true}
                current="interfaz-usuario"
                item1="Subir Imagen"
                item2="Mensajeria"
                item3="Perfil"
                item4="Notificaciones"
            />

            <div className="spotter">
                <hr />
                <Album posts={postsPrueba1} category={'#Anime'} />
                <Album posts={postsPrueba1} category={'#Futuristic'} />
            </div>
        </>
    );
};
