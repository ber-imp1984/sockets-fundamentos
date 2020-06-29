
    let socket = io();

        socket.on('connect', function() {
        console.log('Conectado al servidor');

        });

        // escuchar
        socket.on('disconnect', function() {
        console.log('Perdimos coneccion con el servidor');

        });

        // Enviar informacion
        socket.emit('enviarMensaje', {
        usuario: 'Eric',
            mensaje: 'Hola Mundo'
        }, function ( resp ) {
        console.log('respuesrta server: ', resp);

        });

        // Escuchar informacion
        socket.on('enviarMensaje', function(mensaje) {

        console.log('Servidor:', mensaje);

        });
