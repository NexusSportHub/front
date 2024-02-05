
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2'

import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'


export default function Periodos() {
    const [periodos, setProducts] = useState([])
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
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5px' }}>
                {periodos.map((periodo, index) => (
                    <Card key={index} style={{ width: '300px', marginBottom: '20px' }}>
                        <CardContent>
                            <Typography variant="h6" color="text.primary" gutterBottom>
                                {periodo.X_PERIODO}
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary">
                                {periodo.F_INI} - {periodo.F_FIN}
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                Importe: {periodo.N_IMPORTE_PETICION}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {periodo.SUS_X_SUSCRIPCION}
                            </Typography>
                        </CardContent>
                        <Button variant="contained" size="large" color="primary">
                            Comprar
                        </Button>
                    </Card>
                ))}
            </div>
        </div>

    );
}