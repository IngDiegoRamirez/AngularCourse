var prom = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Procesado");
        //resolve();
        reject();
    }, 1500);
});
prom.then(function () {
    console.log("Termino bien !!");
}, function () {
    console.log("Termino mal !!");
});
