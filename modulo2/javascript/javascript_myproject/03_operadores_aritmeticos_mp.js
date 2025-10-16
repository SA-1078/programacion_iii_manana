console.log("OPERADORES ARITMETICOS - Cálculos de Venta:");

precioMoto = 20000;
descuento = 5000;
console.log("suma");
precioAccesorios = precioMoto + descuento;
console.log("Precio total con accesorios:", precioAccesorios);
console.log("resta");
precioFinal = precioMoto - descuento;
console.log("Precio final con descuento:", precioFinal);
console.log("multiplicacion");
cantidadMotos = precioMoto * 2;
console.log("Precio por dos motos:", cantidadMotos);
console.log("division");
pagoMensual = precioMoto / 12;
console.log("Pago mensual en 12 cuotas:", pagoMensual);
console.log("modulo");
restoCuota = precioMoto % 12;
console.log("Resto de la división en cuotas:", restoCuota);
console.log("Potencia");
valorFuturo = precioMoto ** 2;
console.log("Valor futuro estimado:", valorFuturo);


console.log("OPERADORES DE COMPARACION - Verificación de Precios:");  
console.log("Comparar precio '20000' == 20000:", "20000" == 20000);
console.log("Comparar precio estricto '20000' === 20000:", "20000" === 20000);
console.log("Precio diferente '20000' != 20000:", "20000" != 20000);
console.log("Precio estrictamente diferente '20000' !== 20000:", "20000" !== 20000);
console.log("Precio mayor que >", 20000 > 15000);
console.log("Precio menor que <", 15000 < 20000);
console.log("Precio mayor o igual que >=", 20000 >= 20000);
console.log("Precio menor o igual que <=", 15000 <= 20000);


console.log("OPERADORES LOGICOS - Validaciones de Venta:");
console.log("Verificar precio y stock &&", "20000" <= 25000 && "5" >= 1);
console.log("Verificar descuento o promoción ||", "15000" <= 20000 || "3" >= 1);
console.log("Negar disponibilidad !", !(20000 == 20000));