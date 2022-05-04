// 1. Написать функцию, вычисляющую корни квадратного уравнения

const quadraticEquation = (a, b, c = 0) => {

  if (a === 0) return console.log('Это линейное уровнение!');
  
  let res = [];
  let D = b*b - 4*a*c;
  
  if (D < 0) return console.log('Действующих корней нет!');
  let x; 

  if (D === 0) {
    x = -b/2*a;
     res.push(x);
  }
  
  if(D > 0) {
     let x1 = (-b + Math.sqrt(D)) / (2*a);
     let x2 = (-b - Math.sqrt(D)) / (2*a);
     res.push(x1);
     res.push(x2);
   }

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
console.log('TASK 2');
console.log('Массив корней уровнений: ',resArr);

// 3. Полученный массив разбить на 2 массива. В первый входят все числа >
// =0, во второй остальные.
console.log('TASK 3');

const positiveArr = resArr.filter(number => number >= 0);
const negativeArr = resArr.filter(number => number < 0);
console.log('positiveArr',positiveArr);
console.log('negativeArr',negativeArr);

// 4. Написать 2 функции. 1я должна сортировать массив по убыванию, 2я 
// по возрастанию.

// по убыванию
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

// по возростанию
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
console.log('TASK 5');

const sortedDescArr = sortDesc(positiveArr);
const sortedAscArr = sortAsc(negativeArr)

console.log('Положительные по убыванию: ',sortedDescArr);
console.log('Отрицательные по возрастанию: ',sortedAscArr);

// 6. Конкатенировать полученные массивы.
console.log('TASK 6');

const concatedArr = sortedDescArr.concat(sortedAscArr);
console.log(concatedArr);

// 7. Написать функцию, возводящую число в квадрат.
const squared = (x) => x*x;

// 8. Получить массив, элементы которого – квадраты чисел массива из п.6.
console.log('TASK 8');

const squaredArr = concatedArr.map(elem =>squared(elem));
console.log(squaredArr);

// 9. Написать функцию, удаляющую повторяющиеся элементы.
const dropRepeatedElems = (arr) => {

  const withoutRepArr = arr.reduce((acc, el)=>{
    if (acc.includes(el)) return acc;
else {
  acc.push(el);
  return acc;
};
  },[]);
return withoutRepArr;
}

// 10. Массив полученный в п.8 прогнать через функцию п.9.
console.log('TASK 10');
const withoutRepArr = dropRepeatedElems(squaredArr);
console.log(withoutRepArr);
