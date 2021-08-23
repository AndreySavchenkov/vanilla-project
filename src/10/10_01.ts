export type UserType = {
    name: string
    hair: number
    address: { city: string, house: number }
}
export type LaptopType = {
    title: string
}
export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}
export type UserWithBooksType = UserType & {
    books: Array<string>
}



export const makeHairstyle = (u: UserType, power: number) => {
    const copy = {
        ...u,
        hair: u.hair / power,
    }

    return copy
}

export const moveUser = (user: UserWithLaptopType, city: string) => {
    return {
        ...user,
        address: {
            ...user.address,
            city: city
        }
    }

}

export const moveUserToOtherHouse = (user: UserWithLaptopType & UserWithBooksType, house: number) => {
    return {
        ...user,
        address: {
            ...user.address,
            house: house
        }
    }

}

export const upgradeUserLaptop = (user: UserWithLaptopType, laptop: string) => {
    return {
        ...user,
        laptop: {
            ...user.laptop,
            title: laptop
        }
    }
}

export const addNewBooksToUser = (user: UserWithLaptopType & UserWithBooksType, books: Array<string>) => {
    return {
       ...user,
        books: [...user.books.concat(books)]

    }
}

