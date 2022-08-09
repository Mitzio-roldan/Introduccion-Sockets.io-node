const online = document.querySelector('#online')
const offline = document.querySelector('#offline')
const btnEnviar = document.querySelector('#btnEnviar')
const txtMensaje = document.querySelector('#txtMensaje')


const socket = io();

socket.on('connect', () =>{
    
    online.style.display = ''
    offline.style.display = 'none'
})

socket.on('disconnect', () =>{
    
    online.style.display = 'none'
    offline.style.display = ''
})

socket.on('enviar-mensaje', (payload) =>{
    console.log(payload);
})

btnEnviar.addEventListener('click', () =>{
    const mensaje = txtMensaje.value
    const payload = {
        mensaje
    }
    socket.emit('enviar-mensaje', mensaje, (id) =>{
        console.log('Desde el server', id);
    })
})