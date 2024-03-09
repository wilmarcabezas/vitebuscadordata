import { useEffect, useState } from 'react'

export function Products() {
    const [productos, setProductos] = useState([])

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
            fetch('https://demoproyectobackendvercel.vercel.app/products')
                .then(response => response.json())
                .then(data => {
                    setProductos(data)
                })
        },     
        []
    );

    return (
        <>
            <h1>Lista de Productos</h1>

            {
                productosAntiguo.map((productoDetalle, index) => (
                    <ul key={index}>
                        <li>{productoDetalle.nombre}</li>

                    </ul>
                ))
            }
            <hr />
            {
                productos.map((productoDetalle, index) => (
                    <ul key={index}>
                        <li>{productoDetalle.nombre}</li>

                    </ul>
                ))
            }
        </>
    )
}