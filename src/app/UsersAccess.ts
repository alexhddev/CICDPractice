import { User } from "./UsersModel";
import * as dbConnection from './DataBaseConnector';



export class UsersAccess {

    public async connectToDb(){
        await dbConnection.connect();
    }

    public async closeConnection(){
        await dbConnection.close();
    }

    public async addUser(user: User) {
        const id = await dbConnection.addUser(user)
        return id;
    }

    public async getUser(id: string) {
        const result = await dbConnection.getUser(id);
        return result;
    }

    public async getAllUsers(){
        const result = await dbConnection.getAllUsers();
        return result;
    }

}