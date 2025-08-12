
//process.argv[2]
const args1 = process.argv[2];//imprime la primera palabra o argumento
console.log(args1);
const args2 = process.argv[3]; //imprime la segunda palabra o argumento
console.log(args2);
const args3 = process.argv[4]; //imprime la tercera palabra o argumento
console.log(args3);
const args4 = process.argv[5]; //imprime la cuarta palabra o argumento
console.log(args4);
const args5 = process.argv[6]; //imprime la quinta palabra o argumento
console.log(args4);

const args = process.argv.slice(2); //imprimira todo en un array
console.log(args);

//Probamos estos ejercicios
/*
1) node argv2.js 'texto enviado desde la terminal'
2) node argv2.js "Jose Valdez" 754727 test-1-2-3 true
*/