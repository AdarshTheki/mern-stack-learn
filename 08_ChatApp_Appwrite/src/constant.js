import { Client, Databases, Account } from 'appwrite';

const client = new Client();

client.setEndpoint('https://cloud.appwrite.io/v1').setProject('65389eff4bb547541fe5');

export const databases = new Databases(client);
export const account = new Account(client);

export const API_ENDPOINT = 'https://cloud.appwrite.io/v1';
export const PROJECT_ID = '65389eff4bb547541fe5';
export const DATABASE_ID = '6538a0c80c03f86ef5af';
export const COLLECTION_ID = '6538a0e375a8e015e2d9';
export const BUCKET_ID = '';

export default client;
