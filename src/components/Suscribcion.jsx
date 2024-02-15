
import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
export default function Suscripcion() {
    const [suscripciones, setProducts] = useState([])
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
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5px' }}>
                {suscripciones.map((suscribcion, index) => (
                    <Card key={index} style={{ width: '300px', marginBottom: '20px' }}>
                        <CardContent>
                            <Typography variant="h6" color="text.primary" gutterBottom>
                                {suscribcion.X_SUSCRIPCION}
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary">
                                {suscribcion.D_SUSCRIPCION}
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary">
                                {suscribcion.MET_X_METPAGO}
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                {suscribcion.N_PORCENTAJE_DESCUENTO}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {suscribcion.N_LIMITE_MINIMO_PETICIONES}
                            </Typography>
                        </CardContent>
                        <Button variant="contained" size="large" color="primary">
                            Elegir
                        </Button>
                    </Card>
                ))}
            </div>
        </div>
    );
}