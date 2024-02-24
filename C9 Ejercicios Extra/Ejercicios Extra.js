/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:
  let array = Object.entries(objeto)
  return array
}

function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:
  let objeto = {};
  string = string.split("").sort();

  for(const i of string){
    let con = 0;
    string.forEach((e)=>{
      if(e===i){
        con++;
      }
    });
    if(con != 0 && !(i in objeto)){
      objeto[i] = con;
    }
  }

  return objeto
}

function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:
  let stringArray = string.split("");
  let mayus = stringArray.map((e) => e === e.toUpperCase() ? e : null);
  let minus = stringArray.map((e) => e === e.toLowerCase() ? e : null);
  return mayus.join("")+minus.join("");
}


function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:
  let array = frase.split(" ");
  let acu = "";

  for(const e of array){
    let arrayE = e.split("");
    arrayE = arrayE.reverse();
    acu = acu + arrayE.join("")+" ";
    console.log(acu)
  }
  return acu.trim()
}
//console.log(asAmirror("The Henry Challenge is close!"))

function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:

  let arrayNum = numero.toString().split("");
  console.log("Original: "+arrayNum)
  console.log("Reverse: "+arrayNum.reverse())

  if(arrayNum.join("") === arrayNum.reverse().join("")){
    return "Es capicua"
  } else {
    return "No es capicua"
  }
}


function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:
  
  return string.split("").map((e)=> e=="a" || e=="b" || e=="c" ? null : e).join("")
}

//console.log(deleteAbc("abcefgh"))

function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:

  let newArray = arrayOfStrings.sort((a, b)=>{
    if(a.length > b.length){
      return 1
    } else if(a.length < b.length){
      return -1
    }
    return 0
  })
  return newArray
}
//console.log(sortArray(["You", "are", "beautiful", "looking"]))

function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:
  let arrayFinal = []
  for(const a1 of array1){
    for(const a2 of array2){
      //console.log(" A1 ",a1)
      //console.log(" A2 ",a2)
      if(a1 === a2 && (!(arrayFinal.includes(a1)) && !(arrayFinal.includes(a2)))){
        arrayFinal.push(a1);
      }
    }
  }

  if(arrayFinal.length > 0){
    return arrayFinal
  } 
  return []
}

//console.log(buscoInterseccion([4,2,3],[1,3,4,4,7]))

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
