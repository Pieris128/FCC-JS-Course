/* Usa sintaxis de desestructuración para extraer valores de objetos
La sintaxis de desestructuración es una sintaxis especial introducida en ES6, para asignar los valores directamente desde un objeto.

Considera el siguiente código ES5:

const user = { name: 'John Doe', age: 34 };

const name = user.name;
const age = user.age;
name tendría una cadena con valor John Doe, y age tendría el número 34.

Aquí hay una sentencia de asignación equivalente usando la sintaxis de desestructuración de ES6:

const { name, age } = user;
De nuevo, name tendrá una cadena con valor John Doe, y age tendrá el número 34.

Aquí, las variables name y age serán creadas y se asignarán los valores respectivos a partir del objeto user. Puedes observar que esto es mucho más limpio.

Puedes extraer tantos o pocos valores del objeto como desees.
*/
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // Only change code below this line
  
  const { today, tomorrow } = HIGH_TEMPERATURES;
  
  
  // Only change code above this line