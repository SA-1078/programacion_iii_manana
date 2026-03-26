try{
    console.log(motoNoRegistrada);
}catch(error){
    console.log("Error: Moto no encontrada en inventario:", error.message)
}

try {
    console.log("Verificando disponibilidad de moto...");
    throw new Error("Modelo de moto no disponible")
} catch (error){
    console.log("Error en la búsqueda:", error.message);
} finally {
    console.log('Finalizando verificación de inventario');
}