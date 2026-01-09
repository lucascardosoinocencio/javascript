const person = {
    firstName: 'Lucas',
    lastName: 'Cardoso',
    age: "27",
    hobbies: ['Musculação', 'Jogar jogos no PC', 'Estudar'],
    dog: {
        name: "Darkao",
        age: 4,
    },
};

//const firstName = person.firstName;
//const lastName = person.lastName;
//const age = person.age;
//const hobbies = person.hobbies;

const { firstName: primeiroNome, lastName, age, hobbies, dog: { name: dogName},
} = person;

const read = person.hobbies[2]


console.log(primeiroNome);
console.log(lastName);
console.log(age);
console.log(hobbies);

person.dog = 'Darkao'

console.log(person.dog.age);
console.log(dogName)

