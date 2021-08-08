export const ussersArray = ['Dimuch', 'Natali', 'Valera', 'Katya'];

export const usersObj = {
    '0': 'Dimuch',
    '1': 'Natali',
    '2': 'Valera',
    '3': 'Katya'
}

export type UsersType = {
    [key: string]: {id: number, name: string}
}

export const users: UsersType = {
    '101': {id: 101, name: 'Dimuch'},
    '1212': {id: 1212, name: 'Natali'},
    '112': {id: 112, name: 'Valera'},
    '12': {id: 12, name: 'Katya'}
}

//users[1]
//const user = {id: 100500, name: 'Igor'};
//users[user.id] = user;                       //все происходит максимально быстро O(1)
//delete users[user.id]
//users[user.id].name = 'Vitya'

export const usersArray = [
    {id: 101, name: 'Dimuch'},
    {id: 1212, name: 'Natali'},
    {id: 112, name: 'Valera'},
    {id: 12, name: 'Katya'}
]

//usersArray.find(u => u.id ===1)
//const usersCopy = [...usersArray.filter(),user]            //медленно O(N)
//const usersArray = userArray.filter(u=>u.id !== user.id)