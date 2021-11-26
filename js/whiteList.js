
// Array vacio donde se guardan los datos que ingrese el usuario por el form
const personas = [];


//Funcion para Mostrar a las Personas
function mostrarPersonas(){
    let texto = '';
    for(let persona of personas){
        texto += `<li> ◾ Name : ${persona.nombre} ◾ Last Name : ${persona.apellido} ◾ Email : ${persona.correo}</li> `
    }
    document.getElementById("personass").innerHTML = texto;

}

const boton = document.getElementById("botoncito");
boton.addEventListener('click',agregarPersona)


// Funcion donde se envia los datos del form al array
function agregarPersona(){
    const forma = document.forms["forma"];
    const nombre = forma["nombre"];
    const apellido = forma["apellido"];
    const email = forma["email"];
    if (nombre.value != '' && apellido.value != '' && email.value != ''){
         const persona = new Persona(nombre.value, apellido.value, email.value);
         console.log(persona);
         personas.push(persona);
        mostrarPersonas();
    }else{
        console.log('Datos vacios')
    }
}
    


window.onload = mostrarPersonas();
