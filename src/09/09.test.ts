function increaseAge(u: UserType) {
    u.age++;
}

type UserType = {
    name: string
    age: number
}

test('reference type test', () => {


    const user = {
        name: 'Andrew',
        age: 31
    }

    increaseAge(user);

    expect(user.age).toBe(32)

    const superman = user;

    superman.name = 'Andreyka'

    expect(user.name).toBe('Andreyka')

});

test('array reference test', () => {
    const users = [
        {
            name: 'Andrew',
            age: 31,
        },
        {
            name: 'Ira',
            age: 33
        }
    ]

    const usersCount = 100;

    const adminsCount = usersCount;

    const admins = users;
    admins.push({name: 'Bandygan', age: 10})

    expect(users[2]).toEqual({name: 'Bandygan', age: 10})
})

test('array reference test', () => {
    const user = {
        name: 'Andrew',
        age: 31,
        address: {
            title: 'Grodno'
        }
    }

    let addr = user.address;

    const user2 = {
        name: 'Petya',
        age: 30,
        address: addr
    }

    expect(user2.address.title).toBe('Grodno')
})

test('array reference test', () => {
    const user = {
        name: 'Andrew',
        age: 31,
        address: {
            title: 'Grodno'
        }
    }

    const addr = user.address

    const user2 = {
        name: 'Petya',
        age: 30,
        address: addr
    }

    const users = [user,user2,{name: 'Vasya', age: 36, address: addr}]

    const admins =[user, user2]

    admins[0].name='Andryxa'


    expect(user.name).toBe('Andryxa')
})