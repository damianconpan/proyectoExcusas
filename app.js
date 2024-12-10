window.onload = function () {
    let quien = ['un perro ', 'mi abuela ', 'batman ', 'el policia ', 'un vegetariano ', 'el estado '];
    let accion = ['se comió ', 'se robó ', 'cocinó ', 'degolló ', 'rompió ', 'orinó ', 'bombardeo '];
    let que = ['mi tarea ', 'mi telefono ', 'a mi gato ', 'mi proyecto de excusas ', 'mi casa '];
    let cuando = ['justo antes de clases ', 'el domingo por la tarde ', 'hace 5 minutos ', 'ayer por la noche '];
    let donde = ['cuando visitaba a mi tia', 'mientras viajaba en metro', 'justo cuando salí del trabajo',', y yo en el supermercado'];



    let random1 = Math.floor(Math.random() * quien.length);
    let random2 = Math.floor(Math.random() * accion.length);
    let random3 = Math.floor(Math.random() * que.length);
    let random4 = Math.floor(Math.random() * cuando.length);
    let random5 = Math.floor(Math.random() * donde.length);


    document.querySelector('#excusa').innerHTML = quien[random1] + accion[random2] + que[random3] + cuando[random4] + donde[random5];



}

document.querySelector('#generar').addEventListener('click', function () {
    if (typeof window.onload === 'function') {
        window.onload();
    }
});
