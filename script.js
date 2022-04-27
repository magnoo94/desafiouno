let manzana = 5
let platano = 10
let naranja = 7
let uva = 8
let sandia = 15
let producto

alert("Tenemos manzanas, platanos, naranjas, uvas y sandias")





do {
    let producto = prompt("Elige una fruta")
    cantidad = parseInt(prompt("que cantidad de frutas quieres?"))


    if (producto == "manzana") {
        costo = manzana * cantidad
    } else if (producto == "platano") {
        costo = platano * cantidad
    } else if (producto == "naranja") {
        costo = naranja * cantidad
    } else if (producto == "uva") {
        costo = uva * cantidad
    } else if (producto == "sandia") {
        costo = sandia * cantidad
    } else {
        alert("producto invalido!")
    }

}
while (producto >= 1 && cantidad <= 50)

switch (costo) {
    case "manzana":
        document.write(manzana * cantidad)
        break
    case "platano":
        document.write(platano * cantidad)
        break
    case "naranja":
        document.write(naranja * cantidad)
        break
    case "uva":
        document.write(uva * cantidad)
        break
    case "sandia":
        document.write(sandia * cantidad)
        break
    default:
        document.write("El costo total es", " " + costo)
        break
}


console.log(costo)
