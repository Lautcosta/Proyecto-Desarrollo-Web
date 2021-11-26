// JS para hacer cambio de dolar a la modena CoderCrypto

$(document).ready(function () {

    const url = "../js/url.json";

    $("#botoncito").click(()=>{
        
        // Ajax
           
        $.get(url,function (res,state) {

            if (state === "success"){

                let usdt =  parseInt($("#input1").val());

                let calculo = usdt / res.Precio;
                
                document.getElementById('input2').value = calculo;


            }

            },
        );
     
    })

});
