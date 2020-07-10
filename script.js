/*Precisamos do javascript para fazer que o scroll do mouse funcione tambem*/

// Help
function log(message) {
  return console.log('> ', message);
};

//Estou pegando o items porque ele e responsavel pelo scroll
document.querySelector('#items')
  .addEventListener('wheel', event => {
     if (event.deltaY > 0) {
       event.target.scrollBy(300, 0)
       // O target e o #items
       // Eixo "X" 300px, e Eixo "Y" 0px
     } else {
       event.target.scrollBy(-300, 0)
     }
  });

// Se o valor do deltaY for positivo quer dizer que fez o scroll up se não foi o scroll down


