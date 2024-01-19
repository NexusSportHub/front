
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import Swal from 'sweetalert2'
export default function Metodos() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetchProducts()
    }, [])
    const fetchProducts = async () => {
        await axios.get(`http://localhost:8000/api/metodos`).then(({ data }) => {
            setProducts(data)
            console.log(data);
        })
    }
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>X_METODOPAGO</th>
                        <th>D_METODOPAGO</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.length > 0 && (
                            products.map((row, key) => (
                                <tr key={key}>
                                    <td>{row.X_METODOPAGO}</td>
                                    <td>{row.D_METODOPAGO}</td>
                                </tr>
                            ))
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}