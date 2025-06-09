import { config } from '../constant';
import { Client, Account, ID } from 'appwrite';

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client.setEndpoint(config.appWriteUrl).setProject(config.appWriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        try {
            const userId = ID.unique();
            const userAccount = await this.account.create(userId, email, password, name);
            if (userAccount) {
                // create user verify email to email user
                await this.account.createVerification(userId);
                alert('send to verify in your email');

                // call to login method to create session method
                return this.login({ email, password });
            } else {
                return userAccount;
            }
        } catch (error) {
            console.log('Appwrite serive :: createAccount :: error', error);
        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            console.log('Appwrite serive :: login :: error', error);
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log('Appwrite serive :: getCurrentUser :: error', error);
        }
        return null;
    }

    async logout() {
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.log('Appwrite serive :: logout :: error', error);
        }
    }
}

export const authServices = new AuthService();
