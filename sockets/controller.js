const controller = (socket) => {
    console.log('cliente conectado', socket.id);

    socket.on('disconnect', () =>{
        console.log('Cliente desconectado');
    })

    socket.on('enviar-mensaje', (payload, callback) =>{
        callback('todo ok')
        
        socket.broadcast.emit('enviar-mensaje', payload)
    })
}
module.exports = controller