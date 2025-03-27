import express from 'express';
import cors from 'cors';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { resolvers } from './resolvers.js';

async function startServer() {
    try {
        const app = express();

        app.use(express.json());
        app.use(cors());

        const server = new ApolloServer({
            typeDefs: `
                type User {
                    id:ID!
                    name:String!
                    username:String!
                    email:String!
                }

                type Todo {
                    id: ID!
                    title: String!
                    completed: Boolean
                    user: User
                }

                type Query {
                    getTodos: [Todo]
                    getAllUsers: [User]
                    getUser (id:ID!): User
                }
            `,
            resolvers,
        });

        await server.start();

        app.use('/api', expressMiddleware(server));

        app.listen(4000, () => console.log('Server is Running: http://localhost:4000/api'));
    } catch (error) {
        console.log('error -> ', error?.message);
    }
}

startServer();
