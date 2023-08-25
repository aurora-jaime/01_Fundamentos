console.log('Hola');
//console.log('Hola');

const direccion = {
    calle: 'Juarez', 
    numero: 76,
    ciudad: 'Guadalajara',
    estado: 'Jalisco',
    coors: {
        lat: 1234.45,
        alt: 5667.45

    }
   };
   
   console.log(direccion.calle);
   
   //Agregar codigo postal 
   direccion.cp = "45016";

let obj2 = new Object();
console.log('obj2'+ obj2);

let obj3 = Object.create({x:1,y:2});

console.log(obj3.x+obj3.y);
console.log(obj3.x);
console.log(obj3.y);


console.log(Object.keys(direccion));
console.log(Object.values(direccion));  
console.log(Object.entries(direccion));

console.log(direccion.coors.lat);

let arr = ['a', 'b', 'c'];
console.log('');
for (let elem of arr ){
    console.log(elem);
}

console.log('');

for (let p of Object.keys(direccion) ){
    console.log(p);
}

console.log('');

for (let v of Object.values(direccion) ){
    console.log(v);
}

console.log('');

   