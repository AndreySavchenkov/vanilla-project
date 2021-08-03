import {ManType} from "./05_01";


let people: Array<ManType> = []

beforeEach(() => {
    let people = [
        {name: 'Andrew Savchenkov', age: 31},
        {name: 'Irina Savchenkova', age: 32},
        {name: 'Marat Savchenkov', age: 4}
    ]
})

test('should get array of greeting messages', () => {


    const messages = people.map(man => `Hello ${man.name.split(' ')[0]}. Welcome to Poland!`)

    expect(messages.length).toBe(3);
    expect(messages[0]).toBe('Hello Andrew. Welcome to Poland!')
    expect(messages[1]).toBe('Hello Irina. Welcome to Poland!')
    expect(messages[2]).toBe('Hello Marat. Welcome to Poland!')
})