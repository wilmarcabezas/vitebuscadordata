import { useEffect, useState } from 'react'
import { FcSearch } from "react-icons/fc";
import { FaHouseChimneyUser } from "react-icons/fa6";
import { FaBabyCarriage } from "react-icons/fa";

export function Products() {
    const [productos, setProductos] = useState([])
    const [productoBuscado, setProductoBuscado] = useState('')

    const productosAntiguo = [
        {
            id: 1,
            nombre: 'Brazo Oscilante antiguo',
            imagen: 'https://http2.mlstatic.com/D_NQ_NP_708111-MCO52023258264_102022-O.webp',
            color: 'rojo',
            precio: '300',
            descripcion: 'Producto como nuevo'
        },
        {
            id: 2,
            nombre: 'Moca Antiguo',
            imagen: 'https://http2.mlstatic.com/D_NQ_NP_686188-MCO71730691880_092023-O.webp',
            color: 'verde',
            precio: '200',
            descripcion: 'Producto mejor que nuevo'
        },
        {
            id: 4,
            nombre: "Globo Balon",
            imagen: "https://http2.mlstatic.com/D_NQ_NP_748767-MLU71223202264_082023-O.webp",
            color: "azul",
            precio: "900",
            descripcion: "Jueguete para ninos"
        },
        {
            id: 5,
            nombre: "10 Muñequitos Animalitos",
            imagen: "https://http2.mlstatic.com/D_NQ_NP_835429-MLU73062535329_112023-O.webp",
            color: "azul",
            precio: "50",
            descripcion: "Jueguete para ninos y adultos"
        }
    ]

    useEffect(
        () => {
            fetch('https://demoproyectobackendvercel.vercel.app/products/'+productoBuscado)
                .then(response => response.json())
                .then(data => {
                    setProductos(data)
                })
        },
        [productoBuscado]
    );
    
    const buscarProducto =(parametro)=>{
        setProductoBuscado(parametro.target.value);        
    }

    return (
        <>
            <h1>Lista de Productos</h1>
            <input type="text" onChange={buscarProducto} name="" id="" />
           
            {
                productos.map((productoDetalle, index) => (
                    <ul key={index}>
                        <li>
                        {productoDetalle.nombre}
                        <br/>
                        <img src={productoDetalle.imagen} 
                        alt=""
                        style={{width:'100px'}}  />
                        <br/>
                        ${productoDetalle.precio}
                        <br/>
                        Color:{productoDetalle.color}
                        <br/>
                        Descripcion:{productoDetalle.descripcion}
                        </li>

                    </ul>
                ))
            }
        </>
    )
}