import { Navbar, Album } from "../components"
import { postsPrueba2 } from "../components/fake-data/album-data"
import "../components/image/image.css"
import { useCounter } from "../hooks"


const data = {
    msg: "Shinobu Oshino :3",
    img: "https://c.wallhere.com/photos/7f/83/anime_Monogatari_Series_Oshino_Shinobu-125680.jpg!d",
    category: "#Anime",
    likes: 0,
    dislikes: 0
}

// Aquí se enviaría la información de la imagen a mostrar
export const Image = () => {
    const {likes, dislikes, addLike, addDislike} = useCounter(data.likes, data.dislikes)
    return (
        <div className="container"> 
            <Navbar
                searchBar={true}
                current="interfaz-usuario"
                item1="Subir Imagen"
                item2="Mensajeria"
                item3="Perfil"
                item4="Notificaciones"
            />
            <div className="image-container">
                <img src={data.img} alt="" />
            </div>
            <div>Likes: {likes} Dislikes: {dislikes}</div>
            <div className="button-container">
                <button onClick={() => addLike()}>Up</button>
                <button onClick={() => addDislike()}>Down</button>
                <button>Subscribe</button>
                <button>Report</button>
                <button>Download</button>
            </div>
            <div className="message-container">
                <div>
                    {data.msg}
                </div>
                <div>
                    Comentarios
                    <br />
                    {}
                </div>
            </div>
            <div className="album">
            <Album posts={postsPrueba2} category={'#Futuristic'} />
            </div>
        </div>

    )
}