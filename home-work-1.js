// 1. Написать функцию, вычисляющую корни квадратного уравнения

const quadraticEquation = (a, b, c = 0) => {

  if (a === 0) return console.log('Это линейное уровнение!');
  
  let res = [];
  let D = b*b - 4*a*c;
 // console.log('D=',D);
  
  if (D < 0) return console.log('Действующих корней нет!');
  let x; 

  if (D === 0) {
    x = -b/2*a;
  //  console.log('x=',x);
     res.push(x);
  }
  
  if(D > 0) {
     let x1 = (-b + Math.sqrt(D)) / (2*a);
     let x2 = (-b - Math.sqrt(D)) / (2*a);
    // console.log('x1',x1);
     //console.log('x2',x2);
     res.push(x1);
     res.push(x2);
   }
  
   console.log(res);

return res;
};

// 2. Вычислить с помощью функции из п.1 и записать в массив корни 
// уравнений:
// -4x2 + 28x - 49 = 0
// 6x2 - 54 = 0
// x2 - x = 0
// x2 - 49 = 0
// x2 - 2x - 24 = 0
const resArr = [];
resArr.push(...quadraticEquation(-4,28,-49));
resArr.push(...quadraticEquation(6,0,-54));
resArr.push(...quadraticEquation(1,-1));
resArr.push(...quadraticEquation(1,0,-49));
resArr.push(...quadraticEquation(1,-2,-24));
console.log('resArr',resArr);

// 3. Полученный массив разбить на 2 массива. В первый входят все числа >
// =0, во второй остальные.
const positiveArr = resArr.filter(number => number >= 0);
const negativeArr = resArr.filter(number => number < 0);
console.log('positiveArr',positiveArr);
console.log('negativeArr',negativeArr);

// 4. Написать 2 функции. 1я должна сортировать массив по убыванию, 2я 
// по возрастанию.
const sortDesc = (arr) => {
  let stepsCount = arr.length - 1;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < stepsCount; i += 1) {
      if (arr[i] < arr[i + 1]) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
    stepsCount -= 1;
  } while (swapped); 
  return arr;
};

const sortAsc = (arr) => {
    let stepsCount = arr.length - 1;
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < stepsCount; i += 1) {
        if (arr[i] > arr[i + 1]) {
          const temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          swapped = true;
        }
      }
      stepsCount -= 1;
    } while (swapped); 
  return arr;
};

// 5. Отсортировать (функциями из п.4) массив (из п.3) положительных 
// чисел по убыванию, массив отрицательных по возрастанию.

const sortedDescArr = sortDesc(negativeArr);
const sortedAscArr = sortAsc(positiveArr)

console.log('sortedDescArr',sortedDescArr);
console.log('sortedAscArr',sortedAscArr);