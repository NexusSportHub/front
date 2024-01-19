
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import Swal from 'sweetalert2'
export default function Periodos() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetchProducts()
    }, [])
    const fetchProducts = async () => {
        await axios.get(`http://localhost:8000/api/periodo`).then(({ data }) => {
            setProducts(data)
            console.log(data);
        })
    }
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>F_INI</th>
                        <th>F_FIN</th>
                        <th>N_IMPORTE_PETICION</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.length > 0 && (
                            products.map((row, key) => (
                                <tr key={key}>
                                    <td>{row.F_INI}</td>
                                    <td>{row.F_FIN}</td>
                                    <td>{row.N_IMPORTE_PETICION}</td>
                                </tr>
                            ))
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}