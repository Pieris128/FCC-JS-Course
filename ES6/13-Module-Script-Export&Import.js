/*

Create a Module Script
JavaScript started with a small role to play on an otherwise mostly HTML web. Today, it’s huge, and some websites are built almost entirely with JavaScript. In order to make JavaScript more modular, clean, and maintainable; ES6 introduced a way to easily share code among JavaScript files. This involves exporting parts of a file for use in one or more other files, and importing the parts you need, where you need them. In order to take advantage of this functionality, you need to create a script in your HTML document with a type of module. Here’s an example:

<script type="module" src="filename.js"></script>
A script that uses this module type can now use the import and export features you will learn about in the upcoming challenges.

Add a script to the HTML document of type module and give it the source file of index.js



*/

<html>
  <body>
       
<script type="module" src="index.js"></script>
    
  </body>
</html>

/* 
Imagine a file called math_functions.js that contains several functions related to mathematical operations. One of them is stored in a variable, add, that takes in two numbers and returns their sum. You want to use this function in several different JavaScript files. In order to share it with these other files, you first need to export it.

export const add = (x, y) => {
  return x + y;
}
The above is a common way to export a single function, but you can achieve the same thing like this:

const add = (x, y) => {
  return x + y;
}

export { add };
When you export a variable or function, you can import it in another file and use it without having to rewrite the code. You can export multiple things by repeating the first example for each thing you want to export, or by placing them all in the export statement of the second example, like this:

export { add, subtract };
*/
/*
Reuse JavaScript Code Using import
import allows you to choose which parts of a file or module to load. In the previous lesson, the examples exported add from the math_functions.js file. Here's how you can import it to use in another file:

import { add } from './math_functions.js';
Here, import will find add in math_functions.js, import just that function for you to use, and ignore the rest. The ./ tells the import to look for the math_functions.js file in the same folder as the current file. The relative file path (./) and file extension (.js) are required when using import in this way.

You can import more than one item from the file by adding them in the import statement like this:

import { add, subtract } from './math_functions.js';
*/


/*
Crear un fallback de exportación con export default
En la lección export, aprendiste sobre la sintaxis conocida como named export. Esto te permitió hacer disponibles múltiples funciones y variables para usar en otros archivos.

Aquí hay otra sintaxis export que necesitas saber, conocida como export default. Usualmente utilizarás esta sintaxis, si es sólo un valor el que está siendo exportado desde un archivo. También es utilizado para crear valores fallback para un archivo o módulo.

A continuación hay ejemplos usando export default:

export default function add(x, y) {
  return x + y;
}

export default function(x, y) {
  return x + y;
}
La primera es una función nombrada, y la segunda es una función anónima.

Ya que export default es usado para declarar un valor fallback para un módulo o archivo, sólo puedes tener un valor que sea exportación por defecto en cada módulo o archivo. Además, no puedes usar export default con var, let, o const
*/

/*
Importa una exportación por defecto
En el último desafío, aprendiste sobre export default (exportación por defecto) y sus usos. Para importar una exportación por defecto, necesita utilizar la sintaxis import de manera diferente. En el siguiente ejemplo, add es la exportación por defecto del archivo math_functions.js. A continuación, cómo importarlo:

import add from "./math_functions.js";
La sintaxis difiere en un punto clave. El valor importado, add, no está rodeado por llaves ({}). add, aquí es simplemente un nombre de variable, para cualquiera que sea la exportación por defecto del archivo math_functions.js. Puedes utilizar cualquier nombre aquí, al importar un valor por defecto.
*/
