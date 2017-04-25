const canvas = document.getElementById('stage');
const context = canvas.getContext('2d');


context.scale(20, 20);

const matrix = [
    [0, 0, 0]
    [1, 1, 1]
    [0, 1, 0]
];

const player = {
    matrix: matrix, 
    position: {x:1, y:1}
};

function draw(){
    context.fillStyle = '#000'; // le asignamos el color al canvas
    context.fillRect(0, 0, canvas.width, canvas.height); //pasamos la posicion de renderizado
}

draw();