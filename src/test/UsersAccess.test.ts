import { UsersAccess } from "../app/UsersAccess"
import { User } from "../app/UsersModel";


describe('UsersAccess test suite', () => {
    
    let usersAccess: UsersAccess;

    const someUser: User = {
        name: 'Some User',
        position: 'Engineer',
        employedAt: new Date()
    }

    beforeAll(async () => {
        usersAccess = new UsersAccess();
        await usersAccess.connectToDb();
    })

    let userId: string
    test('insert a user', async () => {
        userId = await usersAccess.addUser(someUser)
        const a = 5;
    });

    test('find user', async () => {
        const retrievedUser = await usersAccess.getUser(userId);
        const a = 5;
        expect(retrievedUser).toEqual(someUser);
    })

    afterAll(async () => {
        await usersAccess.closeConnection();
    })
})