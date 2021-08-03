export type ManType = {
    name: string
    age: number
}

const people: Array<ManType> = [
    {name: 'Andrew Savchenkov', age: 31},
    {name: 'Irina Savchenkova', age: 32},
    {name: 'Marat Savchenkov', age: 4}
]

const dimychTransformator = (man: ManType) => ({
        stack: ['css,html', 'js', 'tdd', 'react'],
        firstName: man.name.split(' ')[0],
        lastName: man.name.split(' ')[1]
    })


const devs1 = [
    {
        stack: ['css,html', 'js', 'tdd', 'react'],
        firstName: 'Andrew', lastName: 'Savchenkov'
    },
    {
        stack: ['css,html', 'js', 'tdd', 'react'],
        firstName: 'Irina', lastName: 'Savchenkova'
    },
    {
        stack: ['css,html', 'js', 'tdd', 'react'],
        firstName: 'Marat', lastName: 'Savchenkov'
    }
]



const devs2 = [
    dimychTransformator(people[0]),
    dimychTransformator(people[1]),
    dimychTransformator(people[2])
];

const devs3 = people.map(dimychTransformator);

const devs4 = people.map(man => ({
    stack: ['css,html', 'js', 'tdd', 'react'],
    firstName: man.name.split(' ')[0],
    lastName: man.name.split(' ')[1]
}));

const messages = people.map(man => `Hello ${man.name.split(' ')[0]}. Welcome to Poland!`)