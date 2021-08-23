import {
    addNewBooksToUser,
    makeHairstyle,
    moveUser, moveUserToOtherHouse,
    upgradeUserLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType
} from "./10_01";



test('reference type test', () => {
    let user: UserType ={
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        }
    }

    const awesomeUser = makeHairstyle(user, 2)
    user.address.city = 'Kiev';


    expect(user.hair).toBe(32)
    expect(awesomeUser.hair).toBe(16)
    expect(awesomeUser.address).toBe(user.address)
})

test('change address test', () => {
    let user: UserWithLaptopType ={
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        }
    }

    const movedUser = moveUser(user, 'Kiev')


    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(movedUser.address.city).toBe('Kiev')
    expect(movedUser.laptop).toBe(user.laptop)
    expect(movedUser.address.city).not.toBe(user.address.city)
    expect(user.address.city).toBe('Minsk')
    expect(user.address.house).toBe(movedUser.address.house)

})

test('upgrade laptop to  macbook', () => {

    let user: UserWithLaptopType ={
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        }
    }

    const movedUser = upgradeUserLaptop(user, 'Macbook')


    expect(user).not.toBe(movedUser)
    expect(user.address).toBe(movedUser.address)
    expect(movedUser.laptop).not.toBe(user.laptop)
    expect(movedUser.laptop.title).toBe('Macbook')
    expect(user.laptop.title).toBe('ZenBook')


})

test('change house', () => {

    let user: UserWithLaptopType & UserWithBooksType ={
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css','html','js','react']
    }

    const copyUser = moveUserToOtherHouse(user, 666)


    expect(user).not.toBe(copyUser)
    expect(user.books).toBe(copyUser.books)
    expect(user.address).not.toBe(copyUser.address)
    expect(copyUser.laptop).toBe(user.laptop)
    expect(copyUser.address.house).toBe(666)
    expect(user.address.house).toBe(12)


})

test('add new books to user', () => {

    let user: UserWithLaptopType & UserWithBooksType ={
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css','html','js','react']
    }

    const copyUser = addNewBooksToUser(user,['ts', 'rest api'])


    expect(user).not.toBe(copyUser)
    expect(user.address).toBe(copyUser.address)
    expect(copyUser.laptop).toBe(user.laptop)
    expect(copyUser.books).not.toBe(user.books)
    expect(copyUser.books[4]).toBe('ts')
    expect(copyUser.books[5]).toBe('rest api')
    expect(copyUser.books).toStrictEqual(['css','html','js','react','ts','rest api'])
    expect(user.books).toStrictEqual(['css','html','js','react'])





})

test('update js to ts', () => {

    let user: UserWithLaptopType & UserWithBooksType ={
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css','html','js','react']
    }

    const copyUser = addNewBooksToUser(user,['ts', 'rest api'])


    expect(user).not.toBe(copyUser)
    expect(user.address).toBe(copyUser.address)
    expect(copyUser.laptop).toBe(user.laptop)
    expect(copyUser.books).not.toBe(user.books)
    expect(copyUser.books[4]).toBe('ts')
    expect(copyUser.books[5]).toBe('rest api')
    expect(copyUser.books).toStrictEqual(['css','html','js','react','ts','rest api'])
    expect(user.books).toStrictEqual(['css','html','js','react'])





})