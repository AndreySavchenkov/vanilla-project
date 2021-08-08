

export type UsersType = {
    [key: string]: {id: number, name: string}
}

export let users: UsersType

beforeEach(()=> {

    users= {
        '101': {id: 101, name: 'Dimuch'},
        '1212': {id: 1212, name: 'Natali'},
        '112': {id: 112, name: 'Valera'},
        '1': {id: 12, name: 'Katya'}
    }
})

test('should update corresponding user from obj', ()=>{
    users[1].name = 'Ekaterina';

    expect(users[1].name).toBe('Ekaterina')

})