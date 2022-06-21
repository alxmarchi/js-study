// 1.	Дан массив пользователей:
//     let users = [{ name: "Петя", age: 22 }, { name: "Вася", age: 31 }, { name: "Маша", age: 25 }, { name: "Ира", age: 15 }, { name: "Андрей", age:31}, { name: "Света", age:25}]
// Необходимо:
//     Добавить в него 2х новых пользователей с не пустым именем и возрастом.
//     Удалить из него всех пользователей с возрастом 22.
// Отсортировать массив по полю age в порядке возрастания, если возраст у нескольких пользователей одинаковый их отсортировать алфавитном порядке по name.
//     Добавить каждому пользователю поле salary типа number (значения присвоить любые).
// Написать функцию подсчета суммы зарплат всех пользователй.

let users = [
    { name: "Петя", age: 22 },
    { name: "Вася", age: 31 },
    { name: "Маша", age: 25 },
    { name: "Ира", age: 15 },
    { name: "Андрей", age:31},
    { name: "Света", age:25}
];

let newUsers = [
    { name: "Витя", age: 29 },
    { name: "Вика", age: 24 }
]
users.push(...newUsers);

users.forEach(user => {
    if (user['age'] === 22) {
        const index = users.indexOf(user);
        users.splice(index,1);
    }
});

const sortBy = (a,b) => {
    if (a.age > b.age) {
        return 1;
    };

    if (a.age === b.age) {
       
        if (a.name > b.name) {
            return 1;
        }

        else return -1;
    }
    
    else return -1;
};

users.sort(sortBy);

// users.sort((a, b) => a.name < b.name);



users.forEach(user => {
    user['salary'] = Math.floor(0.5 + Math.random() * (100 + 1));
});

console.log(users)

const summOfSalary = (arrayOfUsers) => {
    const summ = arrayOfUsers.reduce((acc, {salary})=> {
        return acc + salary;
    },0)

    return summ;
};

const summ = summOfSalary(users);
console.log(summ);

// 2.	Напишите функцию isObject, которая проверяет, является ли элемент именно объектом.

const isObjectCheck = (element) => {

    return (typeof element === 'object');
};

console.log(isObjectCheck({ name: "Петя", age: 22 }));

// 3.	Напишите функцию, которая находит пересечение двух объектов и возвращает новый объект этого пересечения.

const findIntersection = (obj1, obj2) => {

    const intersection ={};
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    const entries1 = Object.entries(obj1);
    const entries2 = Object.entries(obj2);
    //console.log(entries2)
    for (const [key, value] of entries2) {

       console.log([key, value])
        console.log(entries2[key])
        if (entries2[key] === value ) {
            intersection[key] = value
        }
    }

    return intersection;
};

console.log(findIntersection({ name: "Петя", age: 22 },{ name: "Петя22", age: 22 }))