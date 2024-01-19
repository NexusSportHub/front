
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import Swal from 'sweetalert2'
export default function Suscripcion() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetchProducts()
    }, [])
    const fetchProducts = async () => {
        await axios.get(`http://localhost:8000/api/suscripcion`).then(({ data }) => {
            setProducts(data)
        })
    }
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>X_SUSCRIPCION</th>
                        <th>D_SUSCRIPCION</th>
                        <th>MET_X_METOPAGO</th>
                        <th>N_PORCENTAJE_DESCUENTO</th>
                        <th>N_LIMITE_MINIMO_PETICIONES</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.length > 0 && (
                            products.map((row, key) => (
                                <tr key={key}>
                                    <td>{row.X_SUSCRIPCION}</td>
                                    <td>{row.D_SUSCRIPCION}</td>
                                    <td>{row.MET_X_METOPAGO}</td>
                                    <td>{row.N_PORCENTAJE_DESCUENTO}</td>
                                    <td>{row.N_LIMITE_MINIMO_PETICIONES}</td>
                                </tr>
                            ))
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}