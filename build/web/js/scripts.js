/*Script que se ejecutan al comienzo del programa */
$(document).ready( function() {
    
    /* manda a traves de formulario el numero de operacion a ejecutar.*/
    $(".boton").button().click(function() {
        enviar();
    });

    function enviar() {
        usuario = $(".codigo").val();
        $.ajax({
            type: "GET",
            url: "Servidor",
            data: 'op='+usuario,
            success: function(msg) {
                $("#resultado").html(msg);
            }
        });
    }
    /*cada 3 segundos se ejecuta la funcion estado */
    setInterval(estado, 3000);  

    /*Funcion para ver el usuario actual*/
    $(function() {
        $( "#usuarioActual" ).dialog({
          autoOpen: false,
          show: {
            effect: "fold", /*Forma de abrirse*/
            duration: 100
          },
          hide: {
            effect: "clip", /*Forma de cerrarse*/
            duration: 100
          }
        });
     
        $( "#botonInfoUsuario" ).click(function() {            
            $( "#usuarioActual" ).dialog( "open" );
        });
        
    });//fin de ver el usuario actual conectado

    /*menu con pestañas en la pagina de administracion */
    $(function() {
        $( "#tabsAdmin" ).tabs();
    });
    
    //***FUNCIONES PARA LOS BOTONES DEL PANEL DE ADMINISTRACION***//
    
    //BOTONES OWNCLOUD
    /*Funcion para reiniciar owncloud*/
    $( "#botonReiniciarOwncloud" ).click(function() {            
            $.ajax({ 
                    type: "GET",
                    url: "Servidor",
                    data: 'op=3', //La operación 3 ejecuta un script para hacer un backup de owncloud
                    success: function(msge) {
                        $("#resultado").html(msge);
                    }
                });
    }); //Fin de funcion para reiniciar owncloud
    
    /*Funcion para parar owncloud*/
    $( "#botonPararOwncloud" ).click(function() {            
            $.ajax({ 
                    type: "GET",
                    url: "Servidor",
                    data: 'op=2', //La operación 3 ejecuta un script para hacer un backup de owncloud
                    success: function(msge) {
                        $("#resultado").html(msge);
                    }
                });
    }); //Fin de funcion para parar owncloud
    
    /*Funcion para arrancar owncloud*/
    $( "#botonIniciarOwncloud" ).click(function() {            
            $.ajax({
                    type: "GET",
                    url: "Servidor",
                    data: 'op=4', //La operación 3 ejecuta un script para hacer un backup de owncloud
                    success: function(msge) {
                        $("#resultado").html(msge);
                    }
                });
    }); //Fin de funcion para arrancar owncloud
    
    //BOTONES OPENTHINCLIEN
    /*Funcion para reiniciar OPENTHINCLIENT*/
    $( "#botonReiniciarThinClient" ).click(function() {            
            $.ajax({ 
                    type: "GET",
                    url: "Servidor",
                    data: 'op=5', 
                    success: function(msge) {
                        $("#resultado").html(msge);
                    }
                });
    }); //Fin de funcion para reiniciar OPENTHINCLIENT
    
    /*Funcion para parar OPENTHINCLIENT*/
    $( "#botonPararThinClient" ).click(function() {            
            $.ajax({ 
                    type: "GET",
                    url: "Servidor",
                    data: 'op=6', 
                    success: function(msge) {
                        $("#resultado").html(msge);
                    }
                });
    }); //Fin de funcion para parar OPENTHINCLIENT
    
    /*Funcion para arrancar OPENTHINCLIENT*/
    $( "#botonIniciarThinClient" ).click(function() {            
            $.ajax({
                    type: "GET",
                    url: "Servidor",
                    data: 'op=7', 
                    success: function(msge) {
                        $("#resultado").html(msge);
                    }
                });
    }); //Fin de funcion para arrancar OPENTHINCLIENT
    //***FINAL DE FUNCIONES BOTONES DE ADMINISTRACION***//
    
}); //Fin de document.ready

/*La funcion estado cada 3 segundos envia una peticion para conocer el estado de los servidores*/
function estado() {        
        $.ajax({
            type: "GET",
            url: "Servidor",
            data: 'op=1', //La operación 1 ejecuta un script para ver los estados de servidores
            success: function(msg) {
                $("#resultado").html(msg);
            }
        });
    }
