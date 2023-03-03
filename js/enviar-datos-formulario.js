$(function(){
    $("#formulario_contacto").on("submit", function(e){
              
        // Cancelamos el evento si se requiere 
        e.preventDefault();
 
        // Obtenemos los datos del formulario 
        var f = $(this);
        var formData = new FormData(document.getElementById("formulario_contacto"));
        formData.append("dato", "valor");
               
        // Enviamos los datos al archivo PHP que procesará el envio de los datos a un determinado correo 
        $.ajax({
            url: "php/enviarcorreo.php",
            type: "post",
            dataType: "json",
            data: formData,
            cache: false,
            contentType: false,
            processData: false,
            beforeSend: function() {
              $('.msg').html("<img src='img/ajax-loader.gif' />");
            },
        })
 
        // Cuando el formulario es enviado, mostramos un mensaje en la vista HTML 
        // En el archivo enviarcorreo.php devuelvo el valor '1' el cual es procesado con jQuery Ajax 
        // y significa que el mensaje se envio satisfactoriamente. 
        .done(function (res) {                  
 
          if(res.a == "1"){
                    
            // Mostramos el mensaje 'Tu Mensaje ha sido enviado Correctamente !' 
            $(".msg").html(res.b);                   
            $("#formulario_contacto").trigger("reset");    
 
          }  else {                                       
            $(".msg").html(res.b); 
          }
                                                      
        })
 
        // Mensaje de error al enviar el formulario 
        .fail(function (res) {                    
            $(".msg").html(res.b);
        });
 
    });
});