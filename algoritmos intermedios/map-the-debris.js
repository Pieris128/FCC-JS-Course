/**
 * Map the Debris
Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

You can read about orbital periods on Wikipedia.

The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.
 */

function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    let oP = 0;
    let newArr = [];
  for ( let n in arr){
    oP = Math.round((2 * Math.PI)*Math.sqrt(Math.pow(earthRadius + arr[n].avgAlt, 3)/GM));
  newArr.push({name: arr[n].name, orbitalPeriod: oP})
  }
  return newArr;
  console.log(newArr)
  
  }
  
  orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])
  