function activar(quien, objeto, momento) {
    if (objeto === void 0) { objeto = "sensor"; }
    var mensaje;
    if (momento) {
        mensaje = quien + " activ\u00F3 el " + objeto + " en la " + momento;
    }
    else {
        mensaje = quien + " activ\u00F3 el " + objeto;
    }
    console.log(mensaje);
}
activar("Diego", "auto");
