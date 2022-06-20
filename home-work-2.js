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

const summOfSalary = (obj) => {
    
}
