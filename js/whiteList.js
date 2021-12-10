// ----------------------- Variables y Constantes -----------------------

const forma = document.forms["forma"];
const nombre = forma["nombre"];
const apellido = forma["apellido"];
const email = forma["email"];

// Array vacio donde se guardan los datos que ingrese el usuario por el form
let personas = [];


// ----------------------- Funciones -----------------------


// Funcion donde se envia los datos del form al array

function agregarPersona(){


    if (nombre.value != '' && apellido.value != '' && email.value != ''){
         let persona = new Persona(nombre.value, apellido.value, email.value);
         
         personas.push(persona); 

         localStorage.setItem("clave",JSON.stringify(personas));

         
         imprimirPersonas();

         
    }else{
        console.log('Datos vacios')
    }

   
}

//Funcion para Mostrar a las Personas

 function imprimirPersonas(){
    
    let imprimir = JSON.parse(localStorage.getItem("clave"));

    if(imprimir != undefined){

        console.log("defined")
        

        imprimir.forEach(element => {
            console.log(element)
            
             impresion.innerHTML += `<li>◾ Name : ${element._nombre} ◾ Last Name : ${element._apellido} ◾ Email : ${element._correo}</li>`
        });


    }else{
        console.log("undefined")
    }

}



// ----------------------- Eventos -----------------------


// Evento click
const boton = document.getElementById("botoncito");
boton.addEventListener('click',agregarPersona)

// Evento para que todo se termine de cargar y luego iniciar

window.onload = agregarPersona();
window.onload = imprimirPersonas();
