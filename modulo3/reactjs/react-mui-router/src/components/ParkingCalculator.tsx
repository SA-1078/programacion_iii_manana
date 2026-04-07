import React, { useState, useEffect } from 'react';
import {Card, CardContent, CardHeader, TextField, Grid, Typography, Box, Alert, Divider, Button} from '@mui/material';

const ParkingCalculator: React.FC = () => {
    const [hours, setHours] = useState<string>('');
    const [rate, setRate] = useState<string>('');
    const [discount, setDiscount] = useState<string>('');

    const [subtotal, setSubtotal] = useState<number>(0);
    const [totalDiscount, setTotalDiscount] = useState<number>(0);
    const [finalTotal, setFinalTotal] = useState<number>(0);

    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        calculateTotal();
    }, [hours, rate, discount]);

    const calculateTotal = () => {
        setError(null);
        setSubtotal(0);
        setTotalDiscount(0);
        setFinalTotal(0);

        const h = parseFloat(hours);
        const r = parseFloat(rate);
        const d = parseFloat(discount);

        if (hours === '' || rate === '' || discount === '') {
            return;
        }

        if (isNaN(h) || h < 1) {
            setError('Las horas deben ser mayor o igual a 1.');
            return;
        }
        if (isNaN(r) || r <= 0) {
            setError('La tarifa debe ser mayor a 0.');
            return;
        }
        if (isNaN(d) || d < 0 || d > 50) {
            setError('El descuento debe estar entre 0% y 50%.');
            return;
        }

        const currentSubtotal = h * r;
        const baseDiscountAmount = currentSubtotal * (d / 100);

        let additionalDiscountAmount = 0;
        if (h >= 5) {
            additionalDiscountAmount = currentSubtotal * 0.10;
        }

        const totalDisc = baseDiscountAmount + additionalDiscountAmount;
        const final = currentSubtotal - totalDisc;

        setSubtotal(currentSubtotal);
        setTotalDiscount(totalDisc);
        setFinalTotal(final);
    };

    const handleReset = () => {
        setHours('');
        setRate('');
        setDiscount('');
        setSubtotal(0);
        setTotalDiscount(0);
        setFinalTotal(0);
        setError(null);
    };

    return (
        <Card sx={{ maxWidth: 500, margin: '20px auto', p: 1 }}>
            <CardHeader
                title="Calculadora de Estacionamiento"
                subheader="Ingrese horas, tarifa y descuento"
            />
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        {error && <Alert severity="error">{error}</Alert>}
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <TextField
                            label="Horas"
                            type="number"
                            fullWidth
                            size="small"
                            value={hours}
                            onChange={(e) => setHours(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            label="Tarifa"
                            type="number"
                            fullWidth
                            size="small"
                            value={rate}
                            onChange={(e) => setRate(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            label="Descuento (%)"
                            type="number"
                            fullWidth
                            size="small"
                            value={discount}
                            onChange={(e) => setDiscount(e.target.value)}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Divider sx={{ my: 2 }} />
                    </Grid>

                    <Grid item xs={12}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                            <Typography>Subtotal:</Typography>
                            <Typography fontWeight="bold">${subtotal.toFixed(2)}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                            <Typography>Descuento:</Typography>
                            <Typography color="error">-${totalDiscount.toFixed(2)}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                            <Typography variant="h6">Total:</Typography>
                            <Typography variant="h6" color="primary">${finalTotal.toFixed(2)}</Typography>
                        </Box>
                        {parseFloat(hours) >= 5 && (
                            <Typography variant="caption" display="block" sx={{ mt: 1, color: 'text.secondary' }}>
                                * Se aplicó descuento extra del 10%
                            </Typography>
                        )}

                        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
                            <Button variant="outlined" size="small" onClick={handleReset}>Limpiar</Button>
                        </Box>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default ParkingCalculator;
