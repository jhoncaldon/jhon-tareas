let div = document.querySelector('div');
let boton = document.getElementById('boton')



boton.addEventListener('click',bienvenido);
boton.addEventListener('click',informacion);

function colores(){
    console.log('entro -->');
   window.location.href='https://developer.mozilla.org/es/docs/Glossary/DOM';
    // div.innerHTML = 'esto lo trae el javascript'
    div.style.marginTop = '50px'
    div.style.background = 'aliceblue'

}

function bienvenido(){
        alert('Bienvenido a mi pagina');
}


function informacion(){
    alert('adios')
}
