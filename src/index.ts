import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>PRUEBAS DE USO DEL CONSOLE.LOG!</h1>
<div>
  PRUEBAS DE USO DEL console.log CON PARENTESIS SOLO - CON PARENTESIS Y LLAVE Y PARENTESIS Y CORCHET ADEMAS CONSOLE.TABLE
  
</div>`;


var persona1 = {
  nombre: "Jose"
  apellido: "Garcia"
  apellido2: "Daroca"
}
console.log (persona1)
console.log ({persona1})
console.log ([persona1])
console.table([persona1])

var otracos = {
  color: "Negro"
  Superficie: "m2"
  ciudad: "Buenos Aires"
}
console.log (otracos)






