const ventas = require('./datos.js');

function valorVenta(venta) {
    return venta.cantidad * venta.precio;
}

function totalVendido(ventas) {
    let total = 0;
    for (const venta of ventas) {
        if (venta.cantidad > 0) {
            total += valorVenta(venta);
        }
    }
    return total;
}

function unidadesVendidas(ventas) {
    let unidades = 0;
    for (const venta of ventas) {
        if (venta.cantidad > 0) {
            unidades += venta.cantidad;
        }
    }
    return unidades;
}

function ventaMayor(ventas) {
    let mayor = ventas[0];
    for (const venta of ventas) {
        if (valorVenta(venta) > valorVenta(mayor)) {
            mayor = venta;
        }
    }
    return mayor;
}

function tikectPromedio(venta) {
    return totalVendido(venta) / unidadesVendidas(venta);
}

function normalizarTexto(texto) {
    return limpio = texto.normalize('NFD').replace(/\p{M}/gu, '').toLowerCase().trim()
}
function capitalizar(palabra) {
    return palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase()
}

function ventasPorCiudad(ventas, ciudad) {
    let ventasCiudad = 0;
    const ciudadBuscada = normalizarTexto(ciudad)
    for (const venta of ventas) {
        if (normalizarTexto(venta.ciudad) === ciudadBuscada && venta.cantidad > 0) {
            ventasCiudad += valorVenta(venta);
        }
    }
    return ventasCiudad;
}




console.log("Total Vendido: $", totalVendido(ventas));
console.log("Unidades Vendidas:", unidadesVendidas(ventas));
console.log("Venta Mayor:", ventaMayor(ventas));
console.log("Ventas en ", capitalizar("medellin"), ": $", ventasPorCiudad(ventas, "medellín"));



