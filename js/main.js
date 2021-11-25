$(document).ready(function () {
    
    


    const url = "../js/url.json";

    $("#botoncito").click(()=>{

        let usdt = parseInt(document.getElementById("input1").value);
        
        $.get(url,function (respuesta,estado) {

            if (estado === "success"){

                let calculo = usdt / respuesta.Precio;
                
                document.getElementById('input2').value = calculo;

                

            }

            },
        );


        

    })



});