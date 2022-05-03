// 1. Написать функцию, вычисляющую корни квадратного уравнения

const quadraticEquationSolution = (a, b, c) => {
  
  if (a = 0) return console.log('Это линейное уровнение!');
  
  let res = [];
  const D = Math.pow(b, 2) − 4*a*c;
  
  if (D < 0) return console.log('Действующих корней нет!');
  
  if (D = 0) {
    let x1 = −b/2a;
     res.push(x1);
  }
  
   else if(D > 0) {
     let x1 = (-b + Math.sqrt(D)) / 2*a;
     let x2 = (-b - Math.sqrt(D)) / 2*a;
     res.push(x1);
     res.push(x2);
   }
  
return res;
};
