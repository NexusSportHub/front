
import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
export default function Metodos() {
    const [metodos, setProducts] = useState([])
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
            <div style={{ display: 'flex', flexDirection: 'row', gap: '2px' }}>
                {metodos.map((metodo, index) => (
                    <Card key={index} style={{ width: '300px', marginBottom: '20px' }}>
                        <CardContent>
                            <Typography variant="h6" color="text.primary" gutterBottom>
                                {metodo.X_METODOPAGO}
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary">
                                {metodo.D_METODOPAGO}
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